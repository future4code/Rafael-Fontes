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
## Exercício 5

a)
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    launch_date DATE NOT NULL,
	rating FLOAT NOT NULL
);
```
A query acima cria uma tabela com os campos e requisitos necessários.

b)
```
INSERT INTO Movie (id, title, synopsis, launch_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
```
c)
```
INSERT INTO Movie (id, title, synopsis, launch_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
```
d)
```
INSERT INTO Movie (id, title, synopsis, launch_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02", 
  "8"
);
```
e)
```
INSERT INTO Movie (id, title, synopsis, launch_date, rating)
VALUES(
  "004", 
  "Que Horas Ela Volta?",
  "A pernambucana Val (Regina Casé) se mudou para São Paulo a fim de dar melhores condições de vida para sua filha Jéssica. Com muito receio, ela deixou a menina no interior de Pernambuco para ser babá de Fabinho, morando integralmente na casa de seus patrões. Treze anos depois, quando o menino (Michel Joelsas) vai prestar vestibular, Jéssica (Camila Márdila) lhe telefona, pedindo ajuda para ir à São Paulo, no intuito de prestar a mesma prova. Os chefes de Val recebem a menina de braços abertos, só que quando ela deixa de seguir certo protocolo, circulando livremente, como não deveria, a situação se complica.",
  "2015-08-27", 
  "10"
);
```
---
## Exercício 6
a)

    SELECT id, title, rating from Movie WHERE id = "004";
b)

    SELECT * FROM Movie WHERE title = "Que Horas Ela Volta?";
c)

    SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

---
## Exercício 7
a)

    SELECT * FROM Movie
    WHERE title LIKE "%vida%";

b)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%" OR
    synopsis LIKE "%vida%";
```
c)
```
SELECT * FROM Movie
WHERE launch_date <= "2021-01-11";
```
d)
```
SELECT * FROM Movie
WHERE launch_date < "2021-01-11" AND 
      (title LIKE "%vida%" OR
      synopsis LIKE "%vida%") AND rating > 7;
```
