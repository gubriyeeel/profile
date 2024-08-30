import { integer, pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const members = pgTable("members", {
  id: text("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  nickName: varchar("nick_name", { length: 100 }),
  location: varchar("location", { length: 255 }).notNull(),
  religion: varchar("religion", { length: 100 }),
  mbti: varchar("mbti", { length: 4 }),
  description: text("description"),
  imageUrls: text("image_urls").notNull().default(''),
});

export const membersRelations = relations(members, ({ one, many }) => ({
  favorite: one(favorites, {
    fields: [members.id],
    references: [favorites.memberId],
  }),
  socials: many(socials),
  memberHobbies: many(memberHobbies),
}));

export const favorites = pgTable("favorites", {
  id: text("id").primaryKey(),
  food: varchar("food", { length: 100 }),
  color: varchar("color", { length: 50 }),
  electricFanNumber: integer("electric_fan_number"),
  quote: text("quote"),
  memberId: text("member_id")
    .references(() => members.id)
    .notNull()
    .unique(),
});

export const favoritesRelations = relations(favorites, ({ one }) => ({
  member: one(members, {
    fields: [favorites.memberId],
    references: [members.id],
  }),
}));

export const socials = pgTable("socials", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  url: varchar("url", { length: 255 }).notNull(),
  memberId: text("member_id")
    .references(() => members.id)
    .notNull(),
});

export const socialsRelations = relations(socials, ({ one }) => ({
  member: one(members, {
    fields: [socials.memberId],
    references: [members.id],
  }),
}));

export const hobbies = pgTable("hobbies", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
});

export const hobbiesRelations = relations(hobbies, ({ many }) => ({
  memberHobbies: many(memberHobbies),
}));

export const memberHobbies = pgTable("member_hobbies", {
  id: text("id").primaryKey(),
  memberId: text("member_id")
    .references(() => members.id)
    .notNull(),
  hobbyId: text("hobby_id")
    .references(() => hobbies.id)
    .notNull(),
});

export const memberHobbiesRelations = relations(memberHobbies, ({ one }) => ({
  member: one(members, {
    fields: [memberHobbies.memberId],
    references: [members.id],
  }),
  hobby: one(hobbies, {
    fields: [memberHobbies.hobbyId],
    references: [hobbies.id],
  }),
}));
