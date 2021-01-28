CREATE TABLE AddressInfo_aula52 (
	place VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    additional VARCHAR(255),
    neighbourhood VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User_aula50(id)
);