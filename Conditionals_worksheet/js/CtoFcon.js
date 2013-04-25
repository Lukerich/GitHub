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
 */
    var degTmp = Number(prompt("Enter the temperature", 32));
    var tmptre;
    degUnt = prompt("Enter the Unit: (C = Celsius F = Fahrenheit)", ("F"));

    if (degUnt = ("F")){
            tmptre = degTmp * (9/5 + 32);
            console.log("The temperature is " + [tmptre] + " degrees Celsius.")
    }else{
             tmptre = (degTmp - 32) * 5/9;
             console.log("The temperature is " + [tmptre] + " degrees Fahrenheit.")
    }

