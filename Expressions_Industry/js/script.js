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

        var webAlen = prompt ("Enter length in pixels of page area \n ex. iphone 310 px", "1"); // Prompt for web page area length in pixels
        var webAdep = prompt("Enter depth in pixels of page area \n ex. iphone 352 px", "1"); // Prompt for web page area depth in pixels
        var charSze = prompt("Enter size of characters in pixels \n ex. 12pt is 16 px", "1"); // Prompt for character size in pixels

            var numChr = webAlen * webAdep / charSze ;

            // Output the number of characters that will fit in the defined web page area to the console
    console.log("The number of characters you can fit in your web page area is " + [numChr]);
            // Output the number of characters that will fit in the defined web page area to an Alert box
    alert("The number of characters you can fit in your web page area is " + [numChr]);


