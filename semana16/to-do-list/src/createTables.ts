import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";

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

const createTable = async (): Promise<void> => {
    await connection.raw(`

    CREATE TABLE TodoListUser (
        id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
    );
    
    CREATE TABLE TodoListTask (
		id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
    );

    CREATE TABLE TodoListResponsibleUserTaskRelation (
		task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
    );

    `)
    console.log("Tabelas criadas")
    // connection.destroy()
}

createTable()



