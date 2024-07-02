import { useState } from "react";

export default function Dice(){

    function getNums(){
        const random = Math.floor(Math.random() * 6) +1;
        return random;
    }
    
    function getRolls(){
        const dices = [];
        for(let i=0; i<2; i++){
            dices.push(getNums());
        }
        return dices;
    }

    const [dice, setDice] = useState(getRolls);

    function Lucky7() {
        setDice(getRolls);
    }

    const won = 7;

    return(
        <>
            {dice[0] + dice[1] === won ? <h3 style={{ color: "#80ffdb" }}>Lucky7 - You Won!</h3> : <h3>Not Lucky!</h3>}
            <div className='dice'>{dice[0]}</div>
            <div className='dice'>{dice[1]}</div>
            <button className='btn' onClick={Lucky7}>Roll Again</button>
      </>
    )
}