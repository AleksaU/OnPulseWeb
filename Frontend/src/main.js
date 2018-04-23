
$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');
    var Pizza_Order = require('./pizza/PizzaToOrder');
    var Maps = require('./Maps');


    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();
    Pizza_Order.initialise();

    google.maps.event.addDomListener(window, 'load', Maps.initialize);
});