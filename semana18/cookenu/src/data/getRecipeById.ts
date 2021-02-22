import { connection } from '../index'

export default async function getRecipeById(id: string):Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM Cookenu_recipe
        WHERE id = "${id}";
    `)

    return result[0][0]
}