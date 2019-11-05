import React from "react"
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(botsArr => {
      this.setState({
        bots: botsArr
      })
    })
  }
  
  manageBot = (bot) => {
    if (this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy.filter(botEl => botEl !== bot)]
      })
    } else {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    } 
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          botArmy={this.state.botArmy} 
          manageBot={this.manageBot}
        />
        <BotCollection 
          bots={this.state.bots} 
          manageBot={this.manageBot}
        />
      </div>
    );
  }

}

export default BotsPage;
