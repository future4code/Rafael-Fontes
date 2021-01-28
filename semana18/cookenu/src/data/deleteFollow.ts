import { connection } from '../index'

export default async function deleteFollow(
    follower_id: string,
    followed_id: string):Promise<void> {

    await connection.raw(`
        DELETE FROM Cookenu_follow
        WHERE follower_id="${follower_id}"
        AND followed_id="${followed_id}";
    `)
}
