import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            BOT ARMY
            {this.props.botArmy.map(bot => {
              return <BotCard 
                key={bot.id}
                bot={bot} 
                manageBot={this.props.manageBot}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
