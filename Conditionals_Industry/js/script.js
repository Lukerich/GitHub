/**
 * Richard Luke
 * Date: 4/22/13
 * Conditional_Industry
 * Choose the shipping method and calculate cost - validate complete address and shipping method selection
 *  Given:
 *      Shipping methods
 *      Cost of shipping
 *      Array to hold address
 *  Inputs:
 *       Address
 *       Shipping method
 *       Confirmation
 *  Results to print to console
 *       Address
 *       Shipping method
 *       Cost
 *
 */
        var shpMth = new Array();  // array to hold shipping methods - standard (3-5), 2nd business day, overnight, weekend & holidays
                                   // used as validation - must choose one method
        var adrss = new Array();   // array to hold the users address - validation on f-name, l-name, street, city, stat, zip code but not
                                   // second address/apt
        var shpCst = new Array();  // array to hold cost of ship method - regardless of location in Continental US, except Alaska -
                                   // Alaska and Hawaii are surcharged additional $15.00
            shpCst[Std][0] = 10;
            shpCst[Twoday][0] = 15;
            shpCst[OvN][0] = 20;
            shpCst[WndHol][0]= 25;
            shpCst[SuCh][0]= 15;
