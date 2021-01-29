import { connection } from '../index'

export default async function deleteUser(id: string):Promise<void> {
    await connection.raw(`
        DELETE FROM Cookenu_recipe
        WHERE user_id = "${id}";
    `)
    await connection.raw(`
        DELETE FROM Cookenu_follow
        WHERE follower_id = "${id}"
        OR followed_id = "${id}";
    `)
    await connection.raw(`
        DELETE FROM Cookenu_user
        WHERE id = "${id}";
    `)
}