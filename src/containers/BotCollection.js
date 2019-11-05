import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  // mapBots = () => {
  // // console.log("hi from mapBots")
  // this.props.bots.map(bot => {
  //   // return console.log(bot)
  //   return <BotCard bot={bot} />
  // })
  // }

  // console.log(this.props.handleOnClick)

  render(){

    // console.log("hi from BotCollection!!", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
          {
            this.props.bots.map(bot => {
              // return console.log(bot)
              return <BotCard
                bot={bot}
                handleOnClick={this.props.handleOnClick}
                key={bot.id}
                />
            })
          }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
