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

```

---
## Exercício 3
a)

---
## Exercício 4

a)

---
## Exercício 5


---
## Exercício 6


