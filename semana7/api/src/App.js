import React from 'react';
import styled from "styled-components";
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import UsersList from './components/UsersList';

const ChangeButton = styled.button `

`
const MainDiv = styled.div `
display: flex;
flex-direction: column;
align-items:center;
`

export default class App extends React.Component {
  state = {
    page: true,
    users: []
  }

  pageRender = () => {
    if (this.state.page === true) {
      return <Form/>
    } else {
      return <UsersList/>
    }
  }

  switchPage = () => {
    this.setState ({page: !this.state.page})
  }

  render () {
    
  return (
    
    <div>
      <ChangeButton onClick={this.switchPage}>Ir para página de lista</ChangeButton>
      <MainDiv>
        {this.pageRender()}
      </MainDiv>
      
    </div>

  );
}
}
