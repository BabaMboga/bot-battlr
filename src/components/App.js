import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./app.css"

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/645065849d312622a355b45b")
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
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
      <YourBotArmy
        army={army}
        removeFromArmy={removeFromArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
     
    </div>
  );
}

export default App;
