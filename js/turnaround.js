

function calculate_ship_date(inpdate){
var shipday = inpdate || new Date();//date inputted otherwise use todays date

if(!inpdate){//if no date inputted as the shipping date, assume shipping tomorrow
shipday.setDate(shipday.getDate() + 1);//set to next day
}

//if(){//if shipday == holiday
//shipday.setDate(shipday.getDate() + 1);
//}
if(shipday.getDay() == 6){//if shipday == saturday
shipday.setDate(shipday.getDate() + 1);
}
if(shipday.getDay() == 0){//if shipday == sunday
shipday.setDate(shipday.getDate() + 1);
}
//if(){//if shipday == holiday - check for holiday again in case pushed to monday and monday is a holiday
//shipday.setDate(shipday.getDate() + 1);
//}
//alert("we are shipping on:" + shipday);
return shipday;
}


function calculate_delivery_date(transitdays, shipdate){
//takes the number of days in transit as an integer

var deliveryday = shipdate || calculate_ship_date();//use date inputted as ship date otherwise use tomorrows date

for(i = 1; i <= transitdays; i++){//loop for each transit day

deliveryday.setDate(deliveryday.getDate() + 1);//add a day

//if(){//if shipday == holiday
//deliveryday.setDate(deliveryday.getDate() + 1);
//}
if(deliveryday.getDay() == 6){//if shipday == saturday
deliveryday.setDate(deliveryday.getDate() + 1);
}
if(deliveryday.getDay() == 0){//if shipday == sunday
deliveryday.setDate(deliveryday.getDate() + 1);
}
//if(){//if shipday == holiday - check for holiday again in case pushed to monday and monday is a holiday
//deliveryday.setDate(deliveryday.getDate() + 1);
//}
//alert("loop " + i + " : " + deliveryday);
}

return deliveryday;
}




function changeCountry(){

if(document.timecalc.country.value == "United States of America"){
shippingtext = ' \
<option value="1" selected="selected">UPS Next Day Air</option> \
<option value="2">USPS Priority Mail Express</option> \
<option value="2">UPS 2nd Day Air</option> \
<option value="3">UPS 3 Day Select</option> \
<option value="3">USPS Priority Mail</option> \
<option value="6">UPS Ground</option> \
<option value="7">USPS First Class Mail</option> \
<option value="7">Wacky Saver Shipping</option> \
';

}else{
shippingtext = ' \
<option value="5" selected="selected">USPS Priority Mail Express International</option> \
<option value="10">USPS Priority Mail International</option> \
<option value="21">USPS First Class Mail International</option> \
';

}

$('#shipping').html(shippingtext);

//after options get changed calculate the time
calculateTime();

}

function evalPayment(){
return document.timecalc.paying.value;
}

function evalQty(){
return document.timecalc.qty.value;
}

function evalShipping(){
return document.timecalc.shipping.value;
}


function calculateTime(){
paymentTime = evalPayment();
shippingTime = evalShipping();
productionTime = evalQty();

transitTime = eval(paymentTime) + eval(shippingTime) + eval(productionTime);

//alert(transitTime);

deliverydate = calculate_delivery_date(transitTime, new Date()); //ship today

$('#receivewhen').html();
$('#receivedate').html((deliverydate.getMonth() + 1) + "/" + deliverydate.getDate() + "/" + deliverydate.getFullYear());
$('#timeleft').html();
$('#paymentdetails').html();
$('#otherfineprint').html();

}


window.addEventListener("load", function(){
//set defaults
calculateTime();
});