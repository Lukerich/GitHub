/**
 * Richard Luke
 * Date: 4/22/13
 * Functions_worksheet
 *
 * Stung!
 *                                // assign wgtLBs variable the number of pounds to use in reporting to console
 *      It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
 *      Given:
 *      Victim’s weight (in pounds)
 *      Parameter(s) for function:
 *      Victim’s weight (in pounds)
 *      Return:
 *      Number of Bee stings
 *      Result to print to the console:
 *      “It takes X bee stings to kill a X “
 */
var muerte;       // declared reportable variable
var wgtLBs;       // declared variable to report weight of victim
muerte = stung(Number(prompt("Enter the victim's weight in pounds:", ""))); // assign user input to variable to use as a parameter to feed the argument of the function
if (muerte > 0) {                         // if statement to valid input is a number greater 0
    function stung(lb) {                    // function defined or named as pain with parameter assigned
        var LBSwgt = 1 * lb;
        var stings = 8.6666666667 * lb;                   // formula assign to variable to calculate the number of stings to kill something or someone
        return stings && LBSwgt;                              // return to bring results out of the scope of the function
    }
    console.log("It takes " + muerte(1) + " bee stings to kill a " + muerte(0) + " creature");   // message to console reporting the number of bee stings to kill a creature of X lbs.
} else {                                                  // else of the if else statement to print out to the console a message if user input is not a number greater then 0
    console.log("You have to enter a number greater then 0"); // message printed to console for invalid input
}



