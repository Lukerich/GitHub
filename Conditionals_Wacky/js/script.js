/**
 * Richard Luke
 * Date: 4/28/13
 * Conditionals_Wacky
 * Got Pretzels?
 * given
 *      amount of pretzels container
 *      amount of pretzels consumed
 * Result to print out
 *      message to eat more pretzels if are pretzels available
 *      message to buy more pretzels if they are all gone
 */


var Przamt = Number(prompt("Enter amount of Pretzels in container in ounces:", "")); // user input for amount of pretzels in container
if (Przamt == "") {                         // validate input - if blank output message to console
    console.log("Amount of pretzels in container must be entered:");      // write out to console message that amount needs to be entered
}
var NumPrz = Number(prompt("Enter the amount of Pretzels you want consumed in ounces:", "")); // user input for amount of pretzels they want ot eat
if (NumPrz == "") {                         // validate input - if blank output message to console
    console.log("Amount of pretzels user wants to eat must be entered:");      // write out to console message that amount needs to be entered
}


var ptleft = Przamt / NumPrz;   // assign variable to available pretzels


       // if the number of pretzels is more than what you have bought - print out buy more pretzels
        // if the number is less then you bought print out eat more pretzels

// ternaries decision making on one line with console output for messages
 (NumPrz < ptleft) ? console.log("Eat more Pretzels:") : console.log("Sorry Pretzels all gone, buy more Pretzels");



