
// SECTION 2

//FUNCTIONS

function calculateAge(yearofBirth) {
	var age = 2018 - yearofBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
var ageEthan = calculateAge(1993);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function retirementAge (name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if(retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}

}

retirementAge('John', 1990);
retirementAge('Mike', 1969);
retirementAge('Mary', 1948);
retirementAge('Ethan', 1993);

//function expressions

var someFun = function(par){

}




//ARRAYS

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

john.indexOf('Smith');

if (john.indexOf('teacher') === -1){
	console.log('John is NOT a teacher.');
}

//OBJECTS
//v1

var john = {
	name: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2018 - this.birthYear;
	}
};

	john.calculateAge = function(yearofBirth) {
		return 2018 - yearofBirth;
	}


console.log(john);
console.log(john.family[2]);
console.log(john.calculateAge(1990));
console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);

//v2
var john = {
	name: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		//return 2018 - this.birthYear;
		this.age = 2018 - this.birthYear;
	}
};
john.calculateAge();
console.log(john);




//regular function

var calculateAge = function(yearOfBirth) {

}


//object in object

console.log(john.lastName);
console.log(john['lastName']);
var xyz = 'job';
console.log(john[xyz]);

john.lastName = "Miller";
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane ['isMarried'] = true;

console.log(jane);

//LOOOOOOPS
/*
 for(var i = 0; i < 10; i++) {
	 console.log(i);
 }
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
10, FALSE, end loop!
*/
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for(var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}

for (var i = 0; i <= 5; i++) {
	console.log(i);
	if (i === 3) {
		break;
	}
}

for (var i = 0; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}


//CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array ( just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age
	(18 or older), as well as their age.
5. Finally, create a function called printFullAge which receives the Array
	of years as an argument, executes the steps 2., 3. and 4. and returns an Array
	of true/fals boolean values: true if the person is of full age (>= 18 years)
	and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two
	variables: full_1 and full_2

	example input: [1965, 2008, 1992]
	example output: [true, false, true]

	Hint you can use a loop not only to read from an array, like y [i], but
	also to set values in an array like y[i] = ... You can also use the specific
	array methods.
*/


var birthYear = [1990, 1993, 1940, 1954];
for(var i = 0; i < birthYear.length; i++) {
	console.log(birthYear[i]);
}
var age = 2018 - birthYear;

console.log(age);

if (birthYear.indexOf(1) <= 18){
	console.log('John is legal.');
} else {
  console.log('John is NOT legal.');
}


//for(var i = ages; i < birthYear.length; i++ ) {
  //console.log(i);

//}
function calculateAge(yearofBirth) {
	var age = 2018 - yearofBirth;
	return age;
}
function calculateName() {
  var name = ['John', 'Mary', 'Mark', 'Bob'];
  return name;
}

if (calculateAge.length <= 18){
	console.log('John is legal.');
} else {
  console.log('John is NOT legal.');
}


var ageJohn = calculateAge(1990);
if (ageJohn >= 18) {
  console.log(name + ' is over 18 and is', ageJohn, 'years old.');
} else {
  console.log(name + ' is not 18.');
};

function legalAge (name, year) {
	var age = calculateAge(year);
	var legal = age;

	if(legal >= 18) {
		console.log(name + ' is over 18 and is', legal, 'years old.');
	} else {
		console.log(name + ' is not 18.');
	}
}
legalAge('John', 1990);

var user = {
  age: age

}
console.log(user);
// console.log(user.name[2]);






/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and
height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something
like "Is Mark's BMI higher than John's? true").
GOOD LUCK
*/


const markWeight = 15;
const markHeight = 68;
const johnWeight = 34;
const johnHeight = 69;

var mark = {
  height: 1.67,
  mass: 61
}

var john = {
  height: 1.82,
  mass: 66
}

function calcilateBmi(height, mass){
let bmi = mass / (height * height);
console.log("Your BMI is: " + bmi.toFixed(2));
return bmi;
}

const comepareBmi = function(){
let markBmi = calcilateBmi(mark.height, mark.mass);
let johnBmi = calcilateBmi(john.height, john.mass);
if (markBmi > johnBmi){
  console.log("Mark has a higher BMI. His BMI is " + markBmi.toFixed(2));
} else if (johnBmi > markBmi){
  console.log("John has a higher BMI. His BMI is " + johnBmi.toFixed(2));
}
}();




/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's
team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner
to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account
there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console. HINT: you will need the && operator
to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK
*/

const johnScore = [89, 120, 103];
const markScore = [116, 94, 123];
const maryScore = [97, 134, 105];

function calculateAverage(score){
  average = (score[0] + score[1] + score[2]) / score.length;
  console.log("Your average score is: " + average);
  return average;
}

const compareAverages = function(){
let johnAverage = calculateAverage(johnScore);
let markAverage = calculateAverage(markScore);
let maryAverage = calculateAverage(maryScore);
if ((johnAverage > markAverage) && (johnAverage > maryAverage)){
  console.log("John has the highest average score at:" + johnAverage);
} else if ((markAverage > johnAverage) && (markAverage > maryAverage)){
  console.log("Mark has the highest average score at:" + markAverage);
} else if ((maryAverage > markAverage) && (maryAverage > johnAverage)){
  console.log("Mary has the highest average score at:" + maryAverage);
}
}();






/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills
were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is
between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK
*/


const dinnerBill = 124;
const dinnerBill2 = 48;
const dinnerBill3 = 268;

const tipArray = [];
const billArray = [];

function tipCalculator(bill){

if (bill <= 50 && bill > 0){
  let tip = 0.15;
  let finalTip = (bill * tip);
  console.log('Your tip is $' + finalTip.toFixed(2));
  let finalBill = finalTip + bill;
  console.log("Your final bill is $" + finalBill.toFixed(2))
  tipArray.push(finalTip);
  billArray.push(finalBill);
} else if (bill > 50 && bill > 0){
  let tip = 0.20;
  let finalTip = (bill * tip);
  console.log('Your tip is $' + finalTip.toFixed(2));
  let finalBill = finalTip + bill;
  console.log("Your final bill is $" + finalBill.toFixed(2))
  tipArray.push(finalTip);
  billArray.push(finalBill);
} else if (bill < 0){
  console.log("Error. This is not a valid amount.")
}
console.log(tipArray);
console.log(billArray);
};

tipCalculator(dinnerBill);
tipCalculator(dinnerBill2);
tipCalculator(dinnerBill3);





/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object
and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full
name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK
*/

const markObject = {
  name: "Mark",
  height: 1.67,
  mass: 61,
  calculateBmi: function calculateBmi(){
    let bmi = this.mass / (this.height * this.height);
    console.log("Your BMI is: " + bmi.toFixed(2));
    return this.bmi = bmi.toFixed(2);
  }
}

const johnObject = {
  name: "John",
  height: 1.82,
  mass: 66,
  calculateBmi: function calculateBmi(){
    let bmi = this.mass / (this.height * this.height);
    console.log("Your BMI is: " + bmi.toFixed(2));
    return this.bmi = bmi.toFixed(2);
  }
}


console.log(markObject);
console.log(markObject.calculateBmi());
console.log(markObject.bmi);
console.log(markObject);

console.log(johnObject);
console.log(johnObject.calculateBmi());
console.log(johnObject.bmi);
console.log(johnObject);

let comepareBmi = (function(){
  if (markObject.bmi > johnObject.bmi){
    console.log("Mark's BMI is higher, his BMI is " + markObject.bmi);
  } else if (markObject.bmi < johnObject.bmi){
    console.log("John's BMI is higher, his BMI is " + johnObject.bmi);
  } else if (markObject.bmi = johnObject.bmi){
    console.log("Mark and John have the same BMI");
  };
})();





/*
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using
everything we learned!
This time, John and his family went to 5 different restaurants. The bills were
$124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill
is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing
final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then
fill them up in the loop.
*/


const johnBill = {
  tipArray: [],
  billArray: [],
  bill: [124, 48, 268, 180, 42],
  tipCalculator (){
    let bills = this.bill;
    let tipArray = this.tipArray;
    let billArray = this.billArray;
    bills.forEach(function(value, index, array){
    array = value[index];
      if (value <= 50 && value > 0){
        let tip = 0.15;
        let finalTip = (value * tip);
        console.log('Your tip is $' + finalTip.toFixed(2));
        let finalBill = finalTip + value;
        console.log("Your final bill is $" + finalBill.toFixed(2))
        tipArray.push(finalTip);
        billArray.push(finalBill);
      } else if (value > 50 && value > 0){
        let tip = 0.20;
        let finalTip = (value* tip);
        console.log('Your tip is $' + finalTip.toFixed(2));
        let finalBill = finalTip + value;
        console.log("Your final bill is $" + finalBill.toFixed(2))
        tipArray.push(finalTip);
        billArray.push(finalBill);
      } else if (value < 0){
        console.log("Error. This is not a valid amount.")
      }
  })
},
};
johnBill.tipCalculator()
console.log(johnBill);



/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill
is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable
(starting from 0). After you have the sum of the array, divide it by the number of
elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/


const markBill = {
  tipArray: [],
  billArray: [],
  bill: [77, 375, 110, 45],
  tipCalculator (){
    let bills = this.bill;
    let tipArray = this.tipArray;
    let billArray = this.billArray;
    bills.forEach(function(value, index, array){
    array = value[index];
      if (value <= 100 && value > 0){
        let tip = 0.10;
        let finalTip = (value * tip);
        console.log('Your tip is $' + finalTip.toFixed(2));
        let finalBill = finalTip + value;
        console.log("Your final bill is $" + finalBill.toFixed(2))
        tipArray.push(finalTip);
        billArray.push(finalBill);
      } else if (value >= 100 && value < 300 && value > 0){
        let tip = 0.20;
        let finalTip = (value* tip);
        console.log('Your tip is $' + finalTip.toFixed(2));
        let finalBill = finalTip + value;
        console.log("Your final bill is $" + finalBill.toFixed(2))
        tipArray.push(finalTip);
        billArray.push(finalBill);
      } else if(value >= 300 && value > 0){
        let tip = 0.25;
        let finalTip = (value* tip);
        console.log('Your tip is $' + finalTip.toFixed(2));
        let finalBill = finalTip + value;
        console.log("Your final bill is $" + finalBill.toFixed(2))
        tipArray.push(finalTip);
        billArray.push(finalBill);
      }
        else if (value < 0){
        console.log("Error. This is not a valid amount.")
      }
  })
},
};

function calcAverage(tipArray) {
    var sum = 0;
    for (var i = 0; i < tipArray.length; i++) {
        sum = sum + tipArray[i];
    }
    return sum / tipArray.length;
}


markBill.tipCalculator()
console.log(markBill);
johnBill.average = calcAverage(johnBill.tipArray);
markBill.average = calcAverage(markBill.tipArray);
console.log(johnBill, markBill);
if (johnBill.average > markBill.average) {
    console.log('John\'s family pays higher tips, with an average of $' + johnBill.average.toFixed(2));
} else if (markBill.average > johnBill.average) {
    console.log('Mark\'s family pays higher tips, with an average of $' + markBill.average.toFixed(2));
}
