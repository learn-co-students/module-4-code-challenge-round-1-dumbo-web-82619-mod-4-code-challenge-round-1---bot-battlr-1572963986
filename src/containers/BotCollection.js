import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	  console.log(this)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">


    		  {this.props.bots.map(bot =>{
				  return <BotCard className="collection" handleClick={this.props.handleClick} bot={bot} handleClick2={this.props.handleClick2} />
			  })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
