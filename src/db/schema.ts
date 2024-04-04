import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: int('id'),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phoneNumber: text('phone_number').notNull(),
})

export const subscriberIds = sqliteTable('subscriber_ids', {
    id: int('id'),
    userId: int('user_id'),
    categoryId: int('category_id')
})

export const channelIds = sqliteTable('channel_ids', {
    id: int('id'),
    userId: int('user_id'),
    channelId: int('channel_id')
})

export const channels = sqliteTable('channels', {
    id: int('id'),
    name: text('name'),
    internalReference: text('internal_reference')
})

export const categories = sqliteTable('categories', {
    id: int('id'),
    name: text('name'),
    internalReference: text('internal_reference')
})