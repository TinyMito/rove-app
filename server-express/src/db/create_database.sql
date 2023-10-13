-- Create a user 'development' with a password
CREATE USER development WITH PASSWORD 'development';

-- Create the 'rove' database and assign it to the 'development' user
CREATE DATABASE rove;
GRANT ALL PRIVILEGES ON DATABASE rove TO development;
ALTER DATABASE rove OWNER TO development;