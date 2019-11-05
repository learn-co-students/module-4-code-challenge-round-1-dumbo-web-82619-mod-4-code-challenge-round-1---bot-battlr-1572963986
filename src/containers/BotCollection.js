import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from './BotsPage'

class BotCollection extends React.Component {

  filteredBots = () => {
    return this.props.bots.filter(bot =>
      !this.props.enlisted.includes(bot)
    )
  }

  render(){
    this.filteredBots()
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.filteredBots().map(bot => {
            return <BotCard bot={ bot } enlistMethod={ this.props.enlistMethod }/>
          }) }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
