/**
 * Richard Luke
 * Date: 5/04/13
 * Conditional_Wk4_Reflection
 */
var ban4Sl = [];                      // variable assigned to array for user input
ban4Sl[0] = prompt("Do you want bananas?:", "Y,N"); //array index 0 used for 1st user input
ban4Sl[1] = prompt("Are there bananas for sale?:", "Y,N"); // array index 1 used for 2nd user input
if (ban4Sl[0] === "" || ban4Sl[1] === "") { // 1st if statement to validate user input is not blank
    console.log("Enter either Y or N:");    // output to user that blank is not allowed
} else {                                    // else of if to evaluate user input
    if (ban4Sl[0] === "Y" && ban4Sl[1] === "N") {  // if to evaluate user input for combination of Y and N
        console.log("Sorry there are no bananas today");  //output to user to show evaluation is true for Y and N input
    } else {                                            // else of if to evaluate user input for next combination
        if (ban4Sl[0] === "Y" && ban4Sl[1] === "Y") {  //if to evaluate combination of Y and Y input
            console.log("The bananas are on aisle 5:");  // output to console when Y and Y input is true
        } else {                                          // else of if for next evaluation
            if (ban4Sl[0] === "N") {                       // if to evaluate when 1st input is N
                console.log("Hmmm then why did you come to the Banana Store?:");  // output to user when 1st input is N
            } else {                                                              // else of if for last evaluation of user input
                console.log("You enter a letter other then Y or N, this is not allowed:");   // output to user when all evaluations are false
            }
        }
    }
}



