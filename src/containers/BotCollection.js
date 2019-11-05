import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	render(){
		let bots = this.props.loadBots
		return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {<BotCard bots={bots}/>}
    		  Collection of all bots
    		</div>
  	  </div>
	  )
	
  }

}

export default BotCollection;
