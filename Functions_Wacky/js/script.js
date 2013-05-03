/**
 * Richard Luke
 * Date: 5/02/13
 * Functions_wacky
 * ants go marching two by two
 */


var annFun = function () {               // an anonymous function to self run
    var secIm = 60;                                       //variable assigned number of seconds in a minute
    var ipAnt = [];                                       // variable assign to an array for user input
    ipAnt[0] = (Number(prompt("Enter the number of Ants marching", ""))); // prompt for user input for array index 0
    ipAnt[1] = (Number(prompt("Enter how many minutes are they march in", "")));  // prompt for user input for array index 1
    if (ipAnt[0] > 2) {   // if statement to validate user input for prompts of array
        var anCt = (ipAnt[0] * ipAnt[1] * secIm);                    // variable assigned formula results
        console.log(anCt + " Ant's are marching in:");              // output to console for calculation results
    } else {                                                        // else of the if
            console.log("Ant's are marching two by two:");               // output to the console for two by two
        }
}();
