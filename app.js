const message = document.querySelector('.messages')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const playButton = document.querySelector('.play_button')

playButton.addEventListener('click',()=>{
  //picking the math.randome element
  let randomNumber = math.floor(Math.random()*4) + 1;
  let randomNumber2 = math.floor(Math.random()*4) + 1;
  let randomNumber3 = math.floor(Math.random()*4) + 1;
  //this random number picks a number bettewn 1 and4 
  let firstNumber = item1.innerHTML = `${randomNumber}`;
  let secondNumber = item2.innerHTML = `${randomNumber2}`;
  let thirdNumber = item3.innerHTML = `${randomNumber3}`;
  let lose = 'you have lost';
  let win = 'you have win!';

})