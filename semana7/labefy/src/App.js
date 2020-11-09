import React from 'react'
import styled from 'styled-components'
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
const ColoredButton = styled.button `
background-color: green;
color: white;
margin-left: 30px;
`
class App extends React.Component {
  state = {
    currentPage: "create"
  }

  onClickManagePage = () => {
    this.setState({currentPage:"manage"})
  }

  onClickCreatePage = () => {
    this.setState({currentPage:"create"})
  }

  render () {

    return (

      <MainDiv>
        <MainTitle>LABEFY</MainTitle>
        {this.state.currentPage === "create" ? 
          (
          <div>
            <Create />
            <ColoredButton onClick={this.onClickManagePage}>Gerenciar Playlists
            </ColoredButton>
          </div>
          )
          : 
          (
            <div>
              <ColoredButton onClick={this.onClickCreatePage}>Criar nova Playlist</ColoredButton>
              <Manage />
            </div>
          )
        }
      </MainDiv>
    )
  }
}

export default App;
