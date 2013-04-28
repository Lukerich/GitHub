/**
 * Richard Luke
 * Date: 4/26/13
 * Conditionals_Wacky
 * Amount of pretzels do you want to eat a day?
 * given
 *      cost of pretzels pre container
 *      amount of pretzels container
 *      amount of pretzels consumed daily
 * Result to print out
 *      monthly cost of pretzels
 *      amount consumed monthly, yearly
 *      number of pretzel containers
 */


var Przamt = Number(prompt("Enter amount of Pretzels in container in ounces:", ""));
var NumPrz = Number(prompt("Enter the amount of Pretzels you want consumed per  in ounces:", ""));


var ptleft = Przamt / NumPrz;


       // if the number of pretzels is more than what you have bought - print out buy more pretzels
        // if the number is less then you bought print out eat more pretzels

 (NumPrz < ptleft) ? console.log("Eat more Pretzels:") : console.log("Sorry Pretzels all gone, buy more Pretzels");



