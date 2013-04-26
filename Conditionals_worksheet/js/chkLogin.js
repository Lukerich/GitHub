/**
 * Richard Luke
 * Date: 4/22/13
 * Check the Login
 * Conditionals_worksheet
 * validate correct user and password. If username doesn't match use one message
 * if password doesn't match use a different message
 * Only one error message should appear
 * Given:
 *      Username entered by user
 *      Password entered by user
 *      Correct username
 *      Correct password
 * Results to print out:
 *      "Welcome, (place their username here)!" - if the username and password are correct
 *      "User not found. Try again." - if username does not match
 *      "Password does not match our records." - if password does not match but username does
 */

    var usrnm = prompt("Enter Username: ", "");      //variable assigned to response from user for username
    var psswd = prompt("Enter password: ", "");      //variable assigned to response from user for password

    var usrNam = new Array();            // An array for the username and password


        usrNam[0] = new Array();       // array defined
        usrNam[0][0] = "bill";
        usrNam[0][1] = "123";

                        // if - else statement to evaluate user input by using strict equality relational operators and array values
            if (psswd === usrNam[0][1]){
                                            //  Ternaries decision making on one line
                (usrnm === usrNam[0][0])? console.log("Welcome, " + usrnm + "!") : console.log("User not found. Try again");
            }else{
                console.log("Password does not match our records. ");
            }
