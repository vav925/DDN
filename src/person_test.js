const Person = require('./person'); //require的時候不用打.js
const p1 = new Person('Bill', 25);
const p2 = new Person('David', 30);
console.log(p1.toJSON());
console.log(p2.toJSON());