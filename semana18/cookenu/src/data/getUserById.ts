import { connection } from '../index'

export default async function getUserById(id: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM Cookenu_user
        WHERE id = "${id}";
    `)

    return result[0][0]
}