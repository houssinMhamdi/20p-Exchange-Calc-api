const currencyEl_one = document.getElementById('currency-one');
const currencyEl_tow = document.getElementById('currency-tow');
const amountEl_one = document.getElementById('amount-one');
const amountEl_tow = document.getElementById('amount-tow');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
   const currency_one = currencyEl_one.value;
   const currency_tow = currencyEl_tow.value;
   fetch(`https://v6.exchangerate-api.com/v6/824281b162333c45805f1aee/latest/${currency_one}`)
   .then(res => res.json())
   .then(data  => {
      const rate =  data.conversion_rates[currency_tow];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_tow}`;
      amountEl_tow.value = (amountEl_one.value * rate).toFixed(2);//tofixed method is to make the number from 1.58741256 to 1.58
   })


}


currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_tow.addEventListener('change',calculate);
amountEl_tow.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_tow.value;
    currencyEl_tow.value = temp;
    calculate();
})

calculate();