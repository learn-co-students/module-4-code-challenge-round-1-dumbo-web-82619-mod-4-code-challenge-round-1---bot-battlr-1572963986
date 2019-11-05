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

handleClick = (bot) => {
  // console.log("this is target", e.target)
  if (!this.state.botArmy.includes(bot)){
  return this.addBot(bot)
  } else {
  return this.removeBot(bot)
  }
}
  addBot = (bot) => {
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
    let botArmy = this.state.botArmy 
      this.setState({
        botArmy: this.state.botArmy.filter(function(botSelect){
          return bot !== botSelect
        })
      })
      
  }

  render() {
    // console.log("Hi", this)
    // console.log("WHAT IS IN MY ARMY?" , this.state.botArmy)
    console.log("array of army", this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBot={this.removeBot} handleClick={this.handleClick}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot} handleClick={this.handleClick} />
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
