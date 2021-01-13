import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors())

const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
   `)
   console.log(result[0][0])
   return result[0][0]
}
// getActorByName("Juliana Paes")

const countActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
   `)
   console.log(result[0][0].count)
   return result[0][0].count
}
// countActorByGender("female")

const createActor = async (
   id: string,
   name: string,
   salary: number,
   dateOfBirth: string,
   gender: string
 ): Promise<void> => {
   await connection
     .insert({
       id: id,
       name: name,
       salary: salary,
       birth_date: dateOfBirth,
       gender: gender,
     })
     .into("Actor");
 };
//  createActor("007","Fulano de Tal",100000,"1970-01-01","male")

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
// updateSalaryById("007",40000)

 const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
   `)
   console.log(result[0][0])
   return result[0][0]
}
// getActorById("007")

const deleteActorById = async (id: string) : Promise<any> => {
   await connection("Actor")
   .delete()
   .where("id",id)
}
// deleteActorById("007")

const averageSalary = async (gender: string) : Promise<any> => {
   const result = await connection("Actor")
   .avg("salary as average")
   .where({gender})

   return result[0].average
}
// averageSalary("female")

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

app.put("/actor", async (req: Request, res: Response) => {
   try {
     await createActor(
       req.body.id,
       req.body.name,
       req.body.salary,
       req.body.dateOfBirth,
       req.body.gender
     )
 
     res.status(200).send("Criado com sucesso");
   } catch (err) {
     res.status(400).send({
       message: err.message,
     })
   }
})

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



// const pokemons: Pokemon[] = []

// app.get("/pokemon/all", async (req: Request, res: Response) => {
//    try {

//       if (!pokemons.length) {
//          res.statusCode = 404
//          throw new Error("No pokemons found")
//       }

//       res.status(200).send(pokemons)

//    } catch (error) {
//       console.log(error)
//       res.send(error.message)
//    }
// });

// app.post("/pokemon/new", async (req: Request, res: Response) => {
//    try {

//       const { id, name, type } = req.body;

//       const pokemon: Pokemon | undefined = pokemons.find(
//          pokemon => pokemon.id === id
//       )

//       if (pokemon) {
//          res.statusCode = 409
//          throw new Error("Id already exists")
//       }

//       if (!(type in POKE_TYPES)) {
//          res.statusCode = 406
//          throw new Error("Invalid Pokemon types")
//       }


//       pokemons.push({ id, name, type })

//       res.status(201).send("New Pokemon created!");
//    } catch (error) {
//       console.log(error)
//       res.send(error.message)
//    }
// });

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
