import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import { useForm } from '../../hooks/UseForm'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { CommentsContainer, NewCommentContainer, PostPageContainer } from './styles'
import { Button, TextField } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { grey } from '@material-ui/core/colors'
import Axios from 'axios'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const [postDetails,setPostDetails] = useState([])
    const {form, onChange, resetState} = useForm({ text: "", title: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    useEffect(()=>{
        GetPostDetails()
    },[postDetails])

    const GetPostDetails = () => {
        Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setPostDetails(res.data.post)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    const SendComment = (event) => {
        event.preventDefault()
        const body = {
                "text": form.text
        }
        Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postDetails.id}/comment`, body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Comentário enviado com sucesso")
            GetPostDetails()
            resetState()
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    return (
        <div>
            <Header />
                <PostPageContainer>
                <Post
                    username={postDetails.username}
                    text={postDetails.text}
                    votesCount={postDetails.votesCount}
                    commentsCount={postDetails.commentsCount}
                    id={postDetails.id}
                    title={postDetails.title}
                    direction={postDetails.userVoteDirection}
                />
                <NewCommentContainer onSubmit={SendComment}>
                    <TextField
                        name='text'
                        value={form.text}
                        label="Novo Comentário"
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: grey[50] }}
                        multiline
                        required
                        onChange={handleInputChange}
                        placeholder="Escreva um comentário aqui"
                    />
                    <Button type="submit" type="submit" variant="contained" color="primary">Enviar comentário</Button>
                </NewCommentContainer>
                <CommentsContainer>
                    {postDetails.comments && 
                        postDetails.comments.map(post=> {
                            return(
                                <Comment
                                    username={post.username}
                                    text={post.text}
                                    votesCount={post.votesCount}
                                    id={post.id}
                                    postId={params.id}
                                    direction={post.userVoteDirection}
                                />
                            )
                            })
                    }
                </CommentsContainer>
            </PostPageContainer>
        </div>
    )
}

export default PostPage