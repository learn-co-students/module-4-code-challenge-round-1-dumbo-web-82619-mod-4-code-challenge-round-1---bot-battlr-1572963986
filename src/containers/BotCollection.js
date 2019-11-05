import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

	const botItems = this.props.allBotsArr.map(bot => {
		return <BotCard 
		id={bot.id}
		bot={bot}
		handleAddClick={this.props.handleAddClick}
		/>
	})
	
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { botItems }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
