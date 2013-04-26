/**
 * Richard Luke
 * Date: 4/22/13
 * Tire Pressure I
 * Conditionals_worksheet
 *
 * Front tires need to be the same pressure - back tires need to be the same pressure - front to back can be different
 * Use a single conditional that would determine if the tires of a given car are up to spec.
 * Given:
 *      Pressure for each tire of the car (in psi) in an array
 * Result to Print Out:
 *      "The tires pass spec!" or "Get your tires checked out!"
 */

        var tparry = new Array();    // Array to hold users entry of tire pressure
                                      // Tire pressure array input by user
        tparry[0] = Number(prompt("Enter Front Driver tire pressure", 30));
        tparry[1] = Number(prompt("Enter Front Passenger side tire pressure", 30));
        tparry[2] = Number(prompt("Enter Rear Driver side tire pressure", 32));
        tparry[3] = Number(prompt("Enter Rear Passenger side tire pressure", 32));
                               //if and ternaries statements using single conditional operator
                    if (tparry[0] === tparry[1]){
                        (tparry[2] === tparry[3]) ? console.log("The tires pass spec!") : console.log("Get your tires checked out!");
                    } else{
                        console.log("Get your tires checked out!");       // print to console
                    }
