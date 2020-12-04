import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostPage } from '../../router/Coordinator'
import { PostContainer, CountContainer, VotesContainer, ClickContainer } from './styles'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { IconButton, Card, Typography } from '@material-ui/core'
import Axios from 'axios'
import { green, red } from '@material-ui/core/colors'

const Post = (props) => {
    const history = useHistory()

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
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`,body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            props.getPosts()
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
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`,body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            props.getPosts()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <PostContainer>
            <Card variant="contained">
                <ClickContainer onClick={()=> goToPostPage(history,props.id)}>
                    <Typography color="textSecondary" gutterBottom>
                        <p>Postado por <b>{props.username}</b></p>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <p><b>{props.title}</b></p>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <p>{props.text}</p>
                    </Typography>
                </ClickContainer>
                <CountContainer>
                    <VotesContainer>
                        <IconButton onClick={VoteUp}>
                            {props.direction===1
                                ?
                                <ArrowUpward fontSize="inherit" style={{ color: green[500] }}/>
                                :
                                <ArrowUpward fontSize="inherit" color="inherit"/>
                            }
                        </IconButton>
                        <p><b>{props.votesCount}</b></p>
                        <IconButton onClick={VoteDown}>
                            {props.direction===-1
                                ?
                                <ArrowDownward fontSize="inherit" style={{ color: red[500] }}/>
                                :
                                <ArrowDownward fontSize="inherit" color="inherit"/>
                            }
                        </IconButton>
                    </VotesContainer>
                    <p>{props.commentsCount} comentários</p>
                </CountContainer>
            </Card>
        </PostContainer>
    )
}

export default Post