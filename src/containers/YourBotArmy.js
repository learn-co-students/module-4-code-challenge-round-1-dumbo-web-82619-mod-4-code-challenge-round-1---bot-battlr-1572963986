import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from './BotsPage'

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.props.enlisted.map(bot => {
              return <BotCard bot={ bot } dischargeMethod={this.props.dischargeMethod} />
            }) }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
