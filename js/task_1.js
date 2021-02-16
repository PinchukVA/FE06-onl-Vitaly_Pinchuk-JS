var users = [
  {
      firstName: 'Ashton',
      lastName: 'Kutcher',
      age: 40
  }, {
      firstName: 'Bradley',
      lastName: 'Pitt',
      age: 54
  }, {
      firstName: 'Hannah',
      lastName: 'Dakota',
      age: 24
  }, {
      firstName: 'Bob',
      lastName: 'Dod',
      age: 24
  }, {
      firstName: 'Bob',
      lastName: 'Uncle',
      age: 70
  }
];
var username = prompt('please enter user name')
var result = [];
if (username !== null) {
 console.log('user name exist')
 for (var user of users) {
   if ((user.firstName === username) || (user.lastName === username)) {
     result.push(user);
   }
 }
}
console.clear();
if (result.length > 0) {
 for (var user of result) {
   console.log('user name: '+user.firstName+' '+user.lastName+'.')
   console.log('user age: '+user.age+'.')
 }
} else {
 console.log('No results found for your request')
}