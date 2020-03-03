
function myDelivery(name,location,){
    var name=document.getElementById("name").value
    var location=document.getElementById("location").value
    alert("Hello " + name + " we have received your order and will be delivered to you " + location + " in an hour thankyou for chosing home of pizzerians your delivery cost is 450ksh")
}

function myOrder(crust,toppings){
    var crust=document.getElementById("crust").value
    var toppings=document.getElementById("toppings").value
    alert("Hello your order has been received of " + crust + " and " + toppings + " your total cost is 1500Ksh for delivery fill the delivery form thankyou" )
}