import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlisted: [],
    toggle: false
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  enlist = (bot) => {
    this.setState({
      enlisted: [...this.state.enlisted, bot]
    })
  }

  discharge = (bot) => {
    let newEnlisted = this.state.enlisted.filter(b =>
      b !== bot
    )
    this.setState({
      enlisted: newEnlisted
    })
  }

  // I tried adding an if/else condition in render to check if toggle was true or false to render the BotCollection or BotSpecs but if/else condition would not compile when typed in render even when i added if/else inside {...} ...not sure why yet.
  enlistPage = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy enlisted={ this.state.enlisted } dischargeMethod={ this.discharge }/>
        <BotCollection bots={ this.state.bots } enlistMethod={ this.enlist } enlisted={ this.state.enlisted } />
      </div>
    );
  }

}

export default BotsPage;
