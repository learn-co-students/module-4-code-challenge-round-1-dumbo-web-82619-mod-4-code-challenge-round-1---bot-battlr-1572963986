import React from "react";
import BotCard from "../components/BotCard";

let allBots

class BotCollection extends React.Component {
  //your code here

  allBots = this.props.bots.map((bot) => <BotCard bot={bot}/>)

  render(){
	console.log(this.props)
  	return (
  	  <div key={this.props.bots.slice(2)} className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map((bot) => <BotCard addBot={this.props.addBot} bot={bot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
