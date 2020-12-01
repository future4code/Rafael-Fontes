import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPage, goToPostPage } from '../../router/Coordinator'
import { PostContainer, CountContainer, TitleContainer, VotesContainer } from './styles'
import { ArrowDownward, ArrowUpward, TextRotateUpSharp } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import { Title, TextPost } from './styles'
import Axios from 'axios'

const Post = (props) => {
    const history = useHistory()

    const VoteUp = () => {
        const body = {
            "direction": 1
        }
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`,body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res)
            alert("VoteUp")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const VoteDown = () => {
        const body = {
            "direction": -1
        }
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`,body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res)
            alert("VoteDown")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <PostContainer>
            <TitleContainer>
                <Title onClick={()=> goToPostPage(history,props.id)}><b>{props.title}</b></Title>
                <p>Postado por {props.username}</p>
            </TitleContainer>
            <TextPost onClick={()=> goToPostPage(history,props.id)}>{props.text}</TextPost>
            <CountContainer>
                <VotesContainer>
                    <IconButton onClick={VoteUp}>
                        <ArrowUpward fontSize="inherit" />
                    </IconButton>
                    <p>{props.votesCount}</p>
                    <IconButton onClick={VoteDown}>
                        <ArrowDownward fontSize="inherit" />
                    </IconButton>
                </VotesContainer>
                <p>{props.commentsCount} comentários</p>
            </CountContainer>
        </PostContainer>
    )
}

export default Post