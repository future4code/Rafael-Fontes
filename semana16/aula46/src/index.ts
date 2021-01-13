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

// const getActorById = async (id: string): Promise<any> => {
//    const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//    `)
//    console.log(result[0][0])
//    return result[0][0]
// }

// getActorById("001")

// const getActorByName = async (name: string): Promise<any> => {
//    const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = '${name}'
//    `)
//    console.log(result[0][0])
//    return result[0][0]
// }

// getActorByName("Juliana Paes")

const countActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
   `)
   console.log(result[0][0].count)
   return result[0][0].count
}

countActorByGender("female")




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
