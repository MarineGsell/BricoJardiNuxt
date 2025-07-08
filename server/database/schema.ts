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
