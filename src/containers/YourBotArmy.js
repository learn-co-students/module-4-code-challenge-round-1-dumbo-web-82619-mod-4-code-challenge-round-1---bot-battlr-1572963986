import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  handleClick = () => {
    console.log("boom")
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.bots.map(bots =>{
              return <BotCard className="Army" handleClick2={this.props.handleClick2} bot={bots} />
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
