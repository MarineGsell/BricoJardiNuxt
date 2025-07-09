CREATE TABLE `clients` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`firstname` text NOT NULL,
	`lastname` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`text` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
DROP TABLE `users`;