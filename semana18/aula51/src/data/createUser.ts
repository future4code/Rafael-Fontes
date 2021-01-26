  
import { connection } from '../index'

export default async function createUser(
    id: string, 
    email: string, 
    password: string,
    role: ROLES):Promise<void> {
    await connection.raw(`
        INSERT INTO User_aula50
        VALUES ("${id}", "${email}", "${password}", "${role}");
    `)
}

enum ROLES {
    NORMAL="NORMAL",
    ADMIN="ADMIN"
}