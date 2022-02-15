const message = document.querySelector('.messages')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const playButton = document.querySelector('.play_button')

function ranNumber(){
  //This random number picks a number bettewn 1 and4 
  return  Math.floor(Math.random()*4) + 1 
} 

playButton.addEventListener('click',()=>{
  //picking the math.randome element
  let randomNumber = ranNumber()
  let randomNumber2 = ranNumber()
  let randomNumber3 = ranNumber()
  
  let firstNumber = setTimeout(()=>{item1.innerHTML = `${randomNumber}`},500);
  
  let secondNumber = setTimeout(()=>{item2.innerHTML = `${randomNumber2}`},1000);
  
  let thirdNumber = setTimeout(()=>{item3.innerHTML = `${randomNumber3}`},1500);
  
  let lose = 'you have lost';
  let win = 'you have won!';
  
  if(randomNumber === randomNumber2 && randomNumber === randomNumber3){
  setTimeout(()=>{ message.innerHTML= 'you won' }, 1600)  
  } 
  else if(randomNumber !== randomNumber2 || randomNumber !== randomNumber3) {
    setTimeout(()=>{ message.innerHTML ='you lost'} , 1600) }
})