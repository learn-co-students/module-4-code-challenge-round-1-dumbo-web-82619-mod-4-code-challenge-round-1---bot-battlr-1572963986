import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }
  

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState(bots={bots}))
  }

  addOrDeleteBot = (bot) => {
    if (this.state.myBots.includes(bot)) {
      this.setState({
        myBots: this.state.myBots.filter(botInArray => botInArray.id !== bot.id)
      })
    } else {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  render() {
    return (
      <div>
        {<YourBotArmy myBots={this.state.myBots} addOrDeleteBot={this.addOrDeleteBot} />}
        {<BotCollection bots={this.state.bots} addOrDeleteBot={this.addOrDeleteBot}/>  }

        
      </div>
    );
  }

}

export default BotsPage;
