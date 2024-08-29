import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const members = sqliteTable("members", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  nickName: text("nick_name").notNull(),
  location: text("location").notNull(),
  religion: text("religion").notNull(),
  mbti: text("mbti").notNull(),
  description: text("description").notNull(),
  imageUrls: text("image_urls").notNull(),
});

export const membersRelations = relations(members, ({ one, many }) => ({
  favorites: one(favorites),
  socials: many(socials),
  hobbies: many(hobbies),
}));

export const favorites = sqliteTable("favorites", {
  id: text("id").primaryKey(),
  food: text("food").notNull(),
  color: text("color").notNull(),
  electricFanNumber: integer("electric_fan_number").notNull(),
  quote: text("quote").notNull(),
  memberId: text("member_id").references(() => members.id).notNull(),
});

export const favoritesRelations = relations(favorites, ({ one }) => ({
  member: one(members, {
    fields: [favorites.memberId],
    references: [members.id],
  }),
}));

export const socials = sqliteTable("socials", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  memberId: text("member_id").references(() => members.id).notNull(),
});

export const socialsRelations = relations(socials, ({ one }) => ({
  member: one(members, {
    fields: [socials.memberId],
    references: [members.id],
  }),
}));

export const hobbies = sqliteTable("hobbies", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  memberId: text("member_id").references(() => members.id).notNull(),
});

export const hobbiesRelations = relations(hobbies, ({ one }) => ({
  member: one(members, {
    fields: [hobbies.memberId],
    references: [members.id],
  }),
}));
