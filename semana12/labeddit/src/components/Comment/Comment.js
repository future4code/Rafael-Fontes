import React from 'react'
import { CommentContainer, CountContainer } from './styles'

const Comment = (props) => {
    return (
        <CommentContainer>
            <p><b>{props.username}</b></p>
            <p>{props.text}</p>
            <CountContainer>
                <p>{props.votesCount}</p>
            </CountContainer>
        </CommentContainer>
    )
}

export default Comment