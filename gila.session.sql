CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT NOT NULL UNIQUE,
);
CREATE TABLE channels(
    id INTEGER PRIMARY_KEY,
    name TEXT,
    internalReference TEXT
) CREATE TABLE subscription_ids (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    subscription_id INTEGER,
    FOREIGN KEY (subscription_id) REFERENCES channels(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
) CREATE TABLE channel_ids (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    channel_id INTEGER,
    FOREIGN KEY (channel_id) REFERENCES users(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);