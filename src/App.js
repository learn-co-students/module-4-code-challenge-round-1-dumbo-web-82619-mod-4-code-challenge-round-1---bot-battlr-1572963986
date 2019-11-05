import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  // state = {
  //   allBots: []
  // }

  // componentDidMount(){
  //   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       this.setState({
  //         allBots: data
  //       })
  //     })
  // }

  render() {
    
    return (
      <div className="App">
        <BotsPage 
          />
      </div>
    );
  }
}

export default App;
