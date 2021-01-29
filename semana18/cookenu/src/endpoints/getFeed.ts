import { Request, Response } from "express";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";
import selectRecipes from "../data/selectRecipes";

export const getFeed = async(req: Request,res: Response): Promise<any> =>{
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user_id = await getUserById(authenticationData.id)
        const recipes = await selectRecipes(
            user_id.id
        )

        res.status(200).send({recipes})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}