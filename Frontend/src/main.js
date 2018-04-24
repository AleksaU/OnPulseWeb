
$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/Patients');
    var PizzaCart = require('./pizza/unUse1');
    var Pizza_List = require('./Patient_List');
    var Pizza_Order = require('./pizza/toAddRecip');
    var Maps = require('./Maps');


    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();
    Pizza_Order.initialise();

    google.maps.event.addDomListener(window, 'load', Maps.initialize);
});