import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import Comment from '../../components/Comment/Comment'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { CommentsContainer, NewCommentContainer } from './styles'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const [postDetails,setPostDetails] = useState([])

    useEffect(()=>{
        GetPostDetails()
    },[])

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
    
    return (
        <div>
            <Header />
            <Post
                username={postDetails.username}
                text={postDetails.text}
                votesCount={postDetails.votesCount}
                commentsCount={postDetails.commentsCount}
                id={postDetails.id}
            />
            <NewCommentContainer>
                <textarea>Escreva um comentário aqui</textarea>
                <button>Enviar comentário</button>
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
                            />
                        )
                        })
                }
            </CommentsContainer>
        </div>
    )
}

export default PostPage