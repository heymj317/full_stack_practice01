--garage database
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
   id SERIAL PRIMARY KEY,
    name TEXT,
    city VARCHAR(255)
);

CREATE TABLE cars (
    id serial PRIMARY KEY,
    owner_id INTEGER,
    make text,
    model text,
    FOREIGN KEY (owner_id) REFERENCES owners (id) ON DELETE CASCADE
);
