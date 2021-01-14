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
```
SELECT Movie.id, Movie.title, Rating.rate, Rating.comment FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b)
```
SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie 
RIGHT JOIN MovieCast ON Movie.id = MovieCast.movie_id;
```

c)
```
SELECT Movie.id, Movie.title, AVG(Rating.rate) FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id
```

---
## Exercício 5
a) Essa query junta as informações da tabela de filmes com a tabela de elenco e a partir desta com a tabela de atores. É necessário usar JOIN duas vezes pois a tabela de atores necessita da tabela de elenco, que por sua vez necessita das informações da tabela de filmes.

b)
```
SELECT Movie.id as movie_id, Movie.title as movie_title, Actor.id as actor_id, Actor.name as actor_name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c)
```
Error Code: 1054. Unknown column 'm' in 'field list'
```
A mensagem informa que não encontro o campo 'm', pois ele só está definido com este nome posteriormente ao final da sentença

d)
```
SELECT Movie.id as movie_id, Movie.title as movie_title, Rating.comment as comment, Rating.rate as rate, Actor.id as actor_id, Actor.name as actor_name FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```


---
## Exercício 6

a) É uma relação N:M pois vários prêmios de Oscar podem se relacionar com diversos filmes.

b) 
```
CREATE TABLE MovieAward (
		movie_id VARCHAR(255),
		award_name VARCHAR(255),
        award_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

c)
```
INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "001", 
  "Melhor Roteiro",
  "2007-02-01"
);

INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "001", 
  "Melhor Comédia",
  "2007-02-01"
);

INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "002", 
  "Melhor Roteiro",
  "2007-02-01"
);

INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "002", 
  "Melhor Direção",
  "2007-02-01"
);

INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "004", 
  "Melhor Filme",
  "2016-02-01"
);

INSERT INTO MovieAward (movie_id, award_name, award_date)
VALUES(
  "004", 
  "Melhor Direção",
  "2016-02-01"
);
```

d)
```
SELECT Movie.title as movie_title, MovieAward.award_name as award_name, MovieAward.award_date as award_date FROM Movie
RIGHT JOIN MovieAward ON Movie.id = MovieAward.movie_id
ORDER BY MovieAward.award_date DESC;
```

