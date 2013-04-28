/**
 * Richard Luke
 * Date: 4/22/13
 * Conditional_Industry
 * Choose the shipping method and calculate cost  - validate complete address and shipping method selection
 *  Given:
 *      Shipping methods
 *      Cost of shipping
 *      Array to hold address
 *  Inputs:
 *       Address
 *       Shipping method
 *       number of items
 *  Results to print to console
 *       Address
 *       Shipping method
 *       Cost
 *
 */
var mulFac = 1; // declared variable with default value for multiple factor - used for number of items
var surChr = 0; // declared variable with default value to surcharge if state is HI or AK
var shpPrc = 0.00; // declared variable to hold shipping price result of calculation
var adrss = [7];   // array to hold the users address - validation on f-name, l-name, address, city, stat, zip code but not
// second address/apt
var shpCst = [5];  // array to hold cost of ship method - regardless of location in Continental US, except Alaska -
// Alaska and Hawaii are surcharged additional $15.00
shpCst["Std"] = 10;
shpCst["2day"] = 15;
shpCst["1day"] = 20;
shpCst["WkHol"] = 25;
shpCst["SuCh"] = 15;

// Prompt for number of items to ship - if 1-2 shipping price is the array value
// if 3-5 shipping price is 1.5 * array value - if 6-10 shipping price is 2.5 * array
// above 10 users is alerted to call customer service for cost.
var noItm = Number(prompt("Enter number of Items: ", ""));
if (!noItm >= 1) {                                    // validation that a number of 1 - 10 has been entered
    console.log("Number of Items must be entered:"); // message to users to enter mandatory number of items
} else {                                              // assigning multiplier to variable to use in calculation
    if (noItm <= 2) {
        mulFac = 1;
    } else {
        if (noItm > 2 && noItm <= 5) {
            mulFac = 1.5;
        } else {
            if (noItm > 5 && noItm <= 10) {
                mulFac = 2.5;
            } else {
                console.log("For quantities greater then 10,\n please call customer service for shipping costs");
            }
        }
    }
}

// Assigning address array user input values
adrss[0] = prompt("Enter First Name:", "");       // prompt for user input to assign array adrss index 0
if (adrss[0] === "") {                           // validate first name input - if blank output message to console
    console.log("First Name must be entered:");  // write out to console message that zip code needs to be entered
}
adrss[1] = prompt("Enter Last Name:", "");        // prompt for user input to assign array adrss index 1
if (adrss[1] === "") {                           // validate last name input - if blank output message to console
    console.log("Last Name must be entered:");  // write out to console message that zip code needs to be entered
}
adrss[2] = prompt("Enter Address:", "");        // prompt for user input to assign array adrss index 2
if (adrss[2] === "") {                         // validate address input - if blank output message to console
    console.log("Address must be entered:");   // write out to console message that zip code needs to be entered
}
adrss[3] = prompt("Enter Address2: ", "");     // prompt for user input to assign array adrss index 3

adrss[4] = prompt("Enter City:", "");           // prompt for user input to assign array adrss index 4
if (adrss[4] === "") {                         // validate city input - if blank output message to console
    console.log("City must be entered:");      // write out to console message that zip code needs to be entered
}
adrss[5] = prompt("Enter State:", "");          // prompt for user input to assign array adrss index 5
if (adrss[5] === "HI" || adrss[5] === "AK") {   // assigns surcharge to suChr to be used in shpPrc calculation
    surChr = shpCst["SuCh"];
} else{
    if (adrss[5] === "") {                        // validate state input - if blank output message to console
        console.log("State must be entered:");   // write out to console message that zip code needs to be entered
    }
}
adrss[6] = prompt("Enter Zip Code:", "");      // prompt for user input to assign array adrss index 6
if (adrss[6] === "") {                        // validate zip code input - if blank output message to console
    console.log("Zip Code must be entered:");  // write out to console message that zip code needs to be entered
}


// Assign variable for shipping method - standard (3-5), 2nd business day, overnight, weekend & holidays
// used as validation - must choose one method
var shpMth = prompt("Enter Shipping method: \n Std, 2day, 1day, WkHol", "");  // assigns user input for shipping method
if (shpMth === "Std") {                                                     // if - else statement for shipping method input
    shpPrc = mulFac * shpCst["Std"] + surChr;                               // calculation of final Std Shipping Price/Cost
} else {                                                                   // continuation of if else
    if (shpMth === "2day") {                                              // if else test for 2day shipping method
        shpPrc = mulFac * shpCst["2day"] + surChr;                        // calculation of final Std Shipping Price/Cost
    } else {                                                               // continuation of if else
        if (shpMth === "1day") {                                           // if else test for 1day shipping method
            shpPrc = mulFac * shpCst["1day"] + surChr;                    // calculation of final 1day Shipping Price/Cost
        } else {                                                          // continuation of if else
            if (shpMth === "WkHol") {                                      // if else test for WkHol shipping method
                shpPrc = mulFac * shpCst["WkHol"] + surChr;               // calculation of final WkHol Shipping Price/Cost
            } else {                                                      // continuation of if else
                console.log("Shipping method must be entered:");          // write out to console message if shipping method left blank
            }
        }
    }
}
             //final console message of shipping address, shipping method and price
console.log(adrss[0] + " " + adrss[1] + "\n" + adrss[2] + "\n" + adrss[3] + "\n" + adrss[4] + " " + adrss[5] + ", " + adrss[6] + "\n" + "Shipping Method is " + shpMth + "\n" + "Cost of Shipping " + "$" + shpPrc);





