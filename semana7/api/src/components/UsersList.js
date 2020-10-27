import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const UsersTitle = styled.h1 `
`

const UserBlock = styled.div `
display:flex;
flex-direction: column;
`

const UserName = styled.p `

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
border: 1px solid blue;
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

render (){
console.log(this.state.users)
return (
<div>
    <UsersTitle>Usuários Cadastrados</UsersTitle>

        {this.state.users.map(user => {
         return (   
            <UserBlock>
                <UserName>{user.name}</UserName>
                <Remove>X</Remove>
                <Divider/>
            </UserBlock>
         )
        })}
</div>
)
}
}