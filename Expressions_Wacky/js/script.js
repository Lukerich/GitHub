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

    var grtStr = prompt("What is your name?", "Igor?");
    var coffin = prompt ("Enter the dimensions of the coffin \n in cubic feet \n ex. a 6' tall medium build \n person would need \n a coffin of 66.5 cubic feet", "66.5 ft\xB3");
    var burSte = prompt ("Enter the dimensions of the burial site in cubic feet \n ex. a coffin of 66.5 ft \xB3 \n would need a site of 266 ft\xB3");
    var shvWgt = prompt ("Enter the weight in pounds each shovel full will be", "8lb");

            var numshvFl = .08 / burSte +