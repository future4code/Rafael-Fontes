import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useProtectedPage } from '../../hooks/UseProtectedPage'

const PostPage = () => {
    useProtectedPage()
  
    return (
        <div>
            <Header />
            PostPage
        </div>
    )
}

export default PostPage