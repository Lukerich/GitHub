/**
 * Richard Luke
 * Date: 4/28/13
 * Functions_Screencast
 */

    // Sequential - Express
    // Conditionals  - If statements, ternaries
    // Reusable
    // Repetitive

// Don't repeat your self (DRY)
// functions store and reuse lines of code not values

/**
 *   Types
 *   Functions a.k.a normal Functions
 *   Procedures
 *   Anonymous Functions
 */
/**
 * Normal functions
 * function functionName() {
 * //code the function runs
 * }
 */
      // Function execution
// console.log("Hello World");  // code outside or out of scope of the function

function outputMsg(){        //function and function name
    console.log("Hello World");  // code or commands function runs
}

/**
function calcArea(){       //function and function name
    var width = 20;         //function and function name
    var height = 30;
    var area = width * height;
    console.log(area);
}
  calcArea();          // calling function (invocation)
*/
/** variable scope - using the width variable within if function is called
    // outside of the function it uses

var width = 5;

function calcArea(){       //function and function name
    var width = 20;         //function and function name
    var height = 30;
    var area = width * height;
    // console.log(area);
}
calcArea();          // calling function (invocation)
console.log(width);

// Arguments and Parameters   teddy bear fur?   10, 100, 1000 arguments and parameters

funcName (argument1, argument2);
function funcName(parameter1, parameter2){
    code the function runs
}


calcArea(30, 20);      // arguments

function calcArea(w, h){  // parameters
    var area = w * h;      // order is important 1st, 2nd ...
    console.log(area);
}


function dogYears(age){        //passing in parameters in function definition - storage containers for arguments
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old. ");
}
var age1 = 4;
dogYears(age1);  // arguments are in function call
dogYears(5);
*
*Returning Values - getting values back from the function
*/

calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    // console.log(area);
}
console.log(area);
