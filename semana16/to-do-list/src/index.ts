import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import dayjs from 'dayjs';

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

const createUser = async (
   name: string,
   nickname: string,
   email: string
   ): Promise<void> => {
   await connection
     .insert({
       id: Date.now(),
       name: name,
       nickname: nickname,
       email: email
     })
     .into("TodoListUser");
};

app.put("/user", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      if(!req.body.name || !req.body.nickname || !req.body.email){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }
      await createUser(
         req.body.name,
         req.body.nickname,
         req.body.email
      )
      res.status(200).send("Usuário criado com sucesso");
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})

const getAllUsers = async(): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM TodoListUser;
   `)
   return result[0]
}

app.get("/user/all", async (req: Request, res: Response) => {
   try {
      const result = await getAllUsers()
      res.status(200).send(result);
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})

const getUserById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE id=${id};
   `)
   return result[0][0]
};

app.get("/user/:id", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      const id = req.params.id
      if(!req.params.id){
         errorCode = 422;
         throw new Error("Preencha o ID e tente novamente.")
      }
      const result = await getUserById(id)
      if (result===undefined){
         errorCode = 400;
         throw new Error("ID não encontrado.")
      }
      res.status(200).send(result);
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})

const editUser = async (
   id: string,
   name: string,
   nickname: string
   ): Promise<any> => {
   const result = await connection.raw(`
      UPDATE TodoListUser
      SET
         name="${name}",
         nickname="${nickname}"
      WHERE id=${id};
   `)
   return result[0][0]
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      const id = req.params.id
      const name = req.body.name
      const nickname = req.body.nickname
      if(!req.params.id || !req.body.name || !req.body.nickname){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }
      const result = await editUser(id, name, nickname)
      res.status(200).send(result);
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})


const createTask = async (
   title: string,
   description: string,
   limitDate: string,
   creatorUserId: string
   ): Promise<void> => {
   await connection
     .insert({
       id: Date.now(),
       title: title,
       description: description,
       limit_date: limitDate,
       creator_user_id: creatorUserId
     })
     .into("TodoListTask");
};

app.put("/task", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      if(!req.body.title ||
         !req.body.description ||
         !req.body.limitDate ||
         !req.body.creatorUserId){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }
      await createTask(
         req.body.title,
         req.body.description,
         dayjs(req.body.limitDate).format("YYYY-DD-MM"),
         req.body.creatorUserId
      )
      res.status(200).send("Tarefa criada com sucesso");
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})

const getTaskById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT
         TodoListTask.id as taskId,
         TodoListTask.title,
         TodoListTask.description,
         TodoListTask.limit_date as limitDate,
         TodoListTask.status,
         TodoListTask.creator_user_id as creatorUserId,
         TodoListUser.nickname as creatorUserNickname
      FROM TodoListTask
      LEFT JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
      WHERE TodoListUser.id=${id};
   `)
   return result[0][0]
};

app.get("/task/:id", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      const id = req.params.id
      if(!req.params.id){
         errorCode = 422;
         throw new Error("Preencha o ID e tente novamente.")
      }
      const result = await getTaskById(id)
      if (result===undefined){
         errorCode = 400;
         throw new Error("ID não encontrado.")
      }
      res.status(200).send(result);
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
})


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
