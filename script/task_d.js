//task d
var age = prompt('Сколько тебе лет?', 'введите свой возраст');
alert(`поздравляем, вам ${age} полных лет!`);
console.log(age);
console.log(typeof age);
var res = age < 18 ? "вы несовершеннолетний" : "вы уже совершеннолетний";
alert (res);