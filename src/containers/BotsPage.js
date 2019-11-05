import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state = {
    bots: [],
    myArmy: [],
    currentBot: {}
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

  seeCurrentBot = (bot) => {
    this.setState({
      currentBot: bot
    })
  } 

  getRidBot = () => 
  this.setState({
    currentBot: {}
  })

  addToArmy = (bot) =>
  this.setState({
    myArmy: [...this.state.myArmy, bot]
  })

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
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} seeBot={this.seeCurrentBot} />
        {/* <BotSpecs goBack={this.getRidBot} enlist={this.addToArmy} currentBot={this.state.currentBot}/> */}

      </div>
    )
  }

}
export default BotsPage;

