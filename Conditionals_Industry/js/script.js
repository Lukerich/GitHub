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
var mulFac = 1;
var surChr = 0;
var shpPrc = 0.00;
var adrss = new Array();   // array to hold the users address - validation on f-name, l-name, address, city, stat, zip code but not
// second address/apt
var shpCst = new Array();  // array to hold cost of ship method - regardless of location in Continental US, except Alaska -
// Alaska and Hawaii are surcharged additional $15.00
shpCst["Std"] = 10;
shpCst["day2"] = 15;
shpCst["day1"] = 20;
shpCst["WkHol"] = 25;
shpCst["SuCh"] = 15;

// Prompt for number of items to ship - if 1-2 shipping price is the array value
// if 3-5 shipping price is 1.5 * array value - if 6-10 shipping price is 2.5 * array
// above 10 users is alerted to call customer service for cost.
var noItm = Number(prompt("Enter number of Items: ", ""));
if (!noItm >= 1) {
    console.log("Number of Items must be entered:");
} else {
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
adrss[0] = prompt("Enter First Name: ", "");
// if (adrss[0] = "") {                           // validate first name input - if blank output message to console
//    console.log("First Name must be entered:");
// }
adrss[1] = prompt("Enter Last Name: ", "");
if (adrss[1] = "") {                           // validate last name input - if blank output message to console
    console.log("Last Name must be entered:");
}
adrss[2] = prompt("Enter Address: ", "");
if (adrss[2] = "") {                         // validate address input - if blank output message to console
    console.log("Address must be entered:");
}
adrss[3] = prompt("Enter Address2: ", "");

adrss[4] = prompt("Enter City: ", "");
if (adrss[4] = "") {                         // validate city input - if blank output message to console
    console.log("City must be entered:");
}
adrss[5] = prompt("Enter State: ", "");
if (adrss[5] = "") {                        // validate state input - if blank output message to console
    console.log("State must be entered:");
}else {
    if (adrss[5] === "HI" || adrss[5] === "AK"){   // assigns surcharge to suChr to be used in shpPrc calculation
        surChr = shpCst["SuCh"];
    }
}
adrss[6] = prompt("Enter Zip Code: ", "");
if (adrss[6] = "") {                        // validate zip code input - if blank output message to console
    console.log("Zip Code must be entered:");
}


// Assign variable for shipping method - standard (3-5), 2nd business day, overnight, weekend & holidays
// used as validation - must choose one method
var shpMth = prompt("Enter Shipping method: \n Std, 2day, 1day, WkHol", "");
if (shpMth === "Std") {
    console.log(mulFac + "\n" + shpCst["Std"] + "\n" + surChr);
    shpPrc = mulFac * shpCst["Std"] + surChr;
} else {
    if (shpMth === "2day") {
        shpPrc = mulFac * shpCst["2day"] + surChr;
    } else {
        if (shpMth === "1day") {
            shpPrc = mulFac * shpCst["1day"] + surChr;
        } else {
            if (shpMth === "WkHol") {
                shpPrc = mulFac * shpCst["WkHol"] + surChr;
            }else {
                console.log("Shipping method must be entered:");
            }
        }
    }
}
console.log(adrss[0] + "\n" + adrss[1] + "\n" + adrss[2] + "\n" + adrss[3] + "\n" + adrss[4] + " " + adrss[5] + ", " + adrss[6] + "\n" + shpMth + "\n" + "$" + shpPrc);





