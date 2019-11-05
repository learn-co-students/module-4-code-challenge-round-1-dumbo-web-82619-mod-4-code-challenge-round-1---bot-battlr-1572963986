import React from "react";
import BotSpecs from "../components/BotSpecs";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.bot)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            
            {
              this.props.bot.map(bot => {
                return <BotSpecs bot={bot} key={bot.id}/>
              })
            }
            
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
