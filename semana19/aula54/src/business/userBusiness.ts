import { createUser, getUserByEmail, getUserById, getUsersList } from "../data/userDatabase";
import { ROLES, user } from "./entities/user";
import { generateId } from "./services/generateId";
import { generateToken } from "./services/generateToken";
import { compareHash, generateHash } from "./services/hashManager";

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: ROLES
 ) => {
    let statusCode = 400
    if(!email || email.indexOf("@") === -1){
        statusCode = 422
        throw new Error("E-mail inválido")
    }
    if(!password || password.length < 6){
        statusCode = 422
        throw new Error("Senha inválida")
    }

    const id: string = generateId()
    const hashPassword = await generateHash(password)
    await createUser(
        id,
        name,
        email,
        hashPassword,
        role
    )

    const token = generateToken({
        id,
        role: role
    })

    return token
}

export const businessLogin = async (
    email: string,
    password: string
 ) => {
    let statusCode = 400
    if (!email || email.indexOf("@") === -1) {
        statusCode = 422
        throw new Error("E-mail inválido")
    }

    const user: user[] = await getUserByEmail(
        email
    )

    if (user.length===0) {
        statusCode = 422
        throw new Error("E-mail inexistente ou incorreto")
    }

    const compareResult = await compareHash(
        password,
        user[0].password
    )

    if (!compareResult) {
        throw new Error("Senha incorreta");
    }

    const id: string = user[0].id
    const token = generateToken({
        id,
        role: user[0].role
    })

    return token
}

export const businessGetAllUsers = async (
    id: string
 ) => {
    let statusCode = 400
    
    const user: user = await getUserById(id)

    if (!user) {
        statusCode = 422
        throw new Error("Usuário inexistente")
    } 
    
    const users: user[] = await getUsersList()

    return users
}

// import { Request, Response } from "express";
// import deleteUser from "../data/deleteUser";
// import { getData } from "../data/getData";
// import getUserById from "../data/getUserById";

// export const deleteProfile = async(req: Request,res: Response): Promise<any> =>{
//     let errorCode = 400
//     try {
//         const token = req.headers.authorization as string

//         const authenticationData = getData(token)

//         if (authenticationData.role !== "ADMIN") {
//             errorCode = 401
//             throw new Error("Apenas usuários do tipo ADMIN podem usar esta funcionalidade");
//         }

//         const id = req.params.id;
//         const user = await getUserById(id)

//         if(!user) {
//             errorCode = 421
//             throw new Error("Perfil não encontrado");
//         }

//         await deleteUser(id);
        
//         res.status(200).send("Perfil apagado com sucesso")

//     } catch (error) {
//         res.status(errorCode).send(error.message || error.sqlMessage)
//     }
// }