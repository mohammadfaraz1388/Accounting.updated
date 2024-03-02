class Computation {
  constructor (previousOperation, currentOperation){
  this.previousOperation = previousOperation;
  this.currentOperation = currentOperation;
  this.clear()
}
clear(){
previousOperation.innerText = '0'
currentOperation.innerText = '0'
}
updateDisplay(value){

if (previousOperation.innerText === '0')
   previousOperation.innerText = value.toString()
else 
previousOperation.innerText = previousOperation.innerText.toString() + value.toString()

}
delete(){
previousOperation.innerText = previousOperation.innerText.slice(0, -1)

}
result(){
let result = previousOperation.innerText.split('')
let cleanResult = result.map(number => {


 if (number === 'x'){
   return '*'
 }
 if(number === '÷') return '/'
  else return number;    
  
});
result = cleanResult.join('')
console.log(eval(result))
currentOperation.innerText = eval(result)
}

}

const numbers = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const bracket = document.querySelectorAll('[data-bracket]')
const specialOperation = document.querySelectorAll('[data-special-operation]')
const deleteButton = document.getElementById('delete')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const previousOperation = document.getElementById('previous-operation')
const currentOperation= document.getElementById('current-operation')

const computation = new Computation (previousOperation, currentOperation)

numbers.forEach(button => {
button.addEventListener('click', ()=>{
  let value = button.innerText
  console.log(value);
  computation.updateDisplay(value);
})
})
operation.forEach(button =>{
button.addEventListener('click', ()=>{
let  operant = button.innerText
computation.updateDisplay(operant)
})
})
deleteButton.addEventListener ('click', ()=> {
computation.delete()
})
equal.addEventListener('click', ()=>{
computation.result()
})
clear.addEventListener('click', ()=>{
computation.clear()
})
bracket.forEach(button => {
button.addEventListener('click', ()=>{
let brackets = button.innerText
computation.updateDisplay(brackets)
})
})

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};