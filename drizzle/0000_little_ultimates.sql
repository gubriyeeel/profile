CREATE TABLE `favorites` (
	`id` text PRIMARY KEY NOT NULL,
	`food` text NOT NULL,
	`color` text NOT NULL,
	`electric_fan_number` integer NOT NULL,
	`quote` text NOT NULL,
	`member_id` text NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `hobbies` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`member_id` text NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `members` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`nick_name` text NOT NULL,
	`location` text NOT NULL,
	`religion` text NOT NULL,
	`mbti` text NOT NULL,
	`description` text NOT NULL,
	`image_urls` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `socials` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`url` text NOT NULL,
	`member_id` text NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON UPDATE no action ON DELETE no action
);
