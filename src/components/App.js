import React, {useState, useEffect} from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

function App() {
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3000/bots')
            .then(response => response.json())
            .then(bots => setBots(bots));
    }, []);

    const addBotToArmy = bot => {
        if (!army.includes(bot)){
            setArmy([...army, bot]);
        }
    };

    const removeBotArmy = bot => {
        setArmy(army.filter(b => b !== bot));
    };

  return (
    <div>App</div>
  )
}

export default App