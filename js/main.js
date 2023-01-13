
let cardName = document.querySelector('#cardName');
let cardNumber = document.querySelector('#cardNumber');
let cardMonth = document.querySelector('#cardMonth')
let cardYear = document.querySelector('#cardYear')
let cardCvc = document.querySelector('#cardCvc')

cardName.addEventListener('keyup', () => {
  document.querySelector('.name').innerHTML = String(cardName.value).toUpperCase();
})

cardNumber.addEventListener('keyup', ({key})=> {
  if(key <= 9 || key === 'Backspace') {
    document.querySelector('.number').innerText = String(cardNumber.value);
  }
})

cardMonth.addEventListener('keyup', ({key}) => {
  if(key <= 9 || key == 'Backspace') {
    document.querySelector('.mounth').innerText = String(cardMonth.value);
  }
})

cardYear.addEventListener('keyup', ({key}) => {
  if(key <= 9 || key === 'Backspace') {
    document.querySelector('.year').innerText = String(cardYear.value);
  }
})

cardCvc.addEventListener('keyup', ({key}) => {
  if(key <= 9 || key === 'Backspace') {
    if(String(cardCvc.value).length > 3) {
      cardCvc.value =  document.querySelector('.cvc').innerText;
      return;
    }
    document.querySelector('.cvc').innerText = String(cardCvc.value);
  }
})