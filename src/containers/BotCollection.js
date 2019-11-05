import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  
  render(){
	// console.log(this.props.bots)
	const bot = this.props.bots.map(bot => <BotCard bot={bot} handleChange={this.props.handleChange}/>)


  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {bot}
			  {/* <BotCard bot={bot}/> */}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
