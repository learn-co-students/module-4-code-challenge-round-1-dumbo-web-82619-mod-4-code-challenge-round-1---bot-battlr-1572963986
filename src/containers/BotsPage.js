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

  render() {
    return (
      <div>
        {<YourBotArmy myBots= {this.state.myBots}/>}
        {<BotCollection bots={this.state.bots}/> }

        
      </div>
    );
  }

}

export default BotsPage;
