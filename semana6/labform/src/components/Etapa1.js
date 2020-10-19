import React, { Component } from 'react'


export class Etapa1 extends Component {
	state = {
    
    }

    render () {

        return(
            <div>  
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <h3>1. Qual o seu nome?</h3>
                <input/>
                <h3>2. Qual a sua idade?</h3>
                <input/>
                <h3>3. Qual o seu e-mail?</h3>
                <input/>
                <h3>4. Qual a sua escolaridade?</h3>
                <select name="escolaridade" id="escolaridade">
                    <option value="medioinc">Ensino Médio Incompleto</option>
                    <option value="mediocom">Ensino Médio Completo</option>
                    <option value="supinc">Ensino Superior Incompleto</option>
                    <option value="supcom">Ensino Superior Completo</option>
                </select>
            </div>

        )
    }
}