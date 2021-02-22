import { connection } from '../index'

export default async function checkFollow(
    follower_id: string,
    followed_id: string):Promise<any> {

    const result = await connection.raw(`
        SELECT * FROM Cookenu_follow
        WHERE follower_id="${follower_id}"
        AND followed_id="${followed_id}";
    `)

    return result[0][0]
}
