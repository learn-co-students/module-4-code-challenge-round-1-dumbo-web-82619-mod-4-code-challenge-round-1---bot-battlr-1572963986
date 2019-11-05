import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const myBot = this.props.myBots.map(bot => <BotCard bot={bot} 
                                                handleChange={this.props.handleChange}
                                                goBack={this.props.goBack}
                                                enroll={this.props.enroll}
                                                
                                                />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myBot}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
