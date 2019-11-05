import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here
  state = {
	  currentBot: {}
  }

  seeCurrentBot = (bot) => {
    this.setState({
      currentBot: bot
    })
  } 

  getRidBot = () => 
  this.setState({
    currentBot: {}
  })

  addToArmy = (bot) =>
  this.setState({
    myArmy: [...this.state.myArmy, bot]
  })


  render(){
	  const botts = this.props.bots.map(bot => <BotCard bot={bot} seeBot={this.props.seeBot}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botts}
    		  Collection of all bots
    		</div>
  	  </div>
	  );
	  <BotSpecs goBack={this.getRidBot} enlist={this.addToArmy} currentBot={this.state.currentBot}/>
  }

};

export default BotCollection;
