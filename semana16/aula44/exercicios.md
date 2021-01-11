## Exercício 1
```
USE `dumont-rafael-fontes`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```

a) VARCHAR(255) representa uma string com no máximo 255 caracteres.

DATE representa uma data no formato YYYY-MM-DD.

NOT NULL significa que é necessário informar um valor não nulo.

PRIMARY KEY significa que é necessário informar um único e não nulo.

b)

    SHOW DATABASES
Este comando mostra os bancos de dados disponíves

    SHOW TABLES
Este comando mostra as tabelas criadas

c) 
    
    DESCRIBE Actor
Este comando mostra os nomes e características dos campos da tabela 'Actor'.

---
## Exercício 2
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
);
```
b)
    
    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
A mensagem diz que não é psossível adicionar uma entrada com id duplicada pois se trata de um campo PRIMARY KEY.

c)

    Error Code: 1136. Column count doesn't match value count at row 1
Esta mensagem informa que os dados da linha 1 não conferem com a descrição dos campos

d) 

    Error Code: 1364. Field 'name' doesn't have a default value
Esta mensagem informa que faltou informa o valor do campo 'name'.

e)
    
    Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Esta mensagem informa que o formato da data informado está incorreto. Deveria estar entre aspas.

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
---
## Exercício 3
a)

    SELECT * from Actor WHERE gender = "female";

b)

    SELECT salary from Actor WHERE name = "Tony Ramos";

c)

    SELECT * from Actor WHERE gender = "invalid";
    0 row(s) returned
A busca retornou 0 resultados pois não há nenhuma linha da tabela com este valor no campo 'gender'.

d)

    SELECT id, name, salary from Actor  WHERE salary <= 500000;

e)

    Error Code: 1054. Unknown column 'nome' in 'field list'
Esta mensagem informa que não existe uma coluna chamada 'nome'. O correto seria 'name'.

---
## Exercício 4
a) A query busca linhas na tabela 'Actor' que atendem os requisitos de possuir as letras 'A' ou 'J' no campo 'name' e valores superiores a 300000 no campo 'salary'.

b)

    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000;

c)

    SELECT * FROM Actor
    WHERE name LIKE "%G%" OR "%g%";

d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
	AND salary BETWEEN 350000 AND 900000;
```

---
##Exercício 5

a)



