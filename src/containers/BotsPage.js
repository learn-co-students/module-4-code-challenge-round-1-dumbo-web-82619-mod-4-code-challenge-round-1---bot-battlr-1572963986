import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = 
  {
    bots: [],
    armyBots: [],
    uniqueArmyBots: []
  }

  componentDidMount()
  {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then((bots) => 
    {

      this.setState(
      {
        bots: bots
      })

    })

    const uniqueBots = []
    this.state.armyBots.map((bot) => 
    {
      
      if(uniqueBots.indexOf(bot) === -1)
      {
        uniqueBots.push(bot)
      }

    })
    this.setState(
    {
      uniqueArmyBots: uniqueBots
    })
  }

  addToArmy = (bot) => 
  {
    this.setState(
    {
      armyBots: [...this.state.armyBots, bot]
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy armyBots={ this.state.uniqueArmyBots } />
        <BotCollection bots={ this.state.bots } enlist={ this.addToArmy } />
      </div>
    );
  }

}

export default BotsPage;
