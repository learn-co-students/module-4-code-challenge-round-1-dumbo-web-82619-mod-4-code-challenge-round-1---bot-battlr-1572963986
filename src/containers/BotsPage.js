import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botsArray: [],
    bot: {},
    botArmyArray: []
  }

  componentDidMount() {

    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(botsData => {
      this.setState({
        botsArray: botsData
      })
    })
  }

  handleOnClick = (bot) => {
    console.log(bot,"hiiii from BotsPage handleOnClick")
    this.setState({
      bot: bot,
      botArmyArray: [bot,...this.state.botArmyArray]
    })
  }

  handleDelete = (bot) => {
    console.log(bot, "hii from handleDelete in BotsPage!!")
    this.setState({
      // botsArray: [...this.state.botsArray].filter(bot => bot.id !== this.state.botsArray.id), bot]
    })
  }

  render() {
    // console.log("hi from render", this.state.botsArray)
    // console.log("hi from rerender setState handleOnClick" ,this.state.bot)
    return (
      <div>
        {/* put your components here */}
        {<YourBotArmy
          bot={this.state.bot}
          botArmyArray={this.state.botArmyArray}
          handleDelete={this.handleOnClick}
          />}
        {
          <BotCollection
          bots={this.state.botsArray}
          bot={this.state.bot}
          handleOnClick={this.handleOnClick}
          />
        }
      </div>
    );
  }

}

export default BotsPage;
