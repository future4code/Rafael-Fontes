import {React, useState, useEffect} from 'react'
import List from './components/List/index'
import Main from './components/Main/index'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("main")

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
        console.log("OK")
      })
      .catch (err => {
        console.log(err)
      })
    }
  }

  return (
    <div className="App">
      <div className="Box">
        <div className="TitleBar">
          <button onClick={onClickMain}>Home</button>
          Astromatch
          <button onClick={onClickList}>Lista</button>
        </div>
        {currentPage === "main" ?
        (<Main/>):(<List/>)  
        }
        <button className="ClearButton" onClick={onClickClear}>Limpar Matches</button>
      </div>
    </div>
  );
}

export default App;
