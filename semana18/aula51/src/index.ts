import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { postUser } from './endpoints/postUser'
import { getUserAndLogin } from "./endpoints/getUserAndLogin";
import { getProfile } from "./endpoints/getProfile";
import { deleteProfile } from "./endpoints/deleteProfile";
import { getUserInfo } from "./endpoints/getUserInfo";

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

const app = express();
app.use(express.json());

app.post('/signup', postUser)
app.post('/login', getUserAndLogin)
app.get('/user/profile', getProfile)
app.delete('/user/:id', deleteProfile)
app.get('/user', getUserInfo)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});