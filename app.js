const message = document.getElementsByClassName('messages')
const firstNumber =document.getElementsByClassName('item1')
const secondNumber =document.getElementsByClassName('item2')
const thirdNumber = document.getElementsByClassName('item3')
console.log(firstNumber);
let playButton = document.querySelector('.play_button' )
console.log(playButton);
playButton.addEventListener('click',function(){
  //picking the math.randome element
  let randomNumber = math.floor(Math.random()*4) + 1;
  let randomNumber2 = math.floor(Math.random()*4) + 1;
  let randomNumber3 = math.floor(Math.random()*4) + 1;
  //this random number picks a number bettewn 1 and4 
  let firstNumber1 = item1.innerHTML = `${randomNumber}`;
  let secondNumber2 = item2.innerHTML = `${randomNumber2}`;
  let thirdNumber3 = item3.innerHTML = `${randomNumber3}`;
  let lose = 'you have lost';
  let win = 'you have won!';
  if(firstNumber1 === secondNumber2 && firstNumber1 === thirdNumber3){
    return `${win}` 
  } else {
    return `${lose}`
  }
})