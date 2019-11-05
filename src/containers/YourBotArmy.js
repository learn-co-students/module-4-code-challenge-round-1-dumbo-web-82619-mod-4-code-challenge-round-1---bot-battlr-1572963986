import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map((bot, idx) => {
              return <BotCard key={idx} {...bot} botArmy={this.props.botArmy} botData={this.props.botData} modifyArmy={this.props.retireFromArmy}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
