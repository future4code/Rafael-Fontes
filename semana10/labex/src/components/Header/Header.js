import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainDiv, RightDiv, Link, LinkAdm, Title } from './styles'

const Header = () => {

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
            <div>
                <Title onClick={onClickHome}>LabeX</Title>
            </div>
            
            {history.location.pathname === "/" ?
                (<RightDiv>
                    <LinkAdm onClick={onClickAdm}>Administrador</LinkAdm>   
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
            
            {history.location.pathname === "/login"
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