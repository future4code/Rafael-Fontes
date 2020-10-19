import React, { Component } from 'react'


export class Etapa3 extends Component {
	state = {
    
    }

    render () {

        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h3>1. Por que você não terminou um curso de graduação?</h3>
                <input/>
                <h3>2. Você fez algum curso complementar?</h3>
                <select name="curso" id="curso">
                    <option value="tecnico">Curso técnico</option>
                    <option value="ingles">Cursos de inglês</option>
                    <option value="nenhum">Não fiz curso complementar</option>
                </select>                
                
            </div>
            
        )
    }
}