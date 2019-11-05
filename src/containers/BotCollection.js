import React from "react";
import BotCard from "../components/BotCard";
import Search from '../components/Search'
import Sort from '../components/Sort'

class BotCollection extends React.Component {
  //your code here

  render(){

	// console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			<Search handleSearchChange={this.props.handleSearchChange}/>
			<Sort handleSortValue={this.props.handleSortValue}/>
    		  {
				  this.props.bots.map(bot => {
					  return <BotCard bot={bot} key={bot.id}
					                  handleClick={this.props.handleClick} 
									  />
						    		  
				  })
			  }
			  	
    		
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
