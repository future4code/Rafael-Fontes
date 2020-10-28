import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import UserDetails from './UserDetails';

const AllUsers = styled.div `
`


export default class UsersList extends React.Component {

detailsUser = () => {
    return <UserDetails/>
}

render (){

return (
<AllUsers>
        <UsersList />
        {this.detailsUser()}
</AllUsers>
)
}
}