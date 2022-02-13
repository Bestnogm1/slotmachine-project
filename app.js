const message = document.querySelector('.messages')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const playButton = document.querySelector('.play_button')

function ranNumber(){
   return  Math.floor(Math.random()*4) + 1 
    
} 

playButton.addEventListener('click',()=>{
  //picking the math.randome element
  let randomNumber = ranNumber()
  let randomNumber2 = Math.floor(Math.random()*4) + 1
  let randomNumber3 = Math.floor(Math.random()*4) + 1
  //This random number picks a number bettewn 1 and4 
  let firstNumber = item1.innerHTML = `${randomNumber}`
  let secondNumber = item2.innerHTML = `${randomNumber2}`
  let thirdNumber = item3.innerHTML = `${randomNumber3}`

  let lose = 'you have lost';
  let win = 'you have won!';
  if(firstNumber === secondNumber && firstNumber === thirdNumber){

    message.innerHTML=`${win}` 
  } else {
    
    message.innerHTML =`${lose}`}


})