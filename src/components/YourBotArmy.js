import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBotFromArmy, dischargeBot }) {
  const handleRemoveClick = (bot) => {
    removeBotFromArmy(bot);
  };

  const handleDischargeClick = (bot) => {
    dischargeBot(bot);
  };
  return (
    <div className="your-bot-army">
      {army.length > 0 ? (
        army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            removeFromArmy={removeFromArmy}
            handleClick={handleRemoveClick}
            deleteBot={handleDischargeClick}
          />
        ))
      ) : (
        <p> You haven't enlisted any bots yet.</p>
      )}
    </div>
  );
}

export default YourBotArmy;
