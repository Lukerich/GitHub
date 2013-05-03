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
    ipAnt[1] = (Number(prompt("Enter how many minutes they march in", "")));  // prompt for user input for array index 1
    ipAnt[2] = (prompt("Are there more than two a second?", ""));      // prompt for user input for array index 2


    if (ipAnt[2] === "Y" || "y" && (ipAnt[0] > 0 || ipAnt[1] > 0)) {   // if statement to validate user input for prompts of array
        var anCt = (ipAnt[0] * ipAnt[1] * secIm);                    // variable assigned formula results
        console.log(anCt + " Ant's are marching in:" + ipAnt[2] + ipAnt[0] + ipAnt[1]);              // output to console for calculation results
    } else {                                                        // else of the if
        if (ipAnt[2] === "N" || "n") {                                  // if statement for N input
            console.log("Ant's are marching two by two:");               // output to the console when the input is N
        } else {
            console.log("Enter Y or N and a number greater then 0 for Ants and minutes:");  // output when validation failed
        }
    }
}();
