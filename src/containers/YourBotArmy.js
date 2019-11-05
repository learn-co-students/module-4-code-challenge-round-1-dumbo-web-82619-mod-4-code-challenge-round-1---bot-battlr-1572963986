import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // mapbotArmyArray = () => {
  //   return this.props.botArmyArray.map(bot =>
  //     return {<BotCard bot={bot} />}
  //   )}
  // }

  render(){
      // console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmyArray.map(bot => {
              return <BotCard
                bot={bot}
                handleDelete={()=> this.props.handleDelete(bot)}
                key={bot.id} />
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
