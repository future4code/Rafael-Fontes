import {React, useState, useEffect} from 'react'
import List from './components/List/index'
import Main from './components/Main/index'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("main")
  const [profileName,setProfileName] = useState('')
  const [profileBio,setProfileBio] = useState('')
  const [profileAge,setProfileAge] = useState('')
  const [profilePhoto,setProfilePhoto] = useState('')
  const [profileId,setProfileId] = useState('')
  const [profilesEnd, setProfilesEnd] = useState('')

  const onClickMain = () => {
    setCurrentPage("main")
  }

  const onClickList = () => {
    setCurrentPage("list")
  }

  const onClickClear = () => {
    if (window.confirm("Limpar todos os matches?")) {
      axios
      .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-fontes/clear`)
      .then (res => {
        setProfilesEnd("")
      })
      .catch (err => {
        console.log(err)
      })
    }
  }

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
        setProfilesEnd(err)
    })
  }

  return (
    <div className="App">
      <div className="Box">
        <div className="TitleBar">
          <button onClick={onClickMain}>Home</button>
          Astromatch
          <button onClick={onClickList}>Lista</button>
        </div>
        <div className="Conditional">
          {currentPage === "main" ?
            (<Main
              showNewProfile={showNewProfile}
              profileName={profileName}
              profileBio={profileBio}
              profileAge={profileAge}
              profilePhoto={profilePhoto}
              profileId={profileId}
              profilesEnd={profilesEnd}
            />)
            :
            (<List/>)  
          }
        </div>
        <button className="ClearButton" onClick={onClickClear}>Limpar Matches</button>
      </div>
    </div>
  );
}

export default App;
