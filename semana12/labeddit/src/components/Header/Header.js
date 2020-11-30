import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPage, goToPostPage } from '../../router/Coordinator'

const Header = () => {
    const history = useHistory()
    return (
        <div>
            <h1>LabEddit</h1>
            <button onClick={()=> goToLoginPage(history)}>Login</button>
            <button>Logout</button>
            <button onClick={()=> goToFeedPage(history)}>Feed</button>
            <button onClick={()=> goToPostPage(history)}>Meus Posts</button>
        </div>
    )
}

export default Header