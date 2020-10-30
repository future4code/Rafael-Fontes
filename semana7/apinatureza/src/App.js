import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

const MainDiv = styled.div `
background-color: darkslategray;
display:flex;
flex-direction: column;
height: 100vh;
padding-left: 20px;
`
const Title = styled.h3 `
color: white;
`
const RocketSelect = styled.select `
width: 10vw;
`
const RocketImg = styled.img `
width: 50vw;
margin-top: 30px;
border-radius: 5px;
`
const RocketDescr = styled.p `
color: white;
width: 50vw;
text-align: justify;
`


class App extends React.Component {
  state = {
    rocketList: [],
    selectedRocketImg: "",
    selectedRocketDesc: "",
    selectedRocketName: ""
  };

  componentDidMount() {
    this.getRocketList();
  }

  getRocketList = () => {
    const apiUrl = "https://api.spacexdata.com/v3/rockets?limit=100"
    axios.get(apiUrl).then((response) => {
      this.setState({rocketList: response.data})
    })
  }
  
  onChangeSelect = (e) => {
    console.log("Selecionou",e.target.value)
    const apiUrl2 = `https://api.spacexdata.com/v3/rockets/${e.target.value}`;
    axios.get(apiUrl2).then((response) => {
      this.setState(
        {selectedRocketImg: response.data.flickr_images[0]}
      )
      this.setState(
        {selectedRocketDesc: response.data.description}
      )
    })
  }
  

  render() {
  const optionList = this.state.rocketList.map((rocket) => {
    return <option value={rocket.rocket_id}>{rocket.rocket_name}</option>;
  })

  return (

  <MainDiv>
    <Title>Selecione um foguete</Title>
    <RocketSelect onChange={this.onChangeSelect}>
      {optionList}
    </RocketSelect>
    <RocketImg src={this.state.selectedRocketImg} alt={this.state.selectedRocketName}/>
    <RocketDescr>
      {this.state.selectedRocketDesc}
    </RocketDescr>
  </MainDiv>

  );
}
}

export default App;
