/**
 * Richard Luke
 * Date: 5/02/13
 * Functions_Industry
 * If production is line A then
 * bonus on production quota's
 * if production is 1000 then bonus is .01 each
 * if production is 1500 then bonus is .02 each
 * if production is 2000 then bonus is .03 each
 * if production is less then 1000 then no bonus
 * If production is line B then
 * bonus on production quota's
 * if production is 1000 then bonus is .02 each
 * if production is 1500 then bonus is .03 each
 * if production is 2000 then bonus is .05 each
 * if production is less then 500 then no bonus
 */

var bonus;

var prdVal = [];
prdVal[0] = Number(prompt("Enter shift production count:", ""));
prdVal[1] = prompt("Enter Line A or B:", "");

bonus = lowPrd(prdVal[0], prdVal[1]);

if (prdVal[0] > 0) {
    function lowPrd(a, b) {
        var vyLB = (a < 500)
        var lowB = (a < 1000 && a >= 500);
        var medB = (a >= 1000 && a < 1500);
        var hghB = (a >= 1500 && a < 2000);
        var vyHB = (a >= 2000);
        var lnA = (b == "A" || b == "a");
        var lnB = (b == "B" || b == "b");
        if (lowB && lnA || vyLB && lnB) {
              console.log("Sorry no bonus tonight");
        } else {
        if (lowB && lnB){
            console.log("Line B gets bonus");
        }
            }
        }
    }



