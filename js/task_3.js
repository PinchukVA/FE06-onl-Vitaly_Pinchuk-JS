const FOODSTUFFS = [
  {
    product: 'milk',
    price: 40,
    count: 2
  }, {
    product: 'potato',
    price: 14,
    count: 10
  }, {
    product: 'mineralWater',
    price: 29,
    count: 2
  }, {
    product: 'bread',
    price: 19,
    count: 1
  }, {
    product: 'sweets',
    price: 11,
    count: 15
  },
];
let budget = +prompt('введите бюджет семьи Петровичей');
let budgetPerDay = 0;
FOODSTUFFS.forEach(function(obj){
  budgetPerDay += obj.price * obj.count;
});
if(budget < budgetPerDay){
  alert('семья Петровичей не сможет купить на данную сумму продуктов даже на 1 день. Надо больше денег');
  alert('Остаток: ' + budget + ' рубля(-ей)' )
} else if (budget == budgetPerDay){
  alert('семья Петровичей сможет прожить 1 день.');
  let balance = budget - budgetPerDay;
  alert('Остаток: ' + balance + ' рубля(-ей)')
} else {
  let numberDay = Math.floor(budget/budgetPerDay);
  let rest = budget - budgetPerDay*numberDay;
  alert('семья Петровичей сможет прожить ' + numberDay + ' дней(-ня)');
  alert('Остаток: ' + rest + ' рубля(-ей)')        
}