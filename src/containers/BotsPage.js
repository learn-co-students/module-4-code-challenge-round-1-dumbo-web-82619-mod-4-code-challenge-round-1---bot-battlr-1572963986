import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [], 
    bot: [], 
    searchValue: '',
    sortValue:'',
    switch: false
  }

  fetchingBots =()=>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botObject => {
      // console.log(botObject)
      this.setState({
        bots: botObject
      })
    })
  }

 

  componentDidMount(){
    this.fetchingBots()
  }

  handleClick = (botItem)=>{
    // console.log('click', bot)

   if(!this.state.bot.includes(botItem)){
    this.setState({
      bot: [botItem, ...this.state.bot],
      switch: !this.state.switch
    })
   }
  }

  handleSearchChange =(e)=>{
    // console.log(e.target.value)
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSortValue =(e)=>{
    // console.log(e.target.value)
    this.setState({
      sortValue: e.target.value
    })
  }
  
  sort =(bots)=>{
    if(this.state.sortValue === "Health"){
      return [...bots].sort((a,b) =>{
        if(a.health > b.healt){
          return 1
        } else if(a.health < b.healt){
          return -1
        } else {
          return 0
        }
      })
    } else if(this.state.sortValue === "Damage"){
      return [...bots].sort((a,b) =>{
        if(a.damage > b.damage){
          return 1
        } else if(a.damage < b.damage){
          return -1
        } else {
          return 0
        }
      })
    }else {
      return bots
    }
  }

  render() {
    console.log(this.state.switch)
    // console.log(this.state.bot)
    let searchItem = this.state.bots.filter(bot =>{
      return  bot.name.toLowerCase().indexOf(this.state.searchValue.toLocaleLowerCase())
             !== -1
    })
    return (
      
      <div>
        {/* put your components here */}
        
        <YourBotArmy bot={this.state.bot}/>
        <BotCollection bots={this.sort(searchItem)}
                       handleClick={this.handleClick}
                       handleSearchChange={this.handleSearchChange} 
                       handleSortValue={this.handleSortValue}
                       switch={this.state.switch}/>
         />
      </div>
    );
  }

}

export default BotsPage;
