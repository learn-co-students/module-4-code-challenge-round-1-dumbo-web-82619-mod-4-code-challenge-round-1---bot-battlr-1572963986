import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
    state = {
      bots: [],
      myBots: []
    }

    addBot = (bot) => {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => {
      
      this.setState({ bots: data });
    });
  }

  render = () => {
    console.log("this.state")
    return (
      <div>
        <YourBotArmy bots={this.state.myBots}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot}/>
        
      </div>
    );
  }

}

export default BotsPage;
