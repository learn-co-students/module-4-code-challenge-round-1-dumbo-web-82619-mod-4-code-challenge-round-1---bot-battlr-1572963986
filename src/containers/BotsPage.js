import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    myArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsData => {
      this.setState({
        bots: botsData
      })
    })
  }

  handleBotClick = (bot) => {
  this.setState({
    myArmy: [...this.state.myArmy, bot]
  })
  }

  handleRemoveClick = (bot) => {
    const copyArmy = [...this.state.myArmy]
    const newState = copyArmy.filter(bot => bot.id !== bot.id)
    this.setState({
      myArmy: newState
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myArmy={this.state.myArmy} handleRemoveClick={this.handleRemoveClick}/>
        <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick}/>

      </div>
    )
  }

}
export default BotsPage;

