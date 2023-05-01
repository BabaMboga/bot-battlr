import React from "react";


function BotCard({ bot, addToArmy, handleClick, deleteBot }) {
  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
  } = bot;

  const handleClick = () => {
    if (!addToArmy) {
      removeFromArmy(id);
    } else {
      addToArmy(bot);
    }
  };
  return (
    <div className="bot-card">
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <p>Class: {bot_class}</p> 
        <p>CatchPhrase: {catchphrase}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <div className="ui two buttons">
        {addToArmy && (
          <button basic color="green" onClick={addToArmy}>
            Add to Army
          </button>
        )}
        {!addToArmy && (
          <button basic color="red" onClick={handleClick}>
            Remove from Army
          </button>
        )}
        {deleteBot && (
          <button basic color="red" onClick={() => deleteBot(id)}>
            Delete Bot
          </button>
        )}
      </div>
    
  
  </div>
      
  );
}

export default BotCard;
