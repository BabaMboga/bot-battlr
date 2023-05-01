import React from 'react'
import BotCard from './BotCard'

function YourBotArmy({army, removeBotFromArmy, dischargeBot}) {
    const handleRemoveClick= bot => {
        removeBotFromArmy(bot);
    };

    const handleDischargeClick = bot => {
        dischargeBot(bot);
    }
  return (
    <div>YourBotArmy</div>
  )
}

export default YourBotArmy