import React from 'react'
import {Card, Button, Icon, Image} from "semantic-ui-react";

function BotCard({bot, addToArmy, removeFromArmy, deleteBot}) {
    const {id, name, health, damage, armor, bot_class,catchphrase,avatar_url} = bot;

    const handleClick = () => {
        if(!addToArmy) {
            removeFromArmy(id);
        } else {
            addToArmy(bot):
        }
    };
  return (
    <Card>
        <image src={avatar_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className="date">{bot_class}</span>
            </Card.Meta>
            <Card.Description>{catchphrase}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="user" />
                {health}HP
            </a>
            <br />
            <a>
                <Icon name="shield alternate" />
                {armor} Armor
            </a>
            <br />
            <a>
                <Icon name="lightning" />
                {damage} Damage
            </a>
            <br />
            <div className="ui two buttons">
                {addToArmy && (
                    <Button basic color="green" onClick={handleClick}>
                        Add to Army
                    </Button>
                )}
                {!addToArmy && (
                    <Button basic color="red" onClick={handleClick}>
                        Remove from Army
                    </Button>
                )}
                {deleteBot && (
                    <Button basic color="red" onClick={deleteBot(id)}>
                        Delete Bot
                    </Button>
                )}
            </div>
        </Card.Content>
    </Card>
  );
};

export default BotCard;