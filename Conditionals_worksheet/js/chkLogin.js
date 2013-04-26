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

    var usrnm = prompt("Enter Username: ", "");
    var psswd = prompt("Enter password: ", "");

    var usrNam = new Array();


        usrNam[0] = new Array();
        usrNam[0][0] = "bill";
        usrNam[0][1] = "123";
        usrNam[0][2] = "bob";
        usrNam[0][3] = "2we";
        usrNam[0][4] = "sam";
        usrNam[0][5] = "456";

            if (psswd === usrNam[0][1,2,5]){
                (usrnm === usrNam[0][0,2,4])? console.log("Welcome, " + usrnm + "!") : console.log("User not found. Try again");
            }else{
                console.log("Password does not match our records. ");
            }
