import Axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostPage } from '../../router/Coordinator'
import { PostContainer, CountContainer } from './styles'

const Post = (props) => {
    const history = useHistory()

    return (
        <PostContainer onClick={()=> goToPostPage(history,props.id)}>
            <p><b>{props.username}</b></p>
            <p>{props.text}</p>
            <CountContainer>
                <p>{props.votesCount}</p>
                <p>{props.commentsCount} comentários</p>
            </CountContainer>
        </PostContainer>
    )
}

export default Post