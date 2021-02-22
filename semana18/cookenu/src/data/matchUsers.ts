import { connection } from '../index'

export default async function matchUsers(
    follower_id: string,
    followed_id: string):Promise<void> {

    await connection.raw(`
        INSERT INTO Cookenu_follow
        VALUES ("${follower_id}", "${followed_id}");
    `)
}
