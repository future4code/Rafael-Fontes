import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Create from './components/Create'
import Manage from './components/Manage'

const MainDiv = styled.div `
  background-color: #282c34;
  color: white;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`
const MainTitle = styled.h1 `
  margin: 0;
  padding: 30px;
`
const ManagePlaylistButton = styled.button `
  margin: 30px;
`

class App extends React.Component {
  state = {
    currentPage: "create"
  }

  onClickChangePage = () => {
    this.setState({currentPage:"manage"})
  }

  render () {

    return (

      <MainDiv>
        <MainTitle>LABEFY</MainTitle>
        {this.state.currentPage === "create" ? 
          (
          <div>
            <Create />
            <ManagePlaylistButton onClick={this.onClickChangePage}>Gerenciar Playlists
            </ManagePlaylistButton>
          </div>
          )
          : 
          (
            <div>
              <Manage />
              <button>Criar nova Playlist</button>
            </div>
          )
        }
        
      </MainDiv>
    )
  }
}

export default App;
