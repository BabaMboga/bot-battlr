import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b !== bot));
        setArmy(army.filter((b) => b !== bot));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>Bot Army</h1>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <YourBotArmy
        army={army}
        removedBotFromArmy={removeBotArmy}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
