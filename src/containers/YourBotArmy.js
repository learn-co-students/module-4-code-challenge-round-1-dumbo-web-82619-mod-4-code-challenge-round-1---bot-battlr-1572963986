import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const botCards = this.props.armyBots.map((bot) => 
		{
			return <BotCard bot={ bot } />
		})
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            { botCards }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
