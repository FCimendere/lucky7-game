# Udemy - Lucky7 Dice Game 

This is a solution to the [Lucky7 Dice Game Challenge on Udemy](https://www.udemy.com/course/the-web-developer-bootcamp).
When the user clicks the button, random dice are rolled, and if the total of the dice is 7, the user wins.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Click the button and create random numbers for both dice.

### Screenshot

<img width="800" alt="Screenshot 2024-01-10 at 21 10 13" src="https://github.com/FCimendere/lucky7-game/assets/65401609/7595659f-1c68-4f7b-82e0-f40ae9ca0f27">
<img width="800" alt="Screenshot 2024-01-10 at 21 10 13" src="https://github.com/FCimendere/lucky7-game/assets/65401609/22a4a4d3-0b33-44a1-91be-fd6689d6df2d">

## My process

### Built with

- React
- CSS3 Flexbox

### What I learned

```
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
```

### Continued development

I'm following the web development boot camp to learn React.

## Author

- Twitter - [@fly_pixie](https://twitter.com/fly_pixie)

