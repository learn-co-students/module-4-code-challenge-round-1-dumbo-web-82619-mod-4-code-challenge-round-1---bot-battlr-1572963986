import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	  const botts = this.props.bots.map(bot => <BotCard bot={bot} handleBotClick={this.props.handleBotClick}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botts}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
