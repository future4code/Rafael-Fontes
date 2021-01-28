import { connection } from '../index'

export default async function createRecipe(
    id: string,
    title: string, 
    description: string, 
    createDate: string,
    user_id: string):Promise<void> {

    await connection.raw(`
        INSERT INTO Cookenu_recipe
        VALUES ("${id}", "${title}", "${description}", "${createDate}", "${user_id}");
    `)
}
