/**
 * Richard Luke
 * Date: 5/02/13
 * Functions_Industry
 * If production is line A then
 * bonus on production quota's
 * if production is > 1000
 * If Production line B then
 * bonus on production quota's
 * if production is > 500
 *
 */

var prdVal = [];                    // declared array for user input
prdVal[0] = Number(prompt("Enter shift production count:", ""));  // assign user input to array index 0  to get production count
prdVal[1] = prompt("Enter Line A or B:", "");               // assign user input to array index 1  to get Line or shift letter

lowPrd(prdVal[0], prdVal[1]);               // assign function parameters for argument inputs from user input

if (prdVal[0] > 0) {                    // if statement to validate a number greater then 0 is entered for production count
    function lowPrd(a, b) {             // function definition with two parameters for prod count and line letter
        var vyLB = (a < 500);           // variable assigned value to evaluate prod input
        var lowB = (a <= 1000);         // variable assigned value to evaluate prod input
        var medB = (a > 1000);          // variable assigned value to evaluate prod input
        var lnA = (b == "A" || b == "a"); // variable logic to test if line is A
        var lnB = (b == "B" || b == "b"); //  variable logic to test if line is B
        if (vyLB) {                             // if statement to test is prod count low
            console.log("Sorry no one gets a bonus tonight");  // output to console if prod count is too low
        } else {                                         // else  to evaluate prod counts above 499
            if (lowB && lnB || lowB && lnA) {           // if to test if prod count is good for line B but low for line A
                console.log("Line B gets a bonus! Sorry Line A.");    // output if line B gets bonus
                var bonVal = a * .02;                   // variable assigned to calculation of bonus for line B
                console.log("Bonus is $" + bonVal);     // output to console of bonus amount for line B
            } else {                                    // else to evaluate rest fo the prod counts
                if (medB && lnB || medB && lnA) {         // if statement to test if both lines get bonus
                    console.log("Everyone gets a bonus!");    // output to console for both lines getting bonus
                    var bonVal = a >= 1500 ? a * .10 : a * .05;   // variable assigned to calculation of bonus for both lines using ternary statement
                    console.log("Bonus is $" + bonVal);           // output to console for bonus amounts for both lines
                }
            }
        }
    }
} else {                                                       // else part of if that evaluates user input validity
    console.log("You must enter a number greater then 0 and a Line letter:");  // output to console to let user know they need to put in a number greater the 0
}



