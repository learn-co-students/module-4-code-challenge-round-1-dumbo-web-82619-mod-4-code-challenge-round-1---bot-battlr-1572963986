import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const botEnlistedItems = this.props.enlistedBots.map(bot => {
      return <BotCard 
      bot={bot}
      />
    })

    
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {botEnlistedItems}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
