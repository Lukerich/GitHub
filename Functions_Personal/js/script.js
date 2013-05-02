/**
 * Richard Luke
 * Date: 5/01/13
 * Functions_Personal - time to lose weight
 * 3500 calories per pound
 * 4 miles / hour for 60 minutes for a 140lb person is ~ 330 calories
 *                        150 lb person 340 calories/hr.
 *                        175 lb person 396 calories/hr.
 *                        median multiplier 2.2666666667 / 4 =  0.566666666675 / per mile
 * 10 lbs = 35000 calories burned
 * 1600 calories vs 2000 per day = 400
 * 1 hour walk at 4m/hr. = ~ 330   (140 lb person)
 * 5 days a week = 730 * 5 =    3650 calories / wk.
 * 35000/3650 = ~ 9.6 wks. to lose 10lbs
 */


//var total;      // declared variable to use as output to the console

var input = [];      // array to hold input values

input[0] = Number(prompt("Enter amount of weight in pounds you want to lose:", ""));
input[1] = Number(prompt("Enter of calories you will reduce below base line of 2000:", ""));
input[2] = Number(prompt("Enter number of miles you will walk at a 4miles/hr. pace per week:", ""));
//input[3] = Number(prompt("Enter your weight in pounds:", ""));

input [0, 1, 2] = wgtLst(0, 1, 2);

function wgtLst(a, b, c) {
    var calPP = 3500;                       // calories burned per pound
    var mulFct = 0.566666666675;               // multiplier for weight of person
    var timTls = (a * calPP) / (b + c * mulFct);
    return;
}


console.log("It will take " + input + " weeks to lose " + input[0] + " lbs");





