import { createUser, deleteUser, getUserByEmail, getUserById, getUsersList } from "../data/userDatabase";
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

export const businessDeleteProfile = async (
    id: string,
    role: string
 ) => {
    let statusCode = 400

    if(role!=="ADMIN") {
        statusCode = 422
        throw new Error("Permissão negada!")
    } 

    await deleteUser(id)
}