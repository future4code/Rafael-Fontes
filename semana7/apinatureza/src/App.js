import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';

const MainDiv = styled.div `
background-color: black;
display:flex;
height: 100vh;
`
const Title = styled.h1 `
color: white;
`

class App extends React.Component {
  render() {

  

  return (

<MainDiv>
 <Title>Teste</Title>
</MainDiv>

  );
}
}

export default App;
