import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myArmy:[]
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(rjson =>{
     this.setState({
       bots: rjson
     })
    })
  }

  handleClick = (obj) => {
    this.state.myArmy.includes(obj) ? null :
    this.setState({
      myArmy: [...this.state.myArmy, obj]
    })
  }

  handleClick2 = (obj) => {
    this.state.myArmy.includes(obj) ? this.setState({myArmy: this.state.myArmy.filter(bot => { return bot !== obj})}) : null
    
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myArmy} handleClick2={this.handleClick2} />
        <BotCollection handleClick={this.handleClick} bots={this.state.bots} />

        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
