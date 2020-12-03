import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import { useForm } from '../../hooks/UseForm'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { BackToTop, FeedContainer, FeedPageContainer, Loading, NewPostContainer } from './styles'
import { Button, TextField, CircularProgress, Typography } from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors'
import { KeyboardArrowUp } from '@material-ui/icons'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [posts,setPosts] = useState([])
    const {form, onChange, resetState} = useForm({ text: "", title: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    useEffect(()=>{
        topFunction()
    },[])

    useEffect(()=>{
        GetPosts()
    },[])

    const GetPosts = () => {
        Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const CreatePost = (event) => {
        event.preventDefault()
        const body = {
            "text": form.text,
            "title": form.title
        }

        Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Post criado com sucesso")
            GetPosts()
            resetState()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    var mybutton = document.getElementById("back-to-top");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <Header />
            <FeedPageContainer>
                <NewPostContainer onSubmit={CreatePost}>
                    <TextField
                        name='title'
                        value={form.title}
                        label="Título"
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: grey[50] }}
                        required
                        onChange={handleInputChange}
                        placeholder="Escreva um título aqui"
                    />
                    <TextField
                        name='text'
                        value={form.text}
                        label="Texto"
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: grey[50] }}
                        multiline
                        required
                        onChange={handleInputChange}
                        placeholder="Escreva um texto aqui"
                    />
                    <Button type="submit" variant="contained" color="primary">Postar</Button>
                </NewPostContainer>
                <FeedContainer>
                    {posts.length===0
                        ? 
                        <Loading>
                            <Typography variant="h5" color="primary">Carregando...</Typography>
                            <CircularProgress />
                        </Loading>
                        :
                        posts.map(post=> {
                            return(
                                <Post
                                    username={post.username}
                                    text={post.text}
                                    votesCount={post.votesCount}
                                    commentsCount={post.commentsCount}
                                    id={post.id}
                                    title={post.title}
                                    direction={post.userVoteDirection}
                                    getPosts={GetPosts}
                                />
                            )
                        })
                    }
                </FeedContainer>
                <BackToTop onClick={topFunction} id="back-to-top" style={{ backgroundColor: red[500] }}>
                    <KeyboardArrowUp style={{ color: grey[50] }}/>
                </BackToTop>
            </FeedPageContainer>
        </div>
    )
}

export default FeedPage