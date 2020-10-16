import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <p className="titulo">{ props.titulo }</p>
            <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;