
const message = document.querySelector('.message')
const item1 = document.querySelector('.display-box-1')
const item2 = document.querySelector('.display-box-2')
const item3 = document.querySelector('.display-box-3')
const playButton = document.querySelector('.play_button')
const mode = document.querySelector('.dark-light-btn')
const reset = document.querySelector('.reset-btn')
const body =document.querySelector('body')
const gameBody =document.querySelector('.game-body')

let lose = new Audio("audio/Aww Sound Effect.mp3");
lose.play();

let win = new Audio("audio/winner.wav"); // buffers automatically when created
win.play();

var spinning = new Audio("audio/spinning.wav"); // buffers automatically when created
spinning.play();



console.log(message,item1,item2,item3,playButton);
 let months = ["🍒", "🍉","7️⃣","⬛️"];
function ranNumber(){
  return  months[ Math.floor(Math.random() * months.length)];
} 
playButton.addEventListener('click',()=>{
  spinning.play();
  let randomNumber = ranNumber()
  let randomNumber2 = ranNumber()
  let randomNumber3 = ranNumber()

  let firstNumber = setTimeout(()=>{item1.innerHTML = `${randomNumber}`},500);
  let secondNumber = setTimeout(()=>{item2.innerHTML = `${randomNumber2}`},1000);
  let thirdNumber = setTimeout(()=>{item3.innerHTML = `${randomNumber3}`},1500);

  if(randomNumber === randomNumber2 && randomNumber === randomNumber3){
  setTimeout(()=>{ message.innerHTML= 'you won' }, 1600) 
  setTimeout(()=>{win.play()}, 1650) 

  } 
  else if(randomNumber !== randomNumber2 || randomNumber !== randomNumber3) {
    setTimeout(()=>{ message.innerHTML = ' Try again!' }, 1600) }
    setTimeout(()=>{lose.play()}, 1650)
})

reset.addEventListener('click',()=>{ 
message.innerHTML= ''
item1.innerHTML= ''
item2.innerHTML= ''
item3.innerHTML= ''
body.style.background === 'salmon'
})

mode.addEventListener('click', function lightMode(){
  if(body.style.background === 'salmon'){
    body.style.background = 'salmon'
  }
  gameBody.style.background = 'red'
  item1.style.background = 'gold'
  item2.style.background = 'gold'
  item3.style.background = 'gold'
  mode.innerHTML='dark Mode'
})
