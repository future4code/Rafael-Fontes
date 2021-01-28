import { Request, Response } from "express";
import createRecipe from "../data/createRecipe";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";
import { generateId } from "../services/generateId";

export const postRecipe = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.title){
            res.statusCode = 422
            throw new Error("Título não preenchido")
        }

        if(!req.body.description){
            res.statusCode = 422
            throw new Error("Descrição não preenchida")
        }

        const id: string = generateId()
        const today: string = "2021-01-01"
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user_id = await getUserById(authenticationData.id)

        await createRecipe(
            id,
            req.body.title,
            req.body.description,
            today,
            user_id.id
        )

        res.status(200).send("Receita criada com sucesso")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}