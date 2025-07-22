import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const clients = sqliteTable('clients', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    firstname: text('firstname').notNull(),
    lastname: text('lastname').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    text: text('text').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})

export const works = sqliteTable('works', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  place: text('place').notNull(),
  imgSrc: text('imgSrc'),
  category: text('category').notNull(),
  description: text('description').notNull(),
})