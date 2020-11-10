import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import UserDetails from './UserDetails';
import UsersList from './UsersList';

const AllUsers = styled.div `
`


export default class Users extends React.Component {

state = {
list: true
}



showListOrDetails = () => {
return (
<div>
<UsersList />
<UserDetails/>
</div>
)
}

render (){

return (
<AllUsers>
{this.showListOrDetails()}
</AllUsers>
)
}
}