/**
 * Richard Luke
 * Date: 4/26/13
 * Conditionals_Personal
 * Calculate the difference in coffee made at home versus buying it at Starbucks or McDonalds
 *  Givens:   ~ .69495 cent per 16oz cup at home .70 cents -  .915 cents for 20oz   Disposable cups          .04575 || .04343 cent per 1oz
 *              w/o cup cost 16oz .44495 - 20oz .54 - 1oz .027
 *              20oz reusable coffee cup - $ 15.00 amortized over 1 year of coffee    .000913 cents at 3 cups a day each day for a year
 *              cost goes to  0.02704566210046 cent per 1oz
 *        12 cup coffee maker with 60oz carafe                    3.75 16oz cups - 3 20oz cups
 *        5 - 1/8 cup - 30ml coffee scoop per 60oz carafe   2 Tbs in an 1/8 = 10 Tbs per carafe = 59 grams per carafe = 2.08 ounces
 *        a 12oz bag make 6 carafe      $ 1.25 per carafe     1oz ~ .021 cents       16oz ~ .34          20oz  ~ .42 cent
 *        25 lb/ft^3 * 1 tablespoon in grams in a 5.9 grams in a 1 Tbs fine ground coffee  - (http://www.ico.org/ecology.asp)
 *        http://wiki.answers.com/Q/How_many_grams_of_coffee_are_in_a_tablespoon
 *        Coffee maker $40.00   amortization of coffee maker for one year of coffee brewing at 1 60oz carafe a day
 *        is  approx. 11 cents per carafe      1oz ~ .002 cents     16oz ~ .029 cents         20oz ~ .037 cents
 *        Filters 1 per 60 oz.  $12.00/500 #4 2.4 cent per filter  ~ .0004 cents per 1oz - 16oz ~ .0064 cents - 20oz ~ .008 cents
 *        Water   $102.18/3000 gallons   .034 cents/gal   1oz ~  .0003 cents 16oz ~ .00425 cents  20oz ~  .005 cents cents
 *        Electricity   .137 cent kw/h  coffee pot consumes .585 kWh for 10 minute to brew a carafe of coffee at
 *        .137 kw/h  is approx .08 or 8 cents     1oz ~ .0013 cents 16oz ~ .0213 cents 20oz ~ .026 cents
 *        bag of 12oz ground coffee - $  7.50
 *        16 oz cup with lid ~ .25 cents
 *        20 oz cup with lid ~ .375 cents
 *        32 oz of half and half $ 1.70  2 Tbs per cup - 1/2fl oz per Tbs - 1oz. per cup  3.4 cent per cup  1.7 cents per Tbs
 *        10lb sugar $ 5.60 - 2 tsp per cup - 1 tsp = 4.2g -  .29 ounces of sugar per cup - 1 cent per cup .5 cent per tsp
 *   User Inputs
 *        Size of coffee in ounces
 *        Cost of bag of coffee
 *        size of bag of coffee in ounces
 *        Cost of Starbucks or McDonalds coffee
 *        How many ounces of coffee per day does the user drink
 */                                                                           // assign variable with prompted user input to evaulate where user get coffee
var getCwh = prompt("Enter H if you get coffee at home\n Enter Enter M for McDonalds\xA9\n Enter S for Starbucks\xA9:", "");
if (getCwh === "H" || getCwh === "h") {                                 // evalute user input for home coffee
    var amtSur = Number(prompt("Enter number of tsp of sugar:", ""));     // evalute user input sugar
    var amtHnH = Number(prompt("Enter number of Tbs of Half and Half \n or any Creamer:", ""));  // evalute user input creamer
    var cpHsize = Number(prompt("Enter size of cup in ounces: \n Ex. 16 - 16oz. or 20 - 20oz.", "")); // prompt for user to assign number of ounces in cup
    if (cpHsize === "") {                           // validate cup size input - if blank output message to console
        console.log("Cup size in ounces must be entered:");  // write out to console message that cup size in ounces needs to be entered
    }
    var dyCCh = Number(prompt("Enter number of cups a day:", ""));
    if (dyCCh === "") {                           // validate number of cups a day input - if blank output message to console
        console.log("Number of cups a day must be entered:");  // write out to console message that number of cups a day in ounces needs to be entered
    }
    var cupTpe = prompt("Your using a D - Disposable cup \n or R - Reusable cup?", "");
    if (cupTpe === "") {                           // validate cup type input - if blank output message to console
        console.log("Cup type must be entered:");  // write out to console message that cup type in ounces needs to be entered
    }
    var cosBC = Number(prompt("Enter cost for a bag of coffee: \n for home brewing.", ""));
    if (cosBC === "") {                           // validate cost of bag input - if blank output message to console
        console.log("Cost of coffee bag must be entered:");  // write out to console message that cost of bag in ounces needs to be entered
    }
    var bagSz = Number(prompt("Enter size of coffee bag in ounces: \n for home brewing.", ""));
    if (bagSz === "") {                           // validate bag size input - if blank output message to console
        console.log("Size of coffee bag in ounces must be entered:");  // write out to console message that bag size in ounces needs to be entered
    }
} else {
    if (getCwh === "M" || getCwh === "m" || getCwh === "S" || getCwh === "s") {
        var dyCC = Number(prompt("Enter number of cups a day:", ""));
        if (dyCC === "") {                           // validate number of cups a day input - if blank output message to console
            console.log("Number of cups a day must be entered:");  // write out to console message that number of cups a day needs to be entered
        }
        var venCCst = Number(prompt("Enter size of cup in ounces: \n Ex. 16 - 16oz. or 20 - 20oz.", "")); // prompt for user to assign number of ounces in cup
        if (venCCst === "") {                           // validate cup size input - if blank output message to console
            console.log("Size of cup in ounces must be entered:");  // write out to console message that cup size in ounces needs to be entered
        }
        var venCCst = Number(prompt("Enter the cost of coffee from \n McDonalds\xA9 or Starbucks\xA9"));
        if (venCCst === "") {                           // validate cost of coffee input - if blank output message to console
            console.log("Cost of coffee must be entered:");  // write out to console message that cost of coffee needs to be entered
        }
    } else {
        console.log("Invalid Entry Only H, M or S allowed:");
    }
}
if (getCwh === "M" || getCwh === "m") {
    var vend = "McDonalds\xA9";
} else {
    if (getCwh === "S" || getCwh === "s") {
        var vend = "Starbucks\xA9";
    }
}

// cost difference of buying coffee at McDonalds or Starbucks versus making it at home
var cstPC;
var cstPD;
var cstPY;


// cost of coffee bought at McDonalds or Starbucks
var bghtCC;

// cost of coffee per oz. when brewed at home
var cmCst = .002;
var cofFil = .0004;
var homCCst = ((cosBC / (bagSz / 2.08)) / 60);
var elcCst = .0013;
var waCst = .0003;
var cofCst;
var sugCst = .005;
var hnhCst = 1.7;
var cup16 = .25;
var cup20 = .375;
var cupBig = .45;
var cupRes = (.000913 / cpHsize);
var basCC = (cmCst + homCCst + elcCst + waCst + cofFil);

if (getCwh === "H" || getCwh === "h") {
    if (cupTpe === "R") {
        cofCst = ((cpHsize * basCC + sugCst * amtSur + hnhCst * amtHnH + cupRes) * dyCCh);
    } else {
        if (cpHsize >= 12 || cpHsize <= 16) {
            cofCst = ((cpHsize * basCC + sugCst * amtSur + hnhCst * amtHnH + cup16) * dyCCh);
        } else {
            if (cpHsize >= 20 || cpHsize <= 22) {
                cofCst = ((cpHsize * basCC + sugCst * amtSur + hnhCst * amtHnH + cup20) * dyCCh);
            } else {
                if (cpHsize > 22) {
                    cofCst = ((cpHsize * basCC + sugCst * amtSur + hnhCst * amtHnH + cupBig) * dyCCh);
                }
            }
        }
    }
    console.log("Cost of coffee from Home is: " + cofCst + "\nCost of coffee from " + vend + " is: " + bghtCC);
}
if (getCwh === "M" || getCwh === "m" || getCwh === "S" || getCwh === "s") {
    bghtCC = (dyCC * venCCst);
    cofCst = ((cpHsize * basCC + sugCst * 2 + hnhCst * 2) * dyCCh )
    console.log("Cost of coffee from Home is: " + cofCst + "\nCost of coffee from " + vend + " is: " + bghtCC);
}

