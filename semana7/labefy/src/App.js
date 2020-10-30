import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div `
background-color: #282c34;
color: white;
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
`
const MainTitle = styled.h1 `
margin: 0;
padding: 30px;
`
const PlaylistInput = styled.input `
`
const CreatePlaylist = styled.button `
`

const axiosConfig = {
  headers: {
    Authorization: "rafael-fontes-dumont"
  }
}

class App extends React.Component {
  state = {
    PlaylistInputValue: "",
    currentPage: "create"
  }

  onChangePlaylistInput = (event) => {
    this.setState({PlaylistInputValue: event.target.value})
  }
  
  onClickCreatePlaylist = () => {
    // axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
    // .then(response => {
    //   console.log(response.data.result.list)
    // })

    if (this.state.PlaylistInputValue="") {
      alert("Digite um nome válido")
    } else {
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
      {name: this.state.PlaylistInputValue}, axiosConfig)
      .then(response => {
        alert("Lista criada com sucesso!")
        console.log("lista criada")
      })
      .catch(error => {
        alert("Lista já existente")
        console.log(error)
      })
    }
    this.setState({PlaylistInputValue:""})
  }

  render () {
  console.log(this.state.PlaylistInputValue)
  return (

    <MainDiv>
      <MainTitle>LABEFY</MainTitle>
      <PlaylistInput 
        onChange={this.onChangePlaylistInput}
        placeholder="Digite um novo nome"
        value={this.state.PlaylistInputValue}
      />
      <CreatePlaylist onClick={this.onClickCreatePlaylist}>Criar Playlist</CreatePlaylist>
    </MainDiv>

  )
  }
}

export default App;
