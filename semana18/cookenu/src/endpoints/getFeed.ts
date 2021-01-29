import { Request, Response } from "express";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";
import selectRecipes from "../data/selectRecipes";

export const getFeed = async(req: Request,res: Response): Promise<any> =>{
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user_id = await getUserById(authenticationData.id)
        const feed = await selectRecipes(
            user_id.id
        )

        var dayjs = require('dayjs')
        const recipes = feed.map((recipe: { id: string; title: string; description: string; createdAt: string; userId: string; userName: string  }) => {
            return {
                 id: recipe.id,
                 title: recipe.title,
                 description: recipe.description,
                 createdAt: dayjs(recipe.createdAt).format('DD/MM/YYYY'),
                 userId: recipe.userId,
                 userName: recipe.userName
            }
        })

        res.status(200).send({recipes})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}