import React from 'react';
import styled from "styled-components";
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import UsersList from './components/UsersList';

const ChangeButton = styled.button `
margin: 20px;
`

const MainDiv = styled.div `
display: flex;
flex-direction: column;
align-items:center;
`

export default class App extends React.Component {
  state = {
    page: true,
    users: [],
    buttonText:"Ir para página de lista"
  }

  pageRender = () => {
    if (this.state.page) {
      return <Form/>
    } else {
      return <UsersList/>
    }
  }

  switchPage = () => {
    this.setState ({page: !this.state.page})
    if (this.state.page) {
      this.setState ({buttonText: "Ir para página de registro"})
    } else {
      this.setState ({buttonText: "Ir para página de lista"})
    }
  }

  render () {

  return (
    
    <div>
      <ChangeButton onClick={this.switchPage}>{this.state.buttonText}</ChangeButton>
      <MainDiv>
        {this.pageRender()}
      </MainDiv>
      
    </div>

  );
}
}
