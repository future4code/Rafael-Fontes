import { Request, Response } from "express";
import { getData } from "../data/getData";
import getRecipeById from "../data/getRecipeById";
import getUserById from "../data/getUserById";
import updateRecipe from "../data/updateRecipe";

export const putRecipe = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.title){
            res.statusCode = 422
            throw new Error("Título não preenchido")
        }

        if(!req.body.description){
            res.statusCode = 422
            throw new Error("Descrição não preenchida")
        }

        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user_id = await getUserById(authenticationData.id)
        const recipe = await getRecipeById(req.params.id)

        if (recipe.user_id!==user_id.id) {
            res.statusCode = 422
            throw new Error("Não é permitido alterar a receita de outro usuário")
        }

        await updateRecipe(
            req.params.id,
            req.body.title,
            req.body.description,
        )

        res.status(200).send("Receita atualizada com sucesso")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}