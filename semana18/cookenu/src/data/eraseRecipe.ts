import { connection } from '../index'

export default async function eraseRecipe(
    id: string):Promise<void> {

    await connection.raw(`
        DELETE FROM Cookenu_recipe
        WHERE id = "${id}";
    `)
}
