/**
 * Richard Luke
 * Date: 4/22/13
 * Conditionals
 */
 /**     // Video follow along

    //Plans for the weekend
    sunny=false
        if(sunny){
            goToTheBeach();

            if(warmWater){
                wearNewSuit();      // nesting conditional statements
            }
        }else{
            goToTheMovies();
        }


    temp = 82
        if(temp == 70){      // conditional statements = assigns == is equal to comparing values
            goToTheBeach();
        }

    // Conditional Logic
  var oldEnough = false;

  // if the child is old enough print to the console "you can ride!"

  if(oldEnough){
            console.log ("You can ride the coaster");    // code performed if the condition is true (code block)
        }
  console.log("What comes after?");

    // Relational Expressions (Comparing object for decision making)

    var kidHeight = 40;
    var minHeight = 48;

    // if the child is old enough print to the console "you can ride!"
    // if the kid is over 48 inches in height

        if(kidHeight > minHeight){
            console.log ("You can ride the coaster");    // code performed if the condition is true (code block)
        }

// Conditional logic - With an Expression

    var kidHeight = 47;
    var minHeight = 48;
    var sneakerLift = 2;

// if the child is old enough print to the console "you can ride!"
// if the kid is over 48 inches in height

    if(kidHeight + sneakerLift > minHeight){
        console.log ("You can ride the coaster!");    // code performed if the condition is true (code block)
    }


    // If and else choosing between two blocks of code


    var kidHeight = 48;
    var minHeight = 48;


// if the child is old enough print to the console "you can ride!"
// if the kid is over 48 inches in height

    if(kidHeight > minHeight){
        console.log ("You can ride the coaster!");    // code performed if the condition is true (code block)
    } else{
    // if(kidHeight <= minHeight){
        console.log ("Sorry kid, you have some growing to do first!");
    }
  */
    // Relational Operators      - no spaces between operators
    // Greater than > Less than < Greater than or equal to >= Less than or equal to <=
    // compares tw (only two) and resolve to true or false
    // equality == strict equality ==== Inequality !=
    //  5 < 5 false 5 <= 5 true a > b b < a
    // a == b is the same as compares two values a = b replaces values === compares type and values
     // 6 == "6" true 6 === "6" false type string or number
     // Inequality  !=

    var kidHeight = 48;
    var minHeight = 48;

    // if the child is old enough print to the console "you can ride!"
    // if the kid is over 48 inches in height

    if(kidHeight > minHeight){
        console.log ("You can ride the coaster!");    // code performed if the condition is true (code block)
    }   else{
    // if(kidHeight <= minHeight){
        console.log ("Sorry kid, you have some growing to do first!");
    }
    // Logical Operators  compare two true or false values into one true or false
    // in between boolean variable in between comparisons and && or || Exclusive Or ^ (xor) Not !
    // and && boolean pair both be true - truth table true && true true the rest is false

    var budget = 300;
    var iPhonePrice = 199.99;
    var payCheck = 200;

    // if the price of the phone is less then our budget AND if our paycheck is over 300

    if(iPhonePrice < budget){
        console.log("We can buy the phone!");
    }else{
        console.log("No phone for you!!");
    }
     if(payCheck > 300){
         console.log("We can buy the phone!");
     }else{
         console.log("No phone for you!!");
     }

