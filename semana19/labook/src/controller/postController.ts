import { Request, Response } from "express";
import { AuthenticationData } from "../business/entities/user";
import { businessCreatePost, businessGetPostById } from "../business/postBusiness";
import { getTokenData } from "../business/services/authenticator";

export const createPost = async (
    req: Request,
    res: Response
 ) => {
    try {
 
        const { photo, description, type } = req.body

        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = getTokenData(token)
 
        await businessCreatePost(
            photo,
            description,
            type,
            tokenData.id
        )
 
       res.status(201).send("Post criado!")
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}

export const getPostbyId = async (
    req: Request,
    res: Response
 ) => {
    try {
        const { id } = req.params

        const result = await businessGetPostById(id)
        
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.message)
    }
}