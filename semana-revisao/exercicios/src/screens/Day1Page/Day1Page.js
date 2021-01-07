import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goHome } from '../../router/Coordinator'

const Day1Page = () => {
    const history = useHistory()
    const [answerEx1, setAnswerEx1] = useState('')
    const [answerEx2, setAnswerEx2] = useState('')
    const [answerEx3, setAnswerEx3] = useState([])
    const [answerEx4, setAnswerEx4] = useState('')
    const [answerEx5, setAnswerEx5] = useState([])
    const [answerEx6, setAnswerEx6] = useState([])
    const [answerEx7, setAnswerEx7] = useState('')
    const [answerEx8, setAnswerEx8] = useState('')
    const [answerEx9, setAnswerEx9] = useState('')
    const [answerEx10, setAnswerEx10] = useState('')

    const [answerEx1L, setAnswerEx1L] = useState('')

    const handleInputEx1 = (e) => {
        const reverse = e.target.value.split("").reverse().join("")
        setAnswerEx1(reverse)
    }

    const handleInputEx2 = (e) => {
        const reverse = e.target.value.split("").reverse().join("").replace(/ /g, "")
        if (reverse === e.target.value.replace(/ /g, "")) {
            setAnswerEx2('É um palíndromo')
        } else {
            setAnswerEx2('Não é um palíndromo')
        }
    }

    const handleInputEx3 = (e) => {

    }

    const handleInputEx4 = (e) => {
        const alphabetical = e.target.value.split("").sort().join("").replace(/ /g, "")
        setAnswerEx4(alphabetical)
    }

    const handleInputEx5 = (e) => {
        const array = e.target.value.split(" ")
        let i
        let arrayFinal = []
        for (i=0;i<array.length;i++) {
            arrayFinal = [...arrayFinal, array[i].charAt(0).toUpperCase()+array[i].slice(1), " "]
            setAnswerEx5(arrayFinal)
        }
    }

    const handleInputEx6 = (e) => {
        const array = e.target.value.split(" ")
        let i
        let wordLenght = 0
        for (i=0;i<array.length;i++) {
            if(array[i].length>wordLenght) {
                wordLenght=array[i].length
                setAnswerEx6(array[i])
            }
        }
    }

    const handleInputEx7 = (e) => {
        const letters = [...e.target.value.toLowerCase()]
        let i
        let vogals = 0
        for (i=0;i<letters.length;i++) {
            
            if (letters[i]==='a' || letters[i]==='e' || letters[i]==='i' || letters[i]==='o' || letters[i]==='u'){
                vogals++
                setAnswerEx7(vogals)
            }   
        }
        console.log(answerEx7)
    }

    const handleInputEx8 = (e) => {

    }

    const handleInputEx9 = (e) => {

    }

    const handleInputEx10 = (e) => {

    }

    const handleInputEx1L = (e) => {
        const array = [...e.target.value.split("").sort().join("").replace(/,/g, "")]
        let i
        for (i=0;i<array.length;i++) {
            let maiorNum = array[0]
            if (array[i]>maiorNum) {
                maiorNum = array[i]
            }
            setAnswerEx1L(maiorNum)
        }
        console.log(array)
    }

    return (
        <div>
            <h1>Dia 1</h1>
            <button onClick={()=>goHome(history)}>Início</button>
            <hr/>
            
            <h2>FUNÇÕES</h2>

            <h3>Exercício 1</h3>
            <input onChange={handleInputEx1}/>
            <p>Resposta: {answerEx1}</p>
            <hr/>

            <h3>Exercício 2</h3>
            <input onChange={handleInputEx2}/>
            <p>Reposta: {answerEx2}</p>
            <hr/>

            <h3>Exercício 3</h3>
            <input onChange={handleInputEx3}/>
            <p>Reposta: {answerEx3}</p>
            <hr/>

            <h3>Exercício 4</h3>
            <input onChange={handleInputEx4}/>
            <p>Reposta: {answerEx4}</p>
            <hr/>

            <h3>Exercício 5</h3>
            <input onChange={handleInputEx5}/>
            <p>Reposta: {answerEx5}</p>
            <hr/>

            <h3>Exercício 6</h3>
            <input onChange={handleInputEx6}/>
            <p>Reposta: {answerEx6}</p>
            <hr/>

            <h3>Exercício 7</h3>
            <input onChange={handleInputEx7}/>
            <p>Reposta: {answerEx7}</p>
            <hr/>

            <h3>Exercício 8</h3>
            <input onChange={handleInputEx8}/>
            <p>Reposta: {answerEx8}</p>
            <hr/>

            <h3>Exercício 9</h3>
            <input onChange={handleInputEx9}/>
            <p>Reposta: {answerEx9}</p>
            <hr/>

            <h3>Exercício 10</h3>
            <input onChange={handleInputEx10}/>
            <p>Reposta: {answerEx10}</p>
            <hr/>

            <h2>LAÇOS</h2>

            <h3>Exercício 1</h3>
            <input onChange={handleInputEx1L}/>
            <p>Resposta: {answerEx1L} </p>
            <hr/>

        </div>
    )
}

export default Day1Page