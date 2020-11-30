import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainDiv, RightDiv, Link, LinkAdm, Title, useStyles } from './styles'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    const classes = useStyles();
    const history = useHistory()

    const onClickHome = () => {
        history.push("/")
    }

    const onClickAdm = () => {
        history.push("/login")
    }

    const onClickForm = () => {
        history.push("/form")
    }

    const onClickMyTrips = () => {
        history.push("/mytrips")
    }

    const onClickList = () => {
        history.push("/list")
    }

    const onClickCreate = () => {
        history.push("/create")
    }

    const onClickTrip = () => {
        history.push("/trip")
    }
    
    return (
        <MainDiv>
            <div className={classes.root}>
                <Title onClick={onClickHome}><Typography variant="h2" component="h2" gutterBottom>LabeX
                </Typography></Title>
            </div>
            
            {history.location.pathname === "/" ?
                (<RightDiv className={classes.root}>
                    <LinkAdm onClick={onClickAdm}><Typography variant="button" display="block" gutterBottom>Administrador
                    </Typography></LinkAdm>   
                    <Link onClick={onClickForm}>Inscrever-se</Link>
                    <Link onClick={onClickMyTrips}>Minhas Viagens</Link>
                </RightDiv>
                ) : ""
            }
            {history.location.pathname === "/mytrips" ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>
                    <Link onClick={onClickForm}>Inscrever-se</Link>
                </RightDiv>
                ) : ""
            }
            {history.location.pathname.includes("/form")
            ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>
                    <Link onClick={onClickMyTrips}>Minhas Viagens</Link>
                </RightDiv>
                ) : ""
            }
            
            {history.location.pathname === "/login" ||
            history.location.pathname === "/signup"
            ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>   
                    <Link onClick={onClickList}>Listar</Link>
                    <Link onClick={onClickCreate}>Criar</Link>
                    <Link onClick={onClickTrip}>Gerenciar</Link>
                </RightDiv>
                ) : ""
            }

            {history.location.pathname === "/list"
            ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>   
                    <Link onClick={onClickCreate}>Criar</Link>
                    <Link onClick={onClickTrip}>Gerenciar</Link>
                </RightDiv>
                ) : ""
            }

            {history.location.pathname === "/create"
            ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>   
                    <Link onClick={onClickList}>Listar</Link>
                    <Link onClick={onClickTrip}>Gerenciar</Link>
                </RightDiv>
                ) : ""
            }

            {history.location.pathname === "/trip"
            ?
                (<RightDiv>
                    <Link onClick={onClickHome}>Início</Link>   
                    <Link onClick={onClickList}>Listar</Link>
                    <Link onClick={onClickCreate}>Criar</Link>
                </RightDiv>
                ) : ""
            }
        </MainDiv>
    )
}

export default Header