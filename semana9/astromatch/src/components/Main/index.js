import {React, useState, useEffect} from 'react'
import {DivButtons, ImgProfile} from './styles'
import axios from 'axios'

export default function Main () {
 
    const [profileName,setProfileName] = useState('')
    const [profileBio,setProfileBio] = useState('')
    const [profileAge,setProfileAge] = useState('')
    const [profilePhoto,setProfilePhoto] = useState('')
    const [profileId,setProfileId] = useState('')
    

    useEffect (() => {
        showNewProfile()
    }, [])

    const showNewProfile = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/person`)
        .then (res => { 
            setProfileName(res.data.profile.name)
            setProfileBio(res.data.profile.bio)
            setProfileAge(res.data.profile.age)
            setProfilePhoto(res.data.profile.photo)
            setProfileId(res.data.profile.id)
        })
        .catch (err => {
            console.log(err)
        })
    }

    const addToMatchList = () => {
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/choose-person`,
        {
            "id": profileId,
            "choice": true
        })
        .then (res => {
            console.log(profileId)
            console.log(res)
            console.log("Match")
        })
        .catch (err => {
            console.log(err)
        })
    }

    const addToRejectList = () => {
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/choose-person`,
        {
            "id": profileId,
            "choice": false
        })
        .then (res => {
            console.log("Reject")
            console.log(res)
        })
        .catch (err => {
            console.log(err)
        })
    }

    const onClickX = () => {
        addToRejectList()
        showNewProfile()
    }

    
    const onClickHeart = () => {
        addToMatchList()
        showNewProfile()
    }

    return (
        <div>
            <ImgProfile src={profilePhoto}></ImgProfile>
            <p>{profileName}, {profileAge}</p>
            <p>{profileBio}</p>
            <DivButtons>
                <button onClick={onClickX}>X</button>
                <button onClick={onClickHeart}>OK</button>
            </DivButtons>

        </div>
    )
}
