import styled from 'styled-components'
import { Button, Toolbar } from '@material-ui/core'

export const NavBar = styled(Toolbar) `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    height: 8vh;
`
// export const NavBar = styled.div `
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-left: 20px;
//     margin-right: 20px;
//     height: 8vh;
// `
export const Options = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    width: 11vw;
`
export const Hello = styled.p `
    margin-right: 15px;
    font-weight: bold;
`
export const Title = styled.h1 `
    cursor: pointer;
`
export const ButtonStyled = styled(Button) `
    height: 4vh;
`