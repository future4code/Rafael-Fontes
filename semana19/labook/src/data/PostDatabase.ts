import { BaseDatabase } from "./BaseDatabase";
import { Post } from "../business/entities/post"

export class PostDatabase extends BaseDatabase {

    createPost = async (post: Post) => {
        await BaseDatabase.connection("labook_posts")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            })
    }

    getPostbyId = async (id: string): Promise<any> => {
        const queryResult = await BaseDatabase.connection("labook_posts")
            .select("*")
            .where({ id })
        
        return queryResult[0]
    }
}