DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS places CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  profile_thumbnail_img VARCHAR(255)
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  city_name VARCHAR(255) NOT NULL,
  thumbnail_img_url VARCHAR(255),
  cover_photo_url VARCHAR(255)
);

CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  destination_id INT NOT NULL,
  place_name TEXT,
  description TEXT,
  rating INTEGER,
  thumbnail_img_url VARCHAR(255),
  cover_photo_url VARCHAR(255),
  google_map_link VARCHAR(255)
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  place_id INT REFERENCES places(id),
  destination_id INT REFERENCES destinations(id),
  user_id INT REFERENCES users(id),
  start_date DATE,
  end_date DATE,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL
);
