var myLogModule = require('./Log.js');

myLogModule.info('Node.js started');
var msg = require('./Message.js');
msg('Hello');

var name = require('./data.js');
console.log('Name is ' +name.lastName + ', '+ name.firstName + ' ' + name.lastName + '.');

var man = require('./Person.js');
var person1 = new man('Lily', 'Sheero');
console.log(person1.fullName());

