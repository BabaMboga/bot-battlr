import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBotToArmy }) {
  const handleClick = (bot) => {
    addBotToArmy(bot);
  };

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={handleClick}
          buttonText="Enlist"
        />
      ))}
    </div>
  );
}

export default BotCollection;
