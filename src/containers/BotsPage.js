import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const API =  'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  render() {
    return (
      <div>
        <YourBotArmy/>
        <BotCollection/>
      </div>
    );
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(botsResp =>{
        this.setState({bots: botsResp}})
  }

}

export default BotsPage;
