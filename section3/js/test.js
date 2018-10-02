

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
