import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const Block = styled.div `
display:flex;
flex-direction: column;
border: 2px solid blueviolet;
padding: 20px;
`
const Title = styled.p `
font-weight: bold;
margin-right: 10px;
`

const InputBlock = styled.div `
display:flex;
flex-direction: row;
align-items: center;
`

const Input = styled.input `
height: 30px;
`

const SaveButton = styled.button `
background-color: blueviolet;
color:white;
width: 80px;
height: 30px;
font-size: 16px;
`

export default class Form extends React.Component {

state = {
    InputName: "",
    InputEmail: ""
}

onChangeInputEmail = (event) => {
    this.setState({InputEmail: event.target.value})
}

onChangeInputName = (event) => {
    this.setState({InputName: event.target.value})
}

addUser = () => {
    const body = {
      name: this.state.InputName,
      email: this.state.InputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {headers: {Authorization:"rafael-fontes-dumont"}}
    )
    .then ((res) => {
        console.log(res)
        alert("Usuário cadastrado com sucesso")
    })
    .catch ((err) => {
        console.log(err)
        alert(err)
    })

    this.setState({InputName:""})
    this.setState({InputEmail:""})
}

render (){
    
return (
<div>
    <Block>
        <InputBlock>
            <Title>Nome:</Title>
            <Input
                placeholder="Nome"
                value={this.state.InputName}
                onChange={this.onChangeInputName}
            ></Input>
        </InputBlock>
        <InputBlock>
            <Title>E-mail:</Title>
            <Input
                placeholder="E-mail"
                value={this.state.InputEmail}
                onChange={this.onChangeInputEmail}
            ></Input>
        </InputBlock>
        <SaveButton onClick={this.addUser}>Salvar</SaveButton>
    </Block>
</div>

)

}

}