import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainDiv, RightDiv } from './styles'

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

    const onClickContact = () => {
        history.push("/contact")
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
            <h1>LabeX</h1>
            {history.location.pathname !== "/" ?
                (<div>   
                    <a onClick={onClickHome}>Home</a>
                </div>
                ) : ""
            }
            {history.location.pathname === "/" ?
                (<RightDiv>
                    <a onClick={onClickAdm}>Administrador</a>   
                    <a onClick={onClickForm}>Inscrever-se</a>
                    <a onClick={onClickContact}>Contato</a>
                </RightDiv>
                ) : ""
            }
            {history.location.pathname === "/contact" ?
                (<div>
                    <a onClick={onClickForm}>Inscrever-se</a>
                </div>
                ) : ""
            }
            {history.location.pathname === "/form" ?
                (<div>
                    <a onClick={onClickContact}>Contato</a>
                </div>
                ) : ""
            }
            
            {history.location.pathname === "/login" ||
            history.location.pathname === "/list" ||
            history.location.pathname === "/create" ||
            history.location.pathname === "/trip"
            ?
                (<RightDiv>   
                    <a onClick={onClickList}>Listar</a>
                    <a onClick={onClickCreate}>Criar</a>
                    <a onClick={onClickTrip}>Gerenciar</a>
                </RightDiv>
                ) : ""
            }
        </MainDiv>
    )
}

export default Header