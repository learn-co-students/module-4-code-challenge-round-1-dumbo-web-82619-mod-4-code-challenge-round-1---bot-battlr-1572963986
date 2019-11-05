import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    // enlistedBots: []
  }

  handleAddClick = (botObj) => {
    // console.log(botObj);
    const newBot = this.state.allBots.map(bot => {
      if (bot.id === botObj.id){
        const newbot = {
          ...bot,
          enlisted: true
        }
        return newbot
        this.setState({
          allBots: [newbot]
        })
      }
      return bot
    })
    console.log(newBot);
    
  }
  

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => {
        // console.log(data);
        bots.forEach(bot => {
          bot.enlisted = false,
          bot.removed = false
        })
        this.setState({
          allBots: bots
        })
      })
  }

  handleFilter = () => {
    return this.state.allBots.filter((bot)=> {return bot.enlisted})
  }

  render() {
    console.log(this.enlistedBots);

    return (
      <div>
        <YourBotArmy 
        enlistedBots={this.handleFilter()}/>
        <BotCollection 
          allBotsArr={this.state.allBots}
          handleAddClick={this.handleAddClick}
        />
      </div>
    );
  }

}

export default BotsPage;
