import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import Users from './Users';

const UsersTitle = styled.h1 `
color: blueviolet;
`

const UserLine = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const UserBlock = styled.div `
display:flex;
flex-direction: column;
`

const UserName = styled.p `
margin-right: 15px;
`

const Remove = styled.a `
font-weight: bolder;
cursor:pointer;
border: none;
&:hover{
   color: red;
};
`
const Divider = styled.hr `
border: 1px solid blueviolet;
margin: 0;
`

export default class UsersList extends React.Component {
state = {
    users: []
}

getList = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    {headers: {Authorization:"rafael-fontes-dumont"}}
    )
    .then ((res) => {
        this.setState({users:res.data})
        console.log(res)
    })
    .catch ((err) => {
        console.log(err)
    })
}

componentDidMount = () => {
    this.getList()
}

removeUser = (id) => {
    
    let confirmRemove = window.confirm("Deseja apagar este usuário?")

    if (confirmRemove) {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {headers: {Authorization:"rafael-fontes-dumont"}}
        )
        .then ((res) => {
            id=res.data.id
        })
        .catch ((err) => {
            console.log(err)
        })
    
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {headers: {Authorization:"rafael-fontes-dumont"}}
        )
        .then ((res) => {
            console.log(res.data.id)
            this.getList()
            alert("Usuário apagado com sucesso!")
        })
        .catch ((err) => {
            console.log(err)
            alert(err)
        })
    }
}


detailsUser = (id) => {
    console.log(id)
}

render (){

return (

    <div>
        <UsersTitle>Usuários Cadastrados</UsersTitle>
        {this.state.users.map(user => {
         return (
            <UserBlock>
            <UserLine>
                <UserName onClick={() => this.detailsUser(user.id)}>{user.name}</UserName>
                <Remove onClick={() => this.removeUser(user.id)}>X</Remove>
            </UserLine>
            <Divider/>
            </UserBlock>
         )
        })}
    </div>

)
}
}