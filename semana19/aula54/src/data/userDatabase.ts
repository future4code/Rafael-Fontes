import { connection } from './connection'
import { ROLES } from '../business/entities/user'

export async function createUser(
    id: string,
    name: string,
    email: string, 
    password: string,
    role: ROLES):Promise<void> {

    await connection.raw(`
        INSERT INTO User_aula54
        VALUES ("${id}", "${name}", "${email}", "${password}", "${role}");
    `)
}

export async function deleteUser(id: string):Promise<void> {
    await connection.raw(`
        DELETE FROM User_aula54
        WHERE id = "${id}";
    `)
}

export async function getUserByEmail(email: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula54
        WHERE email = "${email}";
    `)
    return result[0]
}

export async function getUserById(id: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM User_aula54
        WHERE id = "${id}";
    `)
    return result[0][0]
}