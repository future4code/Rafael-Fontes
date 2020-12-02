import styled from 'styled-components'
import { Button, Toolbar, Typography } from '@material-ui/core'

export const NavBar = styled(Toolbar) `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    height: 8vh;
    flex-wrap: wrap;
`
export const Options = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    width: 11vw;
`
export const Hello = styled(Typography) `
    margin-right: 15px;
    font-weight: bold;
`
export const Title = styled(Typography) `
    cursor: pointer;
    font-weight: bold;
`
export const ButtonStyled = styled(Button) `
    height: 4vh;
`