import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots:[],
    viewBot: {}
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(resObj => this.setState({
        bots: resObj
      })
    )
  }

  handleClick = (bot) => {
    //console.log(bot)
    let chosenBot = this.state.myBots.find(myBot => myBot.id === bot.id)
    //this.state.myBots.filter(bot => bot !== chosenBot)
    console.log(chosenBot);
    this.state.myBots.includes(bot) ? this.setState({
      viewBot: bot,
      myBots: this.state.myBots.filter(bot => bot.id !== chosenBot.id)
    }) :
    this.setState({
      viewBot: bot
    })
  }

  handleEnlistClick = (bot) => {
    console.log(bot)
    this.setState({
      myBots: [...this.state.myBots, bot]
    })

  }

  render() {
    console.log(this.state.bots)
    console.log(this.state.myBots)
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} myBots={this.state.myBots}/>
        <BotSpecs handleEnlistClick={this.handleEnlistClick} bot={this.state.viewBot}/>
        {/* put your components here */<BotCollection handleClick={this.handleClick} bots={this.state.bots}/> }
      </div>
    );
  }

}

export default BotsPage;
