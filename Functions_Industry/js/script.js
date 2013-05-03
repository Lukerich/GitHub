/**
 * Richard Luke
 * Date: 5/02/13
 * Functions_Industry
 * If production is line A then
 * bonus on production quota's
 * if production is > 1000
 * If Production line B then
 * bonus on production quota's
 * if production is > 500
 *
 */

var bonus;

var prdVal = [];
prdVal[0] = Number(prompt("Enter shift production count:", ""));
prdVal[1] = prompt("Enter Line A or B:", "");

bonus = lowPrd(prdVal[0], prdVal[1]);

if (prdVal[0] > 0) {
    function lowPrd(a, b) {
        var vyLB = (a < 500);
        var lowB = (a <= 1000);
        var medB = (a > 1000);
        var lnA = (b == "A" || b == "a");
        var lnB = (b == "B" || b == "b");
        if (lowB && lnA || vyLB && lnB) {
            console.log("Sorry no bonus tonight");
        } else {
            if (lowB && lnB || medB && lnA){
                console.log("Everyone gets a bonus!");
                var bonVal = a >= 1000 ? a * .02 : a * .01;
                console.log("Bonus is $" + bonVal);
            }
        }
    }
} else {
    console.log("You must enter a number greater then 0 and a Line letter:");

}



