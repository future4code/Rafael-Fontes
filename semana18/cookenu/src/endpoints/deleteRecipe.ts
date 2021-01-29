import { Request, Response } from "express";
import eraseRecipe from "../data/eraseRecipe";
import { getData } from "../data/getData";
import getRecipeById from "../data/getRecipeById";
import getUserById from "../data/getUserById";
import { ROLES } from "../types/authentication";

export const deleteRecipe = async(req: Request,res: Response): Promise<any> =>{
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user_id = await getUserById(authenticationData.id)
        const role: ROLES = authenticationData.role
        const recipe = await getRecipeById(req.params.id)

        if (recipe.user_id!==user_id.id && role!=="ADMIN") {
            res.statusCode = 422
            throw new Error("Não é permitido apagar a receita de outro usuário")
        }

        await eraseRecipe(
            req.params.id
        )

        res.status(200).send("Receita apagada com sucesso")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}