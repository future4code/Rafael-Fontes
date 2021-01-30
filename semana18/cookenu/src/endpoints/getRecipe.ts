import { Request, Response } from "express";
import { getData } from "../data/getData";
import getRecipeById from "../data/getRecipeById";
import getUserById from "../data/getUserById";

export const getRecipe = async(req: Request,res: Response): Promise<any> =>{
    let errorCode = 400
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const profile = await getUserById(authenticationData.id)
        
        if (!profile.id) {
            res.statusCode = 422
            throw new Error("Acesso não permitido")
        }

        const recipe = await getRecipeById(req.params.id)
        var dayjs = require('dayjs')
        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: dayjs(recipe.createDate).format('DD/MM/YYYY')
        })

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}