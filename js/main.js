
let cardName = document.querySelector('#cardName');
let cardNumber = document.querySelector('#cardNumber');
let cardMonth = document.querySelector('#cardMonth')
let cardYear = document.querySelector('#cardYear')
let cardCvc = document.querySelector('#cardCvc')

cardName.addEventListener('keyup', () => {
  let lenghtCardName = String(cardName.value).length;

  if(lenghtCardName !== 3 && lenghtCardName !== 0) {
    document.querySelector('#cardName').classList.add('invalid')
  }
  if (lenghtCardName >= 3) {
    document.querySelector('#cardName').classList.remove('invalid')
  }
  document.querySelector('.name').innerHTML = String(cardName.value).toUpperCase();
})

cardNumber.addEventListener('keyup', ({key})=> {
  let lenghtCardNumber = String(cardNumber.value).length;

  if(lenghtCardNumber !== 19 && cardNumber !== 0) {
    document.querySelector('#cardNumber').classList.add('invalid')
  }
  if (lenghtCardNumber == 19) {
    document.querySelector('#cardNumber').classList.remove('invalid')
  }

  if(key <= 9 || key === 'Backspace') {
    if( lenghtCardNumber == 4 || lenghtCardNumber == 9 || lenghtCardNumber == 14){
      cardNumber.value += "."
      document.querySelector('.number').innerText = String(cardNumber.value);


      if(key == 'Backspace') {
        cardNumber.value = String(cardNumber.value).slice(0, -2);
        document.querySelector('.number').innerText = String(cardNumber.value);
      }
    }

    document.querySelector('.number').innerText = String(cardNumber.value);

  }

})

cardMonth.addEventListener('keyup', ({key}) => {
  let lenghtCardMounth = String(cardMonth.value).length;

  if(lenghtCardMounth !== 2 && lenghtCardMounth !== 0) {
    document.querySelector('#cardMonth').classList.add('invalid')
  }
  if (lenghtCardMounth == 2) {
    document.querySelector('#cardMonth').classList.remove('invalid')
  }

  if(key <= 9 || key == 'Backspace') {
    document.querySelector('.mounth').innerText = String(cardMonth.value);
  }
})

cardYear.addEventListener('keyup', ({key}) => {
  let lenghtCardYear = String(cardYear.value).length;

  if(lenghtCardYear !== 2 && lenghtCardYear !== 0) {
    document.querySelector('#cardYear').classList.add('invalid')
  }
  if (lenghtCardYear == 2) {
    document.querySelector('#cardYear').classList.remove('invalid')
  }

  if(key <= 9 || key === 'Backspace') {
    document.querySelector('.year').innerText = String(cardYear.value);
  }
})

cardCvc.addEventListener('keyup', ({key}) => {
  let lenghtCardCvc = String(cardCvc.value).length;

  if(lenghtCardCvc !== 3 && lenghtCardCvc !== 0) {
    document.querySelector('#cardCvc').classList.add('invalid')
  }
  if (lenghtCardCvc == 3) {
    document.querySelector('#cardCvc').classList.remove('invalid')
  }

  if(key <= 9 || key === 'Backspace') {
    if(String(cardCvc.value).length > 3) {
      cardCvc.value =  document.querySelector('.cvc').innerText;
      return;
    }
    document.querySelector('.cvc').innerText = String(cardCvc.value);
  }
})