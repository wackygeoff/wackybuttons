

function calculate_ship_date(inpdate){
var shipday = inpdate || new Date();//date inputted otherwise use todays date

if(!inpdate){//if no date inputted as the shipping date, assume shipping tomorrow
shipday.setDate(shipday.getDate() + 1);//set to next day
}
//then check if the day we set falls on a day that cannot be shipped out
//if so change to the day after
while(shipday.getDay() == 6 || shipday.getDay() == 0){ // || shipday == holiday
shipday.setDate(shipday.getDate() + 1);
}

/*
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
*/


//alert("we are shipping on:" + shipday);
return shipday;
}


function calculate_delivery_date(transitdays, shipdate){
//takes the number of days in transit as an integer

var deliveryday = shipdate || calculate_ship_date();//use date inputted as ship date otherwise use tomorrows date

for(i = 1; i <= transitdays; i++){//loop for each transit day

//set the day to the next day
deliveryday.setDate(deliveryday.getDate() + 1);//add a day
//then check if the day we set falls on a day that cannot be delivered
//if so change to the day after
while(deliveryday.getDay() == 6 || deliveryday.getDay() == 0){ // || shipday == holiday
deliveryday.setDate(deliveryday.getDate() + 1);
}

/*
//if(){//if deliveryday == holiday
//deliveryday.setDate(deliveryday.getDate() + 1);
//}
if(deliveryday.getDay() == 6){//if shipday == saturday
deliveryday.setDate(deliveryday.getDate() + 1);
}
if(deliveryday.getDay() == 0){//if shipday == sunday
deliveryday.setDate(deliveryday.getDate() + 1);
}
//if(){//if deliveryday == holiday - check for holiday again in case pushed to monday and monday is a holiday
//deliveryday.setDate(deliveryday.getDate() + 1);
//}
*/

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
calculateTTime();

}

function evalPayment(){
var specialcase;
var payingval = document.timecalc.paying.value;
var curtime = new Date();
var curhours = curtime.getUTCHours()
if(payingval == -1 && curhours < 16 && curhours > 11){
specialcase = "by 12:00 PM Noon EST Today! Call us at 585-267-7670 to get your order scheduled.";
}
else if(payingval == 7){
specialcase = "This quotation assumes your payment will take 1 week (7 days) for us to receive your payment in the mail.";
}
else{
specialcase = "before 6:00 AM Eastern Standard Time.";
}
return new Array(payingval, specialcase);
}



function evalQty(){
var specialcase;
var qtyval = document.timecalc.qty.value;
return new Array(qtyval, specialcase);
}



function evalShipping(){
var specialcase;
var shipmethval = document.timecalc.shipping.value;


if(shipmethval == 5 || shipmethval == 10 || shipmethval == 21){
specialcase = "This quotation assumes minimal customs delays for international shipments. Delays at customs could cause your package to be received later than expected.";
}

return new Array(shipmethval, specialcase);
}




function translateWeekday(inpdayintval){
var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
return d_names[inpdayintval];
}




function calcTimeLeftCounter(){


var curtime = new Date();
//figureout current time
var curhours = curtime.getUTCHours(); //0 - 23
var curminutes = curtime.getUTCMinutes(); //0 - 59
//11:59 PM is 3:59 AM GMT - for midnight

//default
//6:00 AM EST is 10:00 AM GMT
var cutofftime = 10;

//check for special case
//if cc by phone, shipping to US, 1-500 buttons, Next Day Air
//12 pm is 4pm GMT (16 hundred hours GMT)
if(document.timecalc.paying.value == -1 && document.timecalc.qty.value == 1 && document.timecalc.shipping.value == 1 && document.timecalc.country.value == "United States of America" && curhours < 16 && curhours > 11){
var cutofftime = 16;
}

if(curhours > cutofftime){
hoursleft = ((24-curhours) + cutofftime) - 1;
minsleft = 60 - curminutes;
}else{
hoursleft = (cutofftime - curhours) - 1;
minsleft = 60 - curminutes;
}




$('#timeleft').html(hoursleft + " hours, " + minsleft + " minutes");

setTimeout(calcTimeLeftCounter, 30000); //every 30 seconds

}




function calculateTTime(){

//--evaluate the form fields submitted--
paymentArr = evalPayment();
productionArr = evalQty();
shippingArr = evalShipping();

//--figure out delivery date--
paymentTime = paymentArr[0];
productionTime = productionArr[0];
shippingTime = shippingArr[0];

transitTime = eval(paymentTime) + eval(productionTime) + eval(shippingTime);

//alert(transitTime);

deliverydate = calculate_delivery_date(transitTime, new Date()); //ship today
//--end figure out delivery date--

//--include any special cases--
var otherfineprinttext = "";
var paymentdetailstext = "";
paymentdetailstext = paymentArr[1];
if(productionArr[1]){
otherfineprinttext = "<li>" + productionArr[1] + "</li>";
}
if(shippingArr[1]){
otherfineprinttext = otherfineprinttext + "<li>" + shippingArr[1] + "</li>";
}

$('#receivewhen').html(translateWeekday(deliverydate.getDay()));
$('#receivedate').html((deliverydate.getMonth() + 1) + "/" + deliverydate.getDate() + "/" + deliverydate.getFullYear());
$('#paymentdetails').html(paymentdetailstext);
$('#otherfineprint').html(otherfineprinttext);

calcTimeLeftCounter();

}


window.addEventListener("load", function(){
//set defaults
calculateTTime();
});