/**
 * Richard Luke
 * Date: 4/22/13
 * Celsius to Fahrenheit converter
 * Conditionals_worksheet
 *  Convert a temperature to either Celsius or degrees Fahrenheit depending on what the user has entered.
 *  If the user puts a "C" for the unit, the calculator should convert Celsius. It the user puts "F" for the unit,
 *  the calculator should convert to Fahrenheit.
 *  Given:
 *       Degrees (in F or C)
 *  Unit:
 *      (a string holding "F" or a "C")
 *  Result:
 *        "The temperature is X degrees Celsius." Or "The temperature is X degrees Fahrenheit."
 *  Data Set to Test:
 *         32F is 0C
 *         100C is 212F
 *         90F is 32.22C
 */                          // variables to hold user input for temperature and unit
    var degTmp = Number(prompt("Enter the temperature: Either Celsius or Fahrenheit", ""));
    var tmptre;
    degUnt = prompt("Enter the Unit to convert to: \nC for Celsius F for Fahrenheit", "");
              // double if statements that use strict equality and or operators to
              // evaluate user input and decide what formula to run
    if (degUnt === "C" || degUnt === "c"){       // or operator used to account for upper and lower case
            tmptre = (degTmp - 32) * 5/9;        // formula to convert fahrenheit to celsius
            console.log("The temperature is " + tmptre + "\xB0 degrees Celsius.");  //print to console
    }
    if (degUnt === "F" || degUnt === "f"){         // or operator used to account for upper and lower case
             tmptre = degTmp * 9/5 + 32;          // formula to convert celsius to fahrenheit
             console.log("The temperature is " + tmptre + "\xB0 degrees Fahrenheit."); // print to console
    }


