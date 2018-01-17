// let Person = require('./modules/Person');
import Person from './modules/Person';
let $ = require('jquery');

class Adult extends Person{

}

alert('abc 321');
let john = new Adult('John','Blue');
john.greet();