/**
 * Richard Luke
 * Date: 4/22/13
 * Functions_worksheet
 *
 * Stung!
 *
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
    // var stings;       // declare reportable variable

    var stung = Number(prompt("Enter the victim's weight in pounds:", "")); // assign user input to variable to use as a parameter to feed the argument of the function
    if (stung > 0){
        function pain(lb){
            var stings = 8.6666666667 * lb;
            return stings;
        }
    } else {
        console.log("You have to enter a number greater then 0");
    }



