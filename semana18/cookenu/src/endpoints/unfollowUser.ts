import { Request, Response } from "express";
import checkFollow from "../data/checkFollow";
import deleteFollow from "../data/deleteFollow";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";

export const unfollowUser = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.userToUnfollowId){
            res.statusCode = 422
            throw new Error("Usuário a deixar de ser seguido não foi preenchido")
        }

        const userToUnfollow = await getUserById(req.body.userToUnfollowId)
        if(!userToUnfollow){
            res.statusCode = 422
            throw new Error("Usuário a deixar de ser seguido não foi encontrado")
        }

        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user = await getUserById(authenticationData.id)

        if(!user){
            res.statusCode = 422
            throw new Error("Usuário não encontrado ou acesso não permitido")
        }

        if(user.id===req.body.userToUnfollowId) {
            res.statusCode = 422
            throw new Error("Não é possível deixar de seguir a si mesmo")
        }

        const follow = await checkFollow(
            user.id,
            req.body.userToUnfollowId
        )
        
        if(!follow) {
            res.statusCode = 422
            throw new Error("Você não está seguindo este usuário")
        }

        await deleteFollow(
            user.id,
            req.body.userToUnfollowId
        )

        res.status(200).send("Usuário deixou de ser seguido")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}