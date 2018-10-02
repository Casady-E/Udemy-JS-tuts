
// SECTION 1

// var name = 'John';

document.write(name);
var lastName = 'Smith';

document.write(lastName);
document.write(name+lastName);

var age = 26;

document.write(age);
var fullAge = true;
document.write(fullAge);

var job, isMarried;

// document.write(job);
job = 'teacher';
isMarried = true;

document.write(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

document.write(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');

document.write(lastName);
alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

document.write(birthYear + ' ');

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageJohn = ageJohn + 1;
ageMark *= 2;
ageMark = ageMark * 2;

document.write(ageJohn + ' ');
document.write(ageMark + ' ');


var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' will hopefully marry soon :)');
}
isMarried = false;

if (isMarried) {
	console.log('YES!');
}  else {
	console.log('NO!');
}

if (23 == "23") {
	console.log('Something to print...');
}


var age = 16;

if (age < 20) {
	console.log('John is a teenager');
} else {
	console.log('John is a man.');
}

var age = 16;

age >= 20;
age< 30;
!(age < 30);

console.log(age >= 20 && age < 30); // =>
console.log(age >= 20 || age < 30); // =>

var age = 25;

if (age < 20) {
	console.log('John is a teenage');
}else if (age > 20 && age < 30) {
	console.log('John is a young man.');
} else {
	console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
case 'teacher':
	console.log('John teaches kids.');
	break;
case 'driver':
	console.log('John drives a cab in Lisbon.');
	break;
case 'cop':
	console.log('John helps fight crime.');
	break;
default:
	console.log('John does something else.');
}



// CODING CHALLENGE 1


var ageJohn = 26;
var ageMark = 23;
var ageFred = 20;
var heightJohn = 52;
var heightMark = 67;
var heightFred = 57;

console.log((ageJohn * 5) + heightJohn);
console.log((ageMark * 5) + heightMark);
console.log((ageFred * 5) + heightFred);

console.log((ageJohn * 5) + heightJohn < (ageMark * 5) + heightMark);
console.log((ageJohn * 5) + heightJohn > (ageMark * 5) + heightMark);
console.log((ageJohn * 5) + heightJohn === (ageMark * 5) + heightMark);
console.log(((ageFred * 5) + heightFred) <= ((ageJohn * 5) + heightJohn) && ((ageMark * 5) + heightMark));

if ((ageJohn * 5) + heightJohn < (ageMark * 5) + heightMark) {
	console.log('John is the winner!');
} else if ((ageJohn * 5) + heightJohn > (ageMark * 5) + heightMark) {
	console.log('Mark is the winner!');
} else {
	console.log('No one wins!')
}


if ((ageJohn * 5) + heightJohn > (ageFred * 5) + heightFred && (ageJohn * 5) + heightJohn > (ageMark * 5) + heightMark) {
	console.log('John is the winner!');
} else if ((ageMark * 5) + heightMark > (ageFred * 5) + heightFred && (ageMark * 5) + heightMark > (ageJohn * 5) + heightJohn) {
	console.log('Mark is the winner!');
} else if ((ageFred * 5) + heightFred > (ageMark * 5) + heightMark && (ageFred * 5) + heightFred > (ageJohn * 5) + heightJohn) {
	console.log('Fred is the winner!');
} else {
	console.log('No one wins!');
}



var ageJohn = 26;
var ageMark = 23;
var ageFred = 20;
var heightJohn = 52;
var heightMark = 67;
var heightFred = 57;
var scoreJohn = (ageJohn * 5) + heightJohn;
var scoreMark = (ageMark * 5) + heightMark;
var scoreFred = (ageFred * 5) + heightFred;

if (scoreJohn > scoreFred && scoreJohn > scoreMark) {
	console.log('John is the winner!');
} else if (scoreMark > scoreFred && scoreMark > scoreJohn) {
	console.log('Mark is the winner!');
} else if (scoreFred > scoreJohn && scoreFred > scoreMark) {
	console.log('Fred is the winner!');
} else {
	console.log('No one wins!');
}

//END CODING CHALLENGE 1


//DAILY PROGRAMMER CHALLENGE 1

/*
create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

your name is (blank), you are (blank) years old, and your username is (blank)
for extra credit, have the program log this information in a file to be accessed later.
*/


function userInfo(name, age, username) {
  document.write('Your name is ' + name + ', you are ' + age + ' years old, and your username is ' + username + '.');
  //console.log('Your name is ' + name + ', you are ' + age + ' years old, and your username is ' + username + '.');
}

userInfo(prompt("What is your name?"), prompt("How old are you?"), prompt("What is your username?"));
