/**
 * Richard Luke
 * Date: 4/30/13
 * Conditionals_worksheet
 * Circumference                2πr OR πd
 * Calculate the circumference of a circle.
 * Parameter(s) for function:
 * Radius of the circle or Diameter of the circle
 * Return:
 * Circumference of the circle
 * Result to print to the console:
 * “The circumference of the circle is X”;
 */
var total;
var funSel = prompt("To calculate Circumference of a circle \n Enter R for radius or D for diameter.", "");
if (funSel === "R" || funSel === "r") {
    total = cirCalc2(Number(prompt("Enter Radius of circle to calculate it's circumference", "")));
    function cirCalc2(r) {
        var cirC = 2 * 3.14 * r;
        return cirC;
    }

} else {
    if (funSel === "D" || funSel === "d") {
        total = cirCalc1(Number(prompt("Enter Radius of circle to calculate it's circumference", "")));
        function cirCalc1(d) {
            var cirC = 3.14 * d;
            return cirC;
        }
    }
}
console.log("The circumference of the circle is " + total);

