/**
 * Richard Luke
 * Date: 4/30/13
 * Conditionals_worksheet
 * Circumference                2πr OR πd
 * Calculate the circumference of a circle.
 * Parameter(s) for function:
 * Radius of the circle
 * Return:
 * Circumference of the circle
 * Result to print to the console:
 * “The circumference of the circle is X”;
 */

var funSel = prompt("To calculate Circumference of a circle \n Enter R for radius or D for diameter.", "");
    if (funSel === "R" || funSel === "r"){
         cirCalc2(Number(prompt("Enter Radius of circle to calculate it's circumference", "")));
        function cirCalc2(r){
            var cirCalc2 = 2 * π * r;
            return cirCalc2;
        }
        cirCalc2()
        console.log("The circumference of the circle is " +  cirCalc2);
    } else {
        if (funSel === "D" || funSel === "d"){
            cirCalc1(Number(prompt("Enter Radius of circle to calculate it's circumference", "")));
            function cirCalc1(d){
                var cirCalc1 = π * d;
                return cirCalc1;
            }
            cirCalc1()
            console.log("The circumference of the circle is " +  cirCalc1);
        }
    }


