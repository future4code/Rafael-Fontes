import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export const TripsDiv = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: left;
`

export const Loading = styled.div `
    display:flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
    height: 70vh;
`