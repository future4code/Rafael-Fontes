import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers, login, signup } from "./controller/userController";

dotenv.config();
const app = express();
app.use(express.json());

app.put('/signup', signup)
app.post('/login', login)
app.get('/user/all', getAllUsers)
// app.delete('/user/:id', deleteProfile)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});