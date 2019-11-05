import React from "react";

import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    robots: []
  }
  



  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(res => {
      // console.log(res)
      this.setState({
        robots: res
      })
    })
  }



  handleClick = (evt) => {
    console.log("clicked from BotsPage")
  
  }





  render() {
    return (
      <div>
        <YourBotArmy  />
        <BotCollection allRobots={ this.state.robots } handleClick={ this.handleClick }/>
      </div>
    );
  }

}

export default BotsPage;
