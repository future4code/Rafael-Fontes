import { connection } from '../index'

export default async function deleteUser(id: string):Promise<void> {
    const result = await connection.raw(`
        DELETE FROM User_aula50
        WHERE id = "${id}";
    `)

}