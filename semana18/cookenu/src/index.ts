import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { postUser } from './endpoints/postUser'
import { getUserAndLogin } from "./endpoints/getUserAndLogin";
import { getProfile } from "./endpoints/getProfile";
import { deleteProfile } from "./endpoints/deleteProfile";
import { getUserProfile } from "./endpoints/getUserProfile";
import { postRecipe } from "./endpoints/postRecipe";
import { getRecipe } from "./endpoints/getRecipe";
import { followUser } from "./endpoints/followUser";
import { unfollowUser } from "./endpoints/unfollowUser";
import { getFeed } from "./endpoints/getFeed";
import { putRecipe } from "./endpoints/putRecipe";
import { deleteRecipe } from "./endpoints/deleteRecipe";
import { resetPassword } from "./endpoints/resetPassword";

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
app.get('/user/feed', getFeed)
app.get('/user/:id', getUserProfile)
app.post('/recipe', postRecipe)
app.get('/recipe/:id', getRecipe)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)
app.put('/recipe/edit/:id', putRecipe)
app.delete('/recipe/delete/:id', deleteRecipe)
app.delete('/user/:id', deleteProfile)
app.post('/user/reset/password', resetPassword)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});