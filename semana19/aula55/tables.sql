CREATE TABLE to_do_list_users(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE to_do_list_tasks(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    deadline VARCHAR(255) NOT NULL,
    author_id VARCHAR(255) NOT NULL
);