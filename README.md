## Dynamic Levelling System 

### Example
```js
const totalXP = 450;

console.log(new Ranking().level(totalXP));
```

### Response
```js
{ level: 2, restXP: 165, nextXP: 220 }
```

### Progress Bar
```js
const progress = Math.floor((restXP / nextXP) * 20); // We've 20 bars (◼ and ◻)
const progressBar = [...Array(progress).fill('◼'), ...Array(20 - progress).fill('◻')].join('');
```
```
LEVEL 2

165 XP                   220 XP
◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◻◻◻◻◻
```
