const message = document.querySelector('.messages')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const playButton = document.querySelector('.play_button')


// let img = document.createElement("img"); 
// img.src = "android-chrome-192x192.png"; 
// console.log(img);
// let container = document.querySelector('.container')
// item1.appendChild(img);

// var wow = new Image(100, 100);
// wow.src = 'images/number7.png';
// document.body.appendChild(wow);

// var bye = new Image(100, 100);
// bye.src = 'images/watermelon.png';
// document.body.appendChild(bye);

// var hello = new Image(100, 100);
// hello.src = 'images/bAr.png';
// document.body.appendChild(hello);




function ranNumber(){
  //This random number picks a number bettewn 1 and4 
  // let random12= [wow, hello, bye]
  // return   Math.floor(Math.random() * random12.length);
} 

console.log(ranNumber());

playButton.addEventListener('click',()=>{

  var wow = new Image(100, 100);
  wow.src = 'images/number7.png';
  document.body.appendChild(wow);
  
  var bye = new Image(100, 100);
  bye.src = 'images/watermelon.png';
  document.body.appendChild(bye);
  
  var hello = new Image(100, 100);
  hello.src = 'images/bAr.png';
  document.body.appendChild(hello);

  let random12= [wow, hello, bye]
  let message=   Math.floor(Math.random() * random12.length);
  message.innerText = months[random12];








  //picking the math.randome element
  // let randomNumber = ranNumber()
  // let randomNumber2 = ranNumber()
  // let randomNumber3 = ranNumber()
  
  // let firstNumber = setTimeout(()=>{item1.innerHTML = `${randomNumber}`},500);
  
  // let secondNumber = setTimeout(()=>{item2.innerHTML = `${randomNumber2}`},1000);
  
  // let thirdNumber = setTimeout(()=>{item3.innerHTML = `${randomNumber3}`},1500);
  
  
  // if(randomNumber === randomNumber2 && randomNumber === randomNumber3){
  // setTimeout(()=>{ message.innerHTML= 'you won' }, 1600)  
  // } 
  // else if(randomNumber !== randomNumber2 || randomNumber !== randomNumber3) {
  //   setTimeout(()=>{ message.innerHTML = 'you lost' }, 1600) }
})