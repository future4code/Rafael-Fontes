import React from 'react'
import { CommentContainer, CountContainer, VotesContainer } from './styles'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import Axios from 'axios'

const Comment = (props) => {

    const VoteUp = () => {
        let body = {}
        if(props.direction===1) {
            body = {
                "direction": 0
            }
        } else {
            body = {
                "direction": 1
            }
        }
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.postId}/comment/${props.id}/vote`,body,
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
        let body = {}
        if(props.direction===-1) {
            body = {
                "direction": 0
            }
        } else {
            body = {
                "direction": -1
            }
        }
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.postId}/comment/${props.id}/vote`,body,
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
        <CommentContainer>
            <p><b>{props.username}</b></p>
            <p>{props.text}</p>
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
            </CountContainer>
        </CommentContainer>
    )
}

export default Comment