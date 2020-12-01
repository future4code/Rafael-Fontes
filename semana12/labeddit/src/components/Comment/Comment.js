import React from 'react'
import { CommentContainer, CountContainer, VotesContainer } from './styles'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'

const Comment = (props) => {

    const VoteUp = () => {
        alert("VoteUp")
    }

    const VoteDown = () => {
        alert("VoteDown")
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