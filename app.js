const first = document.querySelector('.wow')
const button= document.querySelector('.lol')
const second= document.querySelector('.second')
const third = document.querySelector('.third')
let message = document.querySelector('.messages')


button.addEventListener('click', function(){
  let randome = Math.floor(Math.random() * 4) + 1;
  let randome2 = Math.floor(Math.random() * 4) + 1;
  let randome3 = Math.floor(Math.random() * 4) + 1;

let lose ='you lost'
  
let first1=first.innerHTML= `${randome}`
let second1=second.innerHTML=`${randome2}`
let third3=third.innerHTML=`${randome3}`

if(first1 === second1 && first1 === third3){
   message.innerHTML = "you win";
} else {
   message.innerHTML = `${lose}`
}
 })