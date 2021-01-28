CREATE TABLE Cookenu_user(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Cookenu_recipe(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    createDate DATE NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Cookenu_user(id)
);

CREATE TABLE Cookenu_follow(
	follower_id VARCHAR(255) NOT NULL,
    followed_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES Cookenu_user(id),
    FOREIGN KEY (followed_id) REFERENCES Cookenu_user(id)
);

ALTER TABLE Cookenu_user
ADD role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL";