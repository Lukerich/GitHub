/**
 * Richard Luke
 * Date: 4/21/13
 * Expressions Expressions_Personal
 */
 //  The fuel cost of trip

// Three variables are
    // Distance in miles - miles
    // Price of fuel per gallon - ppg
    // Miles per gallon of vehicle - mpg

    var miles = prompt ("Enter the Distance in Mile", "1"); // Prompt for trip distance
    var ppg = prompt ("Enter the Price of fuel/gallon", "1"); // Prompt for price per gallon of fuel
    var mpg = prompt("Enter the vehicle's MPG", "1");


        var trpExp = (miles / mpg) * ppg; // cost of fuel for trip


   // Output the fuel cost of the trip
console.log("The fuel will cost " + "$" + [trpExp] + " for your trip");
alert("The fuel will cost " + "$" + [trpExp] + " for your trip");