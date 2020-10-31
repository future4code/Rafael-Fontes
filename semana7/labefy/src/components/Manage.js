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
width: 15vw;
&:hover{
background-color: gray;
};
`
const PlaylistName = styled.p `
margin-left: 30px;

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
        changePage: "list"
    }

    componentDidMount() {
        this.fetchPlaylists();
      }

    fetchPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
        .then(response => {
        console.log(response.data.result.list)
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
            console.log(response.data)
        })
        
        {this.state.playlists.map (playlist => {
            if(id == playlist.id) {
                console.log(playlist.name)
            }
        })}

        this.setState({changePage:"details"})

    }

    render() {

        return(

            <MainDiv>
                {this.state.changePage === "list" ?
                    (<div>
                        {this.state.playlists.map (playlist => {
                        return(
                            <div>
                                <PlaylistLine onClick={()=>this.onClickLine(playlist.id)}>
                                    <PlaylistName>{playlist.name}</PlaylistName>
                                    <Remove onClick={()=>this.onClickX(playlist.id)}>X</Remove>
                                </PlaylistLine>
                            </div>

                        )
                        }
                        )}
                    </div>)
                :
                    (<div>Detalhes</div>)
                }
            </MainDiv>
        )
    }
}

export default Manage