## Exercício 1

a) É uma propriedade de uma campo de tabela que referencia a um campo PRIMARY KEY de outra tabela, cujos valores necessariamente devem existir na tabela de referência.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001", 
  "Sem graça",
  5,
  "001"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "002", 
  "Muito bom",
  8,
  "002"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "003", 
  "Ótimo",
  10,
  "004"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "004", 
  "OK",
  7,
  "007"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "005", 
  "OK",
  7,
  "008"
);
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-rafael-fontes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
A mensagem informa que o campo de referência não possui o valor informado.

d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)
```
DELETE FROM Movie
WHERE id="008";
```
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-rafael-fontes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
Não é possível apagar pois a id do filme está referenciado na tabela 'Rating'

---
## Exercício 2

a) 
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
Esta tabela cria um elenco referenciado nos ids das tabelas de filmes e atores/atrizes.

b)
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "001", 
  "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "004", 
  "005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "001", 
  "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "002", 
  "003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "002", 
  "005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "007", 
  "001"
);
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-rafael-fontes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
A mensagem informa que o valor informado não está presente na tabela referenciada

d)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-rafael-fontes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
A mensagem informa que não é possível apagar a linha pois a id está referenciada em outra tabela.

---
## Exercício 3
a) A query retorna uma tabela com informações das tabelas Movie e Rating. O operador ON associa as informações das tabelas de modo a mostrar na mesma linha apenas as informações que possuam a mesma id em ambas tabelas.

b)
```
SELECT Movie.id, Movie.title, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

---
## Exercício 4

a)

---
## Exercício 5


---
## Exercício 6


