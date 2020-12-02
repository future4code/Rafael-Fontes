import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import { useForm } from '../../hooks/UseForm'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { FeedContainer, NewPostContainer } from './styles'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [posts,setPosts] = useState([])
    const {form, onChange, resetState} = useForm({ text: "", title: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    useEffect(()=>{
        GetPosts()
    },[posts])

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

    const CreatePost = (event) => {
        event.preventDefault()
        const body = {
            "text": form.text,
            "title": form.title
        }

        Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Post criado com sucesso")
            GetPosts()
            resetState()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Header />

            <NewPostContainer onSubmit={CreatePost}>
                <input
                    name='title'
                    value={form.title}
                    required
                    onChange={handleInputChange}
                    placeholder="Escreva um Título"
                />
                <textarea
                    name='text'
                    value={form.text}
                    required
                    onChange={handleInputChange}
                    placeholder="Escreva um novo post aqui"
                />
                <button type="submit">Postar</button>
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
                                title={post.title}
                                direction={post.userVoteDirection}
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