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
  
  let firstNumber = setTimeout(()=>{item1.innerHTML = `${randomNumber}`},1000);
  
  let secondNumber = setTimeout(()=>{item2.innerHTML = `${randomNumber2}`},2000);
  
  let thirdNumber = setTimeout(()=>{item3.innerHTML = `${randomNumber3}`},3000);
  
  let lose = 'you have lost';
  let win = 'you have won!';
  
  if(firstNumber === secondNumber && firstNumber === thirdNumber){
    setTimeout(()=>{ message.innerHTML=`${win}` }, 3000)  
  } if (firstNumber !== secondNumber && firstNumber !== thirdNumber) {
    setTimeout(()=>{ message.innerHTML =`${lose}`} , 4000) }
})