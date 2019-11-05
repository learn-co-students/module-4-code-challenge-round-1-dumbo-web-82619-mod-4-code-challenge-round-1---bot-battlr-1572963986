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
    //if array in bot army includes bot, return null, else add it to the array
 
    let botArmyArray = this.state.botArmy 
  
    if (botArmyArray.includes(bot)){ 
      null
    } else {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })}
  }

  //CLICKING ON THE BOT in Army Removes the Bot, INSTEAD it loops and try to add it again
  removeBot = (bot) => {
    // this.setState({
    //   botArmy: [...this.state.BotArmy]
    // })
  }

  render() {
    // console.log("Hi", this)
    // console.log("WHAT IS IN MY ARMY?" , this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot} removeBot={this.removeBot}/>
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
