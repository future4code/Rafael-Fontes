import {React, useState, useEffect} from 'react'
import axios from 'axios'
import {ImgProfile, ProfileLine} from './styles'

export default function List () {
    
    const [matchList,setMatchList] = useState([])

    useEffect (() => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/matches`)
        .then (res => { 
            console.log(res.data.matches)
            setMatchList(res.data.matches)
        })
        .catch (err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
        {matchList.map(profile => {
            return(
                <ProfileLine>
                    <ImgProfile src={profile.photo}></ImgProfile>
                    <p>{profile.name}</p>
                </ProfileLine>

            )
        }

        )}
        </div>
    )
}