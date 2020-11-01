import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div `
    background-color: #282c34;
    color: white;
    margin: 0;
    padding: 0;
`
const PlaylistLine = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 20vw;
`
const PlaylistName = styled.p `
margin-left: 30px;
padding-top: 8px;
padding-bottom: 8px;
padding-left: 8px;
&:hover{
background-color: gray;
};
width: 15vw;
`
const Line = styled.div `
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 20vw;
`
const Block = styled.div `
margin-left: 30px;
width: 20vw;
`
const Remove = styled.a `
font-weight: bolder;
cursor:pointer;
border: none;
&:hover{
color: red;
};
margin-right: 30px;
`
const ColoredButton = styled.button `
background-color: green;
color: white;
margin-left: 30px;
`
const ColoredDivider = styled.hr `
border: 2px solid green;
`
const WhiteDivider = styled.hr `
`
const axiosConfig = {
    headers: {
      Authorization: "rafael-fontes-dumont"
    }
}

class Manage extends React.Component {
    state = {
        playlists: [],
        changePage: "list",
        selTracks: [],
        selPlaylist: "",
        selPlaylistId: "",
        inputNameValue: "",
        inputArtistValue: "",
        inputLinkValue: ""
    }

    componentDidMount() {
        this.fetchPlaylists();
      }

    fetchPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
        .then(response => {
        this.setState({playlists:response.data.result.list})
        })
    }

    onClickX = (id) => {
        const confirmRemove = window.confirm("Deseja apagar esta lista?")

        if (confirmRemove) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
            .then(() => {
                alert("Lista apagada com sucesso!");
                this.fetchPlaylists()
            })
        }
    }

    onClickSongX = (id) => {
        const confirmRemove = window.confirm("Deseja apagar esta música?")

        if (confirmRemove) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.selPlaylistId}/tracks/${id}`, axiosConfig)
            .then(() => {
                alert("Música apagada com sucesso!");
                this.onClickLine(this.state.selPlaylistId)
            })
        }
    }


    onClickLine = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({selTracks: response.data.result.tracks})
        })
        
        {this.state.playlists.map (playlist => {
            if(id === playlist.id) {
                this.setState({selPlaylist: playlist.name})
                this.setState({selPlaylistId: playlist.id})
            }
        })}

        this.setState({changePage:"details"})
    }

    onClickListPage = () => {
        this.setState({changePage:"list"})
        this.setState({inputNameValue: ""})
        this.setState({inputArtistValue: ""})
        this.setState({inputLinkValue: ""})
    }

    onChangeNameValue = (event) => {
        this.setState({inputNameValue: event.target.value})
    }

    onChangeArtistValue = (event) => {
        this.setState({inputArtistValue: event.target.value})
    }
    
    onChangeLinkValue = (event) => {
        this.setState({inputLinkValue: event.target.value})
    }

    onClickAddSong = () => {
        const newSong = {
            "name": this.state.inputNameValue,
            "artist": this.state.inputArtistValue,
            "url": this.state.inputLinkValue
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.selPlaylistId}/tracks`,
        newSong,axiosConfig)
        .then(response => {
            this.onClickLine(this.state.selPlaylistId)
            })
        
        this.setState({inputNameValue: ""})
        this.setState({inputArtistValue: ""})
        this.setState({inputLinkValue: ""})
    }

    render() {

        return(

            <MainDiv>
                {this.state.changePage === "list" ?
                    (<div>
                        {this.state.playlists.map (playlist => {
                        return(
                            <div>
                                <PlaylistLine >
                                    <PlaylistName onClick={()=>this.onClickLine(playlist.id)}>{playlist.name}</PlaylistName>
                                    <Remove onClick={()=>this.onClickX(playlist.id)}>X</Remove>
                                </PlaylistLine>
                            </div>

                        )
                        }
                        )}
                    </div>)
                    :
                    (<div>
                        <Block>
                            <Line>
                                <h2>{this.state.selPlaylist}</h2>
                                <ColoredButton onClick={this.onClickListPage}>Voltar</ColoredButton>
                            </Line>
                            <ColoredDivider></ColoredDivider>
                        </Block>
                        {this.state.selTracks.map (track => {
                            return(
                            <Block>
                                <Line>
                                    <p>{track.name} ({track.artist})</p>
                                    <Remove onClick={()=>this.onClickSongX(track.id)}>X</Remove>    
                                </Line>
                                <audio src={track.url} controls></audio>
                                <WhiteDivider></WhiteDivider>
                            </Block>
                            )})}
                        <Block>
                            <p>Nome:</p>
                            <input onChange={this.onChangeNameValue} placeholder="Nome da música"/>
                            <p>Artista:</p>
                            <input onChange={this.onChangeArtistValue} placeholder="Artista"/>
                            <p>Link:</p>
                            <input onChange={this.onChangeLinkValue} placeholder="Link da música"/>
                            <ColoredButton onClick={this.onClickAddSong}>Adicionar música</ColoredButton>
                        </Block>
                        
                       
                    </div>)
                }
            </MainDiv>
        )
    }
}

export default Manage