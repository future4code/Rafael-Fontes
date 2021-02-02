import express from "express";
import { createTask, getTaskById } from "../../controller/taskController";

export const taskRouter = express.Router()

taskRouter.put("/", createTask)
taskRouter.get("/:id", getTaskById)