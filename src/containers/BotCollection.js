import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botData.map((bot, idx) => {
				  return <BotCard key={idx} {...bot} modifyArmy={this.props.addToArmy} botArmy={this.props.botArmy} botData={this.props.botData} />
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
