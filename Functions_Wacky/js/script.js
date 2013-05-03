/**
 * Richard Luke
 * Date: 5/02/13
 * Functions_wacky
 * ants go marching two by two
 */


var annFun = function () {
var ipAnt = [];
ipAnt[0] = (Number(prompt("Enter the number of Ants marching", "")));
ipAnt[1] = (Number(prompt("Enter how many minutes they march in", "")));
ipAnt[2] = prompt("Are there more than two a second?", "");
    if (ipAnt[2] == "Y" || "y"){
       var anCt = (ipAnt[0] * ipAnt[1]);
        console.log(anCt + "Ant's are marching in");
    } else {
        console.log("Ant's are marching ")
    }
}();
