import React, { useState } from 'react';
import './App.css';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const squares = ['heart', 'crown', 'diamond', 'club', 'anchor', 'spade'];

function App() {
    const [bet, setBet] = useState({ heart: '', crown: '', diamond: '', club: '', anchor: '', spade: '' });

    const [money, setMoney] = useState(100);

    const [dices, setDices] = useState([]);

    const [playCount, setPlayCount] = useState(10);

    const handleChange = e => {
        setBet(bet => ({ ...bet, [e.target.name]: e.target.value }));
    };

    const checkBets = () => {
        return Object.values(bet).some(val => val);
    };

    const handlePlay = () => {
        if (!checkBets()) {
            alert('Please place your bets');
            return;
        }
        let playMoney = money;
        const allBet = Object.values(bet).reduce((acc, cur) => (acc += +cur), 0);
        if (allBet > playMoney) {
            alert("You don't have enough money!");
            return;
        }
        playMoney -= allBet;

        const playDices = [];
        const diceSet = new Set([]);

        let dice = getRandomInt(0, 6);
        playMoney += +bet[squares[dice]];
        playDices.push(squares[dice]);
        diceSet.add(dice);

        dice = getRandomInt(0, 6);
        playMoney += +bet[squares[dice]];
        playDices.push(squares[dice]);
        diceSet.add(dice);

        dice = getRandomInt(0, 6);
        playMoney += +bet[squares[dice]];
        playDices.push(squares[dice]);
        diceSet.add(dice);

        // get stake returned
        diceSet.forEach(dice => {
            playMoney += +bet[squares[dice]];
        });
        setMoney(playMoney);
        setDices(playDices);
        setPlayCount(playCount - 1);
    };

    const handleReset = () => {
        setBet({ heart: '', crown: '', diamond: '', club: '', anchor: '', spade: '' });
        setMoney(100);
        setDices([]);
        setPlayCount(10);
    };

    return (
        <>
            <div className="game-table">
                <input type="text" name="heart" className="input-value" onChange={handleChange} value={bet.heart} />
                <input type="text" name="crown" className="input-value" onChange={handleChange} value={bet.crown} />
                <input type="text" name="diamond" className="input-value" onChange={handleChange} value={bet.diamond} />
                <input type="text" name="club" className="input-value" onChange={handleChange} value={bet.club} />
                <input type="text" name="anchor" className="input-value" onChange={handleChange} value={bet.anchor} />
                <input type="text" name="spade" className="input-value" onChange={handleChange} value={bet.spade} />
            </div>
            <div>
                <button onClick={handleReset}>reset</button>
                <button style={{ marginRight: 10 }} onClick={handlePlay} disabled={playCount <= 0}>
                    play!
                </button>
                <span>Total play times left: {playCount}</span>
            </div>
            <div>The total money you have right now: {money}</div>
            <div>The rolling dices are: {dices.toString()}</div>
            {money <= 0 && <div>Game over. You don't have enough money to play.</div>}
            {playCount <= 0 && <div>Game over. You have won {money}</div>}
        </>
    );
}

export default App;
