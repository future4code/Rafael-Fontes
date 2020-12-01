import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostPage } from '../../router/Coordinator'
import { PostContainer, CountContainer, TitleContainer, VotesContainer } from './styles'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'

const Post = (props) => {
    const history = useHistory()

    const VoteUp = () => {
        alert("VoteUp")
    }

    const VoteDown = () => {
        alert("VoteDown")
    }

    return (
        <PostContainer onClick={()=> goToPostPage(history,props.id)}>
            <TitleContainer>
                <p><b>{props.title}</b></p>
                <p>Postado por {props.username}</p>
            </TitleContainer>
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
                <p>{props.commentsCount} comentários</p>
            </CountContainer>
        </PostContainer>
    )
}

export default Post