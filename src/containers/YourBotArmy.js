import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  //BOT ARMY IS SAVING, BUT IT IS NOT SHOWING UP ON DOM
  render(){
    console.log("YOUR BOT ARMY", this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map((bot) => {
              console.log("BOT CARD IN BOT ARMY" , bot)
              return <BotCard bot={bot}
                              
              />
            }
            )}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
