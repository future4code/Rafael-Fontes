import { UserDatabase } from "../data/UserDatabase";
import { User } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { HashManager } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

const hashManager = new HashManager()
const userDatabase = new UserDatabase()

export const businessSignup = async(
    name: string,
    email: string,
    password: string
) => {
    if (!name || !email || !password) {
        throw new Error("Preencha todos os campos")
    }
    
    const id: string = generateId()

    const cypherPassword = await hashManager.hash(password)

    const user = {
        id,
        name,
        email,
        password: cypherPassword
    }

    await userDatabase.insertUser(user);

    const token: string = generateToken({ id })

    return token
}

export const businessLogin = async(
    email: string,
    password: string
) => {

    if (!email || !password) {
        throw new Error("Preencha todos os campos")
    }

    const user: User = await userDatabase.selectUserByEmail(email)
    if (!user) {
       throw new Error("Usuário não encontrado")
    }

    const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

    if (!passwordIsCorrect) {
        throw new Error("Senha incorreta")
    }

    const token: string = generateToken({ id: user.id })

    return token

}