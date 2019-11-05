import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [], 
    bot: []
  }

  fetchingBots =()=>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botObject => {
      // console.log(botObject)
      this.setState({
        bots: botObject
      })
    })
  }

  componentDidMount(){
    this.fetchingBots()
  }

  handleClick = (botItem)=>{
    // console.log('click', bot)
   if(!this.state.bot.includes(botItem)){
    this.setState({
      bot: [botItem, ...this.state.bot]
    })
   }
  }

  render() {
    // console.log(this.state.bot)
    return (
    
      <div>
        {/* put your components here */}
        
        <YourBotArmy bot={this.state.bot}/>
        <BotCollection bots={this.state.bots}
                       handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
