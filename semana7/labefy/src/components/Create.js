import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div `
    background-color: #282c34;
    color: white;
    margin: 0;
    padding: 0;
`

const PlaylistInput = styled.input `
    margin: 30px;
`
const CreatePlaylist = styled.button `
`
const axiosConfig = {
    headers: {
      Authorization: "rafael-fontes-dumont"
    }
}

class Create extends React.Component {
    state = {
        PlaylistInputValue: "",
        
      }

      onChangePlaylistInput = (event) => {
        this.setState({PlaylistInputValue: event.target.value})
    }
      
    onClickCreatePlaylist = () => {
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
        this.setState({PlaylistInputValue:""})
    }

    render() {

        return(

            <MainDiv>

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

export default Create