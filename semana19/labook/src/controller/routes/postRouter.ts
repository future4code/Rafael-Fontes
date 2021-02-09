import express from "express";
import { createPost, getPostbyId } from "../postController";

export const postRouter = express.Router()

postRouter.put("/create", createPost)
postRouter.get("/:id", getPostbyId)