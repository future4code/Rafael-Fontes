import { Request, Response } from "express";
import checkFollow from "../data/checkFollow";
import { getData } from "../data/getData";
import getUserById from "../data/getUserById";
import matchUsers from "../data/matchUsers";

export const followUser = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.userToFollowId){
            res.statusCode = 422
            throw new Error("Usuário a ser seguido não foi preenchido")
        }

        const userToFollow = await getUserById(req.body.userToFollowId)
        if(!userToFollow){
            res.statusCode = 422
            throw new Error("Usuário a ser seguido não foi encontrado")
        }

        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user = await getUserById(authenticationData.id)

        if(!user){
            res.statusCode = 422
            throw new Error("Usuário não encontrado ou acesso não permitido")
        }

        if(user.id===req.body.userToFollowId) {
            res.statusCode = 422
            throw new Error("Não é possível seguir a si mesmo")
        }

        const follow = await checkFollow(
            user.id,
            req.body.userToFollowId
        )
        if(follow) {
            res.statusCode = 422
            throw new Error("Você já está seguindo este usuário")
        }

        await matchUsers(
            user.id,
            req.body.userToFollowId
        )

        res.status(200).send("Usuário seguido com sucesso")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}