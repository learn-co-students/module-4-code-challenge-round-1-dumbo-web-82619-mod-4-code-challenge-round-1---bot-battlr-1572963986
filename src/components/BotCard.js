import React from "react";

const BotCard = props => {
  const { bot } = props;


  let botType;

  switch (props.bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

const handleClick = (evt) => {
  let l = evt.target
  console.log(props.className ,"lol")
  props.className === "collection" ? props.handleClick(props.bot) : props.handleClick2(props.bot)
  
}

  return (
    <div  className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
