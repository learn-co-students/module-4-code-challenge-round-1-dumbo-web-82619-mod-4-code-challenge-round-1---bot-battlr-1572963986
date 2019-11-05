import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		// console.log("bot container", this.props.bots)
		// console.log("botCaint" ,this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map( (bot) => {
						// console.log(bot)
						return <BotCard bot={bot}
														key={bot.id}
														addBot={this.props.addBot}
														handleClick={this.props.handleClick}
						/>
					}
					)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
