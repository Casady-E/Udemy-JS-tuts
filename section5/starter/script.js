/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(this.name + ' is ' + (2019 - this.yearOfBirth));
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//john.__proto__ == Person.prototype

//john.hasOwnProperty('job') //true
//john.hasOwnProperty('lastName') //false
// john instanceOf Person //true
var x = [2,4,5];
console.info(x);
x.length //3
*/


/*
// Object.create

var personProto = {
  calculateAge: function(){
    console.log(2019 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}
});
*/
