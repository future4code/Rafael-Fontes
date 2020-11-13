import {React, useState, useEffect} from 'react'
import axios from 'axios'
import {ImgProfile, ListDiv, ProfileLine} from './styles'

export default function List () {
    
    const [matchList,setMatchList] = useState([])

    useEffect (() => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/matches`)
        .then (res => { 
            setMatchList(res.data.matches)
        })
        .catch (err => {
            console.log(err)
        })
    }, [matchList])

    return (
        <ListDiv>
        {matchList.length===0 ? 
            (<p>Você não possui nenhum match</p>)
            :
            (matchList.map(profile => {
                return(
                    <ProfileLine>
                        <ImgProfile src={profile.photo}></ImgProfile>
                        <p>{profile.name}</p>
                    </ProfileLine>
                )
            }))
        }
        </ListDiv>
    )
}