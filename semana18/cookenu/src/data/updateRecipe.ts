import { connection } from '../index'

export default async function updateRecipe(
    id: string,
    title: string, 
    description: string):Promise<void> {

    await connection.raw(`
        UPDATE Cookenu_recipe
        SET title = "${title}",
            description = "${description}"
        WHERE id = "${id}";
    `)
}
