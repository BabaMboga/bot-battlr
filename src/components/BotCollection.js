import React from 'react';
import BotCard from './BotCard';

function BotCollection({bots, addBotToArmy}){
    const handleClick = bot => {
        addBotToArmy(bot);
    };
}