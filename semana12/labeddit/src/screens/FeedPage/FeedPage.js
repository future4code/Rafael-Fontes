    import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { goToPostPage } from '../../router/Coordinator'
import { FeedContainer, NewPostContainer } from './styles'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        GetPosts()
    },[])

    const GetPosts = () => {
        Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Header />

            <NewPostContainer>
                <textarea>Escreva um novo post aqui</textarea>
                <button>Postar</button>
            </NewPostContainer>

            <FeedContainer>
                {posts!==[]
                    ? 
                    posts.map(post=> {
                        return(
                            <Post
                                username={post.username}
                                text={post.text}
                                votesCount={post.votesCount}
                                commentsCount={post.commentsCount}
                                id={post.id}
                            />
                        )
                    })
                    :
                    "Carregando..."
                }
            </FeedContainer>
        </div>
    )
}

export default FeedPage