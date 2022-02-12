const message = document.querySelector('.messages')
const firstNumber =document.querySelector('.item1')
const secondNumber =document.querySelector('.item2')
const thirdNumber = document.querySelector('.item3')
console.log(firstNumber);
let playButton = document.querySelector('.play_button' )
console.log(playButton);

playButton.addEventListener('click',function(){
  //picking the math.randome element
  let randomNumber = Math.floor(Math.random()*4) + 1;
  let randomNumber2 = Math.floor(Math.random()*4) + 1;
  let randomNumber3 = Math.floor(Math.random()*4) + 1;
  //this random number picks a number bettewn 1 and4 
  let firstNumber1 = firstNumber.innerHTML = `${randomNumber}`;

  let secondNumber2 = secondNumber.innerHTML = `${randomNumber2}`;

  let thirdNumber3 = thirdNumber.innerHTML = `${randomNumber3}`;

  let lose = 'you have lost';
  let win = 'you have won!';
  if(firstNumber1 === secondNumber2 && firstNumber1 === thirdNumber3){
    message.innerHTML=`${win}` 
  } else {
    message.innerHTML =`${lose}`
  }
})