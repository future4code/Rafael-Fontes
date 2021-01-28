import { connection } from '../index'

export default async function createUser(
    id: string,
    name: string, 
    email: string, 
    password: string):Promise<void> {

    await connection.raw(`
        INSERT INTO Cookenu_user
        VALUES ("${id}", "${name}", "${email}", "${password}");
    `)
}
