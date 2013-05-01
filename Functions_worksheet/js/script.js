/**
 * Richard Luke
 * Date: 4/30/13
 * Conditionals_worksheet
 * Circumference                2πr OR πd
 * Calculate the circumference of a circle.
 * Parameter(s) for function:
 * Radius of the circle or Diameter of the circle
 * Return:
 * Circumference of the circle
 * Result to print to the console:
 * “The circumference of the circle is X”;
 */
var total;               // declare total variable

// assign funSel variable to prompt for input from user for radius or diameter selection
var funSel = prompt("To calculate Circumference of a circle \n Enter R for radius or D for diameter.", "");
// if statement to evaluate user input and decide if radius or diameter is entered
if (funSel === "R" || funSel === "r") {
    total = cirCalc2(Number(prompt("Enter Radius of circle to calculate it's circumference", ""))); // assign user input for radius value
    if (total > 0) {                                      // validate user input is a number
        function cirCalc2(r) {                                        // define function cirCalc2 for radius to calculate circumference
            var cirC = 2 * 3.14 * r;                    // assign variable cirC to formula to calculate circumference
            return cirC;                                // return to bring result of calculation out of the scope of the function - to make it available to use
        }
    } else {
        console.log("Please enter a number:");   // message to console/user to enter number
    }
} else {                                            // else if statement to choose d for diameter instead of r for radius input
    if (funSel === "D" || funSel === "d") {          //  if part to collect user input for d selection
        total = cirCalc1(Number(prompt("Enter Radius of circle to calculate it's circumference", ""))) //assign user input for diameter
        if (total > 0) {                           // validate user input is a number
        function cirCalc1(d) {                      // define function cirCalc1 for diameter to calculate circumference
            var cirC = 3.14 * d;                // assign variable cirC to formula to calculate circumference
            return cirC;                        // return to bring result of calculation out of the scope of the function - to make it available to use
        }
        } else {
            console.log("Please enter a number:");  // message to console/user to enter number
        }
    } else {                                    // else statement to validate R/r or D/d input only
        console.log("Only R or D are valid inputs");  //message to user to user valid inputs
    }
}
console.log("The circumference of the circle is " + total);  // message to user/console for results of circumference

