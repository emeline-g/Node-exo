const cowsay = require('cowsay');
const newPerson = require('./information.js');
let student = newPerson.person

console.log(cowsay.say({
    text : `Hello, i am ${student.name} from the ${student.campus} campus`,
    e : "oO",
    T : "U "
}));

