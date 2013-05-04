/**
 * Richard Luke
 * Date: 5/04/13
 * Conditional_Wk4_Reflection
 */
var ban4Sl = [];                      // variable assigned to array for user input
ban4Sl[0] = prompt("Do you want bananas?:", "Y,N"); //array index 0 used for 1st user input
ban4Sl[1] = prompt("Are there bananas for sale?:", "Y,N"); // array index 1 used for 2nd user input
if (ban4Sl[0] === "" || ban4Sl[1] === "") { // 1st if statement to validate user input is not blank
    console.log("Enter either Y or N:");
} else {
    if (ban4Sl[0] === "Y" && ban4Sl[1] === "N") {
        console.log("Sorry there are no bananas today");
    } else {
        if (ban4Sl[0] === "Y" && ban4Sl[1] === "Y") {
            console.log("The bananas are on aisle 5:");
        } else {
            if (ban4Sl[0] === "N") {
                console.log("Hmmm then why did you come to the Banana Store?:");
            } else {
                console.log("You enter a letter other then Y or N, this is not allowed:");
            }
        }
    }
}



