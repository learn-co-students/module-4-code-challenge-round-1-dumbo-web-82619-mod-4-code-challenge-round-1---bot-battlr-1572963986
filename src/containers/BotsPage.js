import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  }
  

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }
  
  
  loadBots = this.state.bots.map((bot) => {
    return bot
  })
  
  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots}/>}
          <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
