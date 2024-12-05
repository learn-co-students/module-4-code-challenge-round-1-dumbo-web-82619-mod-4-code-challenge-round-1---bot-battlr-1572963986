import React from "react"
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    botArmy: [],
    view: 'index',
    selectedBot: null
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
      this.switchView(bot)
    } 
  }
  // if bot which is in army has it's index card clicked it will first
  // remove bot from army, then resume functionality to present specs card
  // little glitch I didn't have time to fix.
  // P.S. where is Bender from Futurama?

  switchView = (bot) => {
    this.setState({
      view: 'specs',
      selectedBot: bot
    })
  }

  enlistBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    }) 
  }

  returnToIndex = () => {
    this.setState({
      view: 'index'
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          botArmy={this.state.botArmy} 
          manageBot={this.manageBot}
        />
        {this.state.view === 'index' ?
          <BotCollection 
            bots={this.state.bots} 
            manageBot={this.manageBot}
          /> :
            <BotSpecs 
              bot={this.state.selectedBot} 
              returnToIndex={this.returnToIndex}
              enlistBot={this.enlistBot}
            />
        }
      </div>
    );
  }

}

export default BotsPage;
