import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  constructor(){
    super()
    this.state={
      botData: [],
      botArmy: [],
      viewBot: []
    }
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        botData: data 
      })
    })
  }

  addToArmy = (botID) => {
    let selectBot = this.state.botData.find(bot => bot.id === botID)
    if (!this.state.botArmy.includes(selectBot)){
      this.setState({
        botArmy: [...this.state.botArmy, selectBot]
      },
      console.log(this.state.botArmy))
    }
  }

  retireFromArmy = (botID) => {
    let selectBot = this.state.botData.find(bot => bot.id === botID)
    if (this.state.botArmy.includes(selectBot)) {
      let newArmy = this.state.botArmy.filter(bot => bot !== selectBot)
      this.setState({
        botArmy: newArmy
      })
    }
  }

  viewBot = (botID) => {
    // console.log(botID)
    let selectBot = this.state.botData.find(bot => bot.id === botID)
    this.setState({
      viewBot: [selectBot]
    })
  }

  //Started working on BotSpecs event Listeners...
  removeFromView = (botID) => {
    console.log(botID)
  }

  render() {
    // console.log(this.state.botArmy)
    return (
      <div>
        {<YourBotArmy botData={this.state.botData} botArmy={this.state.botArmy} retireFromArmy={this.retireFromArmy} />}
        {this.state.viewBot.length > 0 ? <BotSpecs {...this.state.viewBot} /> :
        <BotCollection botArmy={this.state.botArmy} botData={this.state.botData} viewBot={this.viewBot} />
        }
      </div>
    );
  }

}

export default BotsPage;
