import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = { 
    bots: [],
    botArmy: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then( data => {
      this.setState({
        bots: data
      })
    })
  }

  addBot = (bot) => {
    // console.log("adding to bot army" , bot) 
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

 
  

  render() {
    // console.log("Hi", this)
    // console.log("WHAT IS IN MY ARMY?" , this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
