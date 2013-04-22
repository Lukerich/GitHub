/**
 * Richard Luke
 * Date: 4/21/13
 * Expressions - Expressions_Wacky
 */
           // To calculate the number of shovels full of dirt to bury a coffin

/** Input prompts
 *  Greeting with text string
 *  coffin size in area (cubic feet)
 *  burial site in area (cubic feet)
 *  shovel full of dirt in pounds. Assuming soil is about 85-150 pounds per cubic ft. depending on soil type and moisture content and is averaged at 100 pounds per cubic ft.
 */

    var grtStr = prompt("What is your name?", "Igor?"); // String variable for user name
    // Input prompt for coffin size
    var coffin = prompt ("Enter the dimensions of the coffin \n in cubic feet \n ex. a 6' tall medium build \n person would need \n a coffin of 66.5 cubic feet", "66.5");
    // Input prompt for burial site size
    var burSte = prompt ("Enter the dimensions of the burial site in cubic feet \n ex. a coffin of 66.5 ft \xB3 \n would need a site of 266 ft\xB3", "266");
    // Input prompt for weight of a shovel full of soil
    var shvWgt = prompt ("Enter the weight in pounds each shovel full will be", "8");

            // Calculation for the area in cubic ft. of a shovel full of soil based on the soil weighing 100 lb per cubic ft.
            var shvAre = shvWgt / 100;
            // Calculation of the number of shovels full of soil to dig the burial site and fill it back in after the coffin is put in
            var numshvFl = (burSte / shvAre) * 2 - (coffin / shvAre);

// Console output for results
    console.log("Luke's mortuary - you stab em we slab em - some go to heaven - some go to hello " + [grtStr] + " \n the number of shovels full of dirt needed \n to bury the coffin is " + [numshvFl]);
// Alert box output for results
    alert("Luke's mortuary - you stab em we slab em - some go to heaven - some go to hello " + [grtStr] + " \n the number of shovels full of dirt needed \n to bury the coffin is " + [numshvFl]);
