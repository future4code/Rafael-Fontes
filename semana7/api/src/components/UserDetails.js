import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const Block = styled.div `
`
const Title = styled.p `
`

const UserBlock = styled.div `
`
const UserLine = styled.div `
display: flex;
flex-direction: row;
align-items: center;
 `


const NameTitle = styled.p `
font-weight: bold;
margin-right: 10px;
`

const Name = styled.p `
`

const EmailTitle = styled.p `
font-weight: bold;
margin-right: 10px;
`

const Email = styled.p `
`

const Back =styled.button `
`

export default class UserDetails extends React.Component {

    state = {
        user: {

        }
    }

    componentDidMount = () => {
        this.getUserDetails()
    }

    getUserDetails = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
        {headers: {Authorization:"rafael-fontes-dumont"}}
        )
        .then ((res) => {
            this.setState({user:res.data})
            console.log(res)
        })
        .catch ((err) => {
            console.log(err)
        })
    }

    render () {
  

        return (

            <div>
                <Block>
                    <Title></Title>
                    <UserBlock>
                        <UserLine>
                            <NameTitle>Nome:</NameTitle>
                            <Name>{this.state.user.name}</Name>
                        </UserLine>
                        <UserLine>
                            <EmailTitle>E-mail:</EmailTitle>
                            <Email>{this.state.user.email}</Email>
                        </UserLine>
                        <Back>Voltar</Back>
                    </UserBlock>
                </Block>
            </div>   

        )
    }
}