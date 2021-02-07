import { PostDatabase  } from "../data/PostDatabase";
import { Post, POST_TYPES } from "./entities/post";
import { generateId } from "./services/idGenerator";

const postDatabase = new PostDatabase()

export const businessCreatePost = async (
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
) => {

    if (
        !photo ||
        !description ||
        !type ||
        !authorId
        ) {
        throw new Error("Preencha todos os campos")
    }

    const id: string = generateId()

    var dayjs = require('dayjs')
    const createdAt: Date = dayjs(Date.now()).format('YYYY/MM/DD')

    await postDatabase.createPost(
        {
            id,
            photo,
            description,
            type,
            createdAt,
            authorId
        }
    )
}

export const businessGetPostById = async (
    id: string
) => {

    const result = await postDatabase.getPostbyId(id)

    if (!result) {
        throw new Error("Post não encontrado")
     }

    const postInfo = {
        id: result.id,
        photo: result.photo,
        description: result.description,
        type: result.type,
        createdAt: result.created_at,
        authorId: result.author_id
    }

    return postInfo
}
