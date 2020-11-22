import styled from 'styled-components'

export const ListDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const TripLine = styled.div `
    display: flex;
    
`

export const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid black;
    /* table-layout: auto; */
    width: 60%;
    
`

export const Td = styled.td `
    border: 1px solid black;
`
export const Th = styled.th `
    border: 1px solid black;
    background-color: blue;
    color: white;
`

export const Tr = styled.tr `
    width: 60%;
    background-color: gray;
`