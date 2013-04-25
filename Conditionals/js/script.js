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
    // in between boolean variable in between comparisons and && or || Exclusive Or ^ (xor) Not !  a! = b !(a===b) a<b !(a<b)
    // and && boolean pair both be true - truth table true && true true the rest is false
    // a === b ===c doesn't work a === b && b === c works for both pairs true all the same value


    var budget = 100;
    var iPhonePrice = 199.99;
    var wonLotto = true;

    // if the price of the phone is less then our budget AND if our paycheck is over 300

    if(iPhonePrice < budget || wonLotto){       // only between relational expressions or something that is boolean
        console.log("We can buy the phone!");
    }else{
        console.log("No phone for you!!");
    }


    // Ternaries decision making on one line

    if(condition){
        do if true;
    }else{
        do if false;
    }

        (condition) ? do if true : do if false;


    var gpa = 48;

    // if the gpa is over the min 2.0 score, the student can graduate

    if(gpa > 2.0){
        console.log("You can graduate!");
    }else{
        console.log("GPA is too low!");
    }

    var gpa = 48;

        (gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");
  */

    var age = 11;
    var book;

     // It the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
        if(age < 10){
            book = "Green Eggs and Ham";
        }else{
            book = "The Time Machine";
        }