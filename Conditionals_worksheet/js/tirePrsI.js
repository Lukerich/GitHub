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
        fdt = Number(prompt("Enter Front Driver side tire pressure", 30));
        fdt = Number(prompt("Enter Front Passenger side tire pressure", 30));
        fdt = Number(prompt("Enter Rear Driver side tire pressure", 30));
        fdt = Number(prompt("Enter Rear Passenger side tire pressure", 30));

            var tparry = new Array();
            tparry[0] = 30;
            tparry[1] = 30;
            tparry[2] = 32;
            tparry[4] = 32;