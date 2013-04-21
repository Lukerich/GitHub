/**
 * Richard Luke
 * Date: 4/21/13
 * Expressions Expressions_Industry
 */
   //     Calculating the number of characters that can fit on a area of a web page.
    //      Three variable inputs are needed
        // Area of web page in number of pixels length
        // Area of web page in number of pixels depth
        // Size of characters in pixels

        var webAlen = prompt ("Enter length in pixels of page area", "1"); // Prompt for web page area length in pixels
        var webAdep = prompt("Enter depth in pixels of page area", "1"); // Prompt for web page area depth in pixels
        var charSze = prompt("Enter size of characters in pixels", "1"); // Prompt for character size in pixels

            var numChr = webAlen * webAdep / charSze ;

    console.log("The number of characters you web page area can hold is " + [numChr]);
    alert()
