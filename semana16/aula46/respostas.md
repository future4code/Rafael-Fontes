## Exercício 1

a) Retorna um array com dados e metadados. Neste caso selecionamos o primeiro objeto do primeiro item do array.

b)
```
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
   `)
   
   return result[0][0]
}
```

c)
```
const countActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
   `)
   
   return result[0][0].count
}
```

---
## Exercício 2

a)
```
const updateSalaryById = async (
      id: string,
      salary: number
   ): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id);
}
```

b)
```
const deleteActorById = async (id: string) : Promise<any> => {
   await connection("Actor")
   .delete()
   .where("id",id)
}
```

c)
```
const averageSalary = async (gender: string) : Promise<any> => {
   const result = await connection("Actor")
   .avg("salary as average")
   .where({gender})

   return result[0].average
}
````

---
## Exercício 3
a)
```
app.get('/actor/:id', async (req:Request , res:Response) => {
   try {
      const id = req.params.id;
      const actor = await getActorById(id);
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

b)
```
app.get('/actor', async (req:Request , res:Response) => {
   try {
      const gender = req.query.gender;
      const count = await countActorByGender(gender as string);
      res.status(200).send({
         quantity: count,
       })
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

---
## Exercício 4

a)
```
app.post('/actor', async (req: Request, res: Response) => {
   try {
      await updateSalaryById(
         req.body.id,
         req.body.salary
       )
   
       res.status(200).send("Salário atualizado");
   } catch (err) {
      res.status(400).send({
         message: err.message,
       })
   }
})
```

b)
```
app.delete('/actor/:id', async (req:Request , res:Response) => {
   try {
      const id = req.params.id;
      await deleteActorById(id);
      res.status(200).send(`Id ${id} apagado com sucesso`)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

---
## Exercício 5
```
const addMovie = async (
   id: string,
   title: string,
   synopsis: string,
   launch_date: Date,
   rating: number,
   playing_limit_date: Date
 ): Promise<void> => {
   await connection
     .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      launch_date: launch_date,
      rating: rating,
      playing_limit_date: playing_limit_date
     })
     .into("Movie")
}

app.post('/movie', async (req: Request, res: Response) => {
   try {
      await addMovie(
         req.body.id,
         req.body.title,
         req.body.synopsis,
         req.body.launch_date,
         req.body.rating,
         req.body.playing_limit_date
       )
       res.status(200).send("Filme adicionado");
   } catch (err) {
      res.status(400).send({
         message: err.message,
       })
   }
})
```

---
## Exercício 6
```
const getAllMovies = async (): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
   `)
   
   return result[0]
}

app.get('/movie/all', async (req:Request , res:Response) => {
   try {
      const movies = await getAllMovies();
      res.status(200).send(movies)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```

---
## Exercício 7
```
const searchMovies = async (query: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT title, synopsis, launch_date FROM Movie
      WHERE
         (title LIKE "%${query}%"
         OR
         synopsis LIKE "%${query}%")
      ORDER BY launch_date DESC
   `)
   return result[0]
}

app.get('/movie/search', async (req:Request , res:Response) => {
   try {
      const result = await searchMovies(req.query.searchQuery as string);
      res.status(200).send({result})
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
})
```