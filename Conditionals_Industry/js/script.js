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
}else {
    if (noItm === [1-2]){
        var mulFac = 1;
    }else {
        if (noItm === [3-5]){
            var mulFac = 1.5;
        }else {
            if (noItm === [6-10]){
                var mulFac = 2.5;
            }else {
                console.log("For quantities greater then 10,\n please call customer service for shipping costs");
            }
        }
    }
}

// Assigning address array user input values
adrss[0] = prompt("Enter First Name: ", "");
if (!noItm >= 1) {
    console.log("Number of First Name must be entered:");
}
adrss[1] = prompt("Enter Last Name: ", "");
if (!noItm >= 1) {
    console.log("Number of Last Name must be entered:");
}
adrss[2] = prompt("Enter Address: ", "");
if (!noItm >= 1) {
    console.log("Number of Items must be entered:");
}
adrss[3] = prompt("Enter Address2: ", "");

adrss[4] = prompt("Enter City: ", "");
if (!noItm >= 1) {
    console.log("Number of Items must be entered:");
}
adrss[5] = prompt("Enter State: ", "");
if (!noItm >= 1) {
    console.log("Number of Items must be entered:");
}
adrss[6] = prompt("Enter Zip Code: ", "");
if (!noItm >= 1) {
    console.log("Number of Items must be entered:");
}



// Assign variable for shipping method - standard (3-5), 2nd business day, overnight, weekend & holidays
// used as validation - must choose one method
var shpMth = prompt("Enter Shipping method: \n Std, 2day, 1day, WkHol", "");
if (shpMth === "Std") {
    var shpPrc = mulFac * shpMth["Std"];
    (adrss[5] !== "HI" || adrss[5] !== "AK" ) ? console.log("Shipping Cost $" + shpPrc ) : console.log("Shipping Cost $" + (shpPrc + 15));
} else {
    if (shpMth === "2day") {
        var shpPrc = mulFac * shpMth["2day"];
        (adrss[5] !== "HI" || adrss[5] !== "AK" ) ? console.log("Shipping Cost $" + shpPrc ) : console.log("Shipping Cost $" + (shpPrc + 15));
    } else {
        if (shpMth === "1day") {
            var shpPrc = mulFac * shpMth["1day"];
            (adrss[5] !== "HI" || adrss[5] !== "AK" ) ? console.log("Shipping Cost $" + shpPrc ) : console.log("Shipping Cost $" + (shpPrc + 15));
        } else {
            if (shpMth === "WkHol") {
                var shpPrc = mulFac * shpMth["WkHol"];
                (adrss[5] !== "HI" || adrss[5] !== "AK" ) ? console.log("Shipping Cost $" + shpPrc ) : console.log("Shipping Cost $" + (shpPrc + 15));
            }
        }
    }
}





