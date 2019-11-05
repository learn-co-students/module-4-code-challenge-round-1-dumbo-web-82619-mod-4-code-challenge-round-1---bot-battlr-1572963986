import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots:[],
    botSpec: []
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(r => {
      this.setState({
        bots: r
      })
    })
  }

  // changeStateOfMyBots =() => {
  //   this.setState({
  //     myBots: newBots
  //   })
  // }
  
  handleChange = (bot) => {
    console.log("d")
    // console.log(newBots)
    if(this.state.myBots.includes(bot)){
      const copiedBots = [...this.state.myBots]
      const newBots = copiedBots.filter(mbot => mbot !== bot)
      this.setState({
        myBots: newBots
      })
    
    }
    else{
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }
  }

  handleChange= (bot) => {
    this.setState({
      botSpec: bot
    })
  }

  goBack =() => {
    this.setState({
      botSpec: []
    })

  }

  enroll =(bot) => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }
  
  render(){

    return(
        <div>
          <BotSpecs bot={this.state.botSpec} handleChange={this.handleChange}
                                                goBack={this.goBack}
                                                enroll={this.enroll}/>
          <YourBotArmy bot={this.state.botSpec} myBots={this.state.myBots} handleChange={this.handleChange}/>
          <BotCollection bots={this.state.bots} handleChange={this.handleChange}/>
        </div>
    )
      ;
    }
  }




export default BotsPage;
