import { connection } from '../index'

export default async function selectRecipes(
    id: string):Promise<any> {

    const result = await connection.raw(`
        SELECT  cr.id as id,
                cr.title as title,
                cr.description as description,
                cr.createDate as createdAt,
                cf.followed_id as userId,
                Cookenu_user.name as userName
        FROM Cookenu_user cu
            INNER JOIN Cookenu_follow cf ON cf.follower_id = cu.id
            LEFT JOIN Cookenu_recipe cr ON cr.user_id = cf.followed_id
            LEFT JOIN Cookenu_user ON Cookenu_user.id = cr.user_id
        WHERE cu.id = "${id}";
    `)

    return result[0]
}
