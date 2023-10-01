DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS places CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS trips CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_thumbnail_img VARCHAR(255)
);

-- destinations = cities
CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  thumbnail_img_url VARCHAR(255),
  cover_photo_url VARCHAR(255)
);

-- places you can go to in the city
CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  destination_id INT NOT NULL,
  name TEXT,
  description TEXT,
  rating INTEGER,
  thumbnail_img_url VARCHAR(255),
  cover_photo_url VARCHAR(255),
  google_map_link VARCHAR(255)
);

CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,
  start_date VARCHAR(10),
  end_date VARCHAR(10),
  user_id INT REFERENCES users(id),
  destination_id INT REFERENCES destinations(id)
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  place_id INT REFERENCES places(id),
  destination_id INT REFERENCES destinations(id),
  user_id INT REFERENCES users(id),
  schedule_id INT REFERENCES schedules(id),
  date VARCHAR(10),
  start_time VARCHAR(5),
  end_time VARCHAR(5)
);

