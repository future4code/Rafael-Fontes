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
const Remove = styled.a `
font-weight: bolder;
cursor:pointer;
border: none;
&:hover{
color: red;
};
margin-right: 30px;
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
        selPlaylist: ""
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
        let confirmRemove = window.confirm("Deseja apagar esta lista?")

        if (confirmRemove) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
            .then(() => {
                alert("Lista apagada com sucesso!");
                this.fetchPlaylists()
            })
        }
    }

    onClickLine = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({selTracks: response.data.result.tracks})
        })
        
        {this.state.playlists.map (playlist => {
            if(id == playlist.id) {
                this.setState({selPlaylist: playlist.name})
            }
        })}

        this.setState({changePage:"details"})
    }

    onClickListPage = () => {
        this.setState({changePage:"list"})
    }

    render() {
        console.log(this.state.selTracks)
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
                        <p>{this.state.selPlaylist}</p>
                        <hr></hr>
                        {this.state.selTracks.map (track => {
                            return(
                            <div> 
                            <p>{track.name}</p>
                            <p>{track.artist}</p>
                            <a href={track.url}>{track.url}</a>
                            <hr></hr>
                            </div>
                            )})}
                        <button onClick={this.onClickListPage}>Voltar</button>
                    </div>)
                }
            </MainDiv>
        )
    }
}

export default Manage