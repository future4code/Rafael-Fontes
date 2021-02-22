import { connection } from '../index'
import { ROLES } from '../types/authentication'

export default async function createUser(
    id: string,
    name: string, 
    email: string, 
    password: string,
    role: ROLES):Promise<void> {

    await connection.raw(`
        INSERT INTO Cookenu_user
        VALUES ("${id}", "${name}", "${email}", "${password}", "${role}");
    `)
}
