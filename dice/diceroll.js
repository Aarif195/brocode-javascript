// DICE ROLLER PROGRAM

function rollDice() {
  const numOfDice = document.getElementById('numOfDice').value
  const diceResult = document.getElementById('diceResult')
  const diceImages = document.getElementById('diceImages')
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice-images/dice${value}.png" alt="Dice ${value}">`)

  }

  // console.log(values);
  diceResult.textContent = `dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}
// http://127.0.0.1:5501/dice-images/4.png
// http://127.0.0.1:5501/dice-images/4dice.png