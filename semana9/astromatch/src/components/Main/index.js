import {React, useState, useEffect} from 'react'
import {DivButtons, ImgProfile, ProfileBox} from './styles'
import axios from 'axios'

export default function Main (props) {
 
    useEffect (() => {
        props.showNewProfile()
    }, [])

    const addToMatchList = () => {
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/choose-person`,
        {
            "id": props.profileId,
            "choice": true
        })
        .then (res => {
            console.log("Match")
            console.log(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }

    const addToRejectList = () => {
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/choose-person`,
        {
            "id": props.profileId,
            "choice": false
        })
        .then (res => {
            console.log("Reject")
            console.log(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }

    const onClickX = () => {
        addToRejectList()
        props.showNewProfile()
    }
    
    const onClickHeart = () => {
        addToMatchList()
        props.showNewProfile()
    }
    
    return (
        <div>
            {props.profilesEnd !=="" ?
                (<p>Fim dos perfis</p>)
                :
                (<div>
                    <ProfileBox>
                        <ImgProfile src={props.profilePhoto}></ImgProfile>
                        <p>{props.profileName}, {props.profileAge}</p>
                        <p>{props.profileBio}</p>
                    </ProfileBox>
                    <DivButtons>
                        <button onClick={onClickX}>X</button>
                        <button onClick={onClickHeart}>OK</button>
                    </DivButtons>
                </div>)
            }
        </div>
    )
}
