
//--The following functions generate the content of the turnaround page--
//--by adding or removing from the arays below will control how the forms will display on the page--
//--and what will be available to the customer to choose from--

//types of payment accepted
function getPaymentTypes(){
var paymentType = [];
var paymentTime = [];
paymentType[0] = 'Credit card by phone'; //payment type
paymentTime[0] = [];
paymentTime[0]['best'] = 0; //best case senario, how long it will take in days
paymentTime[0]['worst'] = 0; //worst case senario, how long it will take in days
paymentType[1] = 'Credit card or PayPal online';
paymentTime[1] = [];
paymentTime[1]['best'] = 0;
paymentTime[1]['worst'] = 0;
paymentType[2] = 'Bank account (eCheck) through PayPal';
paymentTime[2] = [];
paymentTime[2]['best'] = 3;
paymentTime[2]['worst'] = 5;
paymentType[3] = 'Bank - wire transfer';
paymentTime[3] = [];
paymentTime[3]['best'] = 2;
paymentTime[3]['worst'] = 5;
paymentType[4] = 'Check by mail';
paymentTime[4] = [];
paymentTime[4]['best'] = 2;
paymentTime[4]['worst'] = 7;
paymentType[5] = 'Money order by mail';
paymentTime[5] = [];
paymentTime[5]['best'] = 2;
paymentTime[5]['worst'] = 7;
return new Array(paymentType, paymentTime);
}

//quantity ranges to determine production time
function getQtySelections(){
var qtySelection = [];
var productionTime = [];
qtySelection[0] = '1 - 500';
productionTime[0] = [];
productionTime[0]['best'] = 0;
productionTime[0]['worst'] = 0;
qtySelection[1] = '501 - 1000';
productionTime[1] = [];
productionTime[1]['best'] = 1;
productionTime[1]['worst'] = 2;
qtySelection[2] = '1001 - 2000';
productionTime[2] = [];
productionTime[2]['best'] = 2;
productionTime[2]['worst'] = 3;
qtySelection[3] = '2001 - 5000';
productionTime[3] = [];
productionTime[3]['best'] = 3;
productionTime[3]['worst'] = 5;
qtySelection[4] = '5001 - 10000';
productionTime[4] = [];
productionTime[4]['best'] = 4;
productionTime[4]['worst'] = 7;
qtySelection[5] = '10001 - 25000';
productionTime[5] = [];
productionTime[5]['best'] = 5;
productionTime[5]['worst'] = 10;
qtySelection[6] = 'more than 25000';
productionTime[6] = [];
productionTime[6]['best'] = -1;
productionTime[6]['worst'] = -1;
return new Array(qtySelection, productionTime);
}


//domestic shipping options and how long they can take
function getDomesticShipping(){
var domesticShippingSel = [];
var shippingTime = [];
domesticShippingSel[0] = 'UPS Next Day Air';
shippingTime[0] = [];
shippingTime[0]['best'] = 1;
shippingTime[0]['worst'] = 1;
domesticShippingSel[1] = 'USPS Priority Mail Express';
shippingTime[1] = [];
shippingTime[1]['best'] = 1;
shippingTime[1]['worst'] = 2;
domesticShippingSel[2] = 'UPS 2nd Day Air';
shippingTime[2] = [];
shippingTime[2]['best'] = 2;
shippingTime[2]['worst'] = 2;
domesticShippingSel[3] = 'UPS 3 Day Select';
shippingTime[3] = [];
shippingTime[3]['best'] = 3;
shippingTime[3]['worst'] = 3;
domesticShippingSel[4] = 'USPS Priority Mail';
shippingTime[4] = [];
shippingTime[4]['best'] = 2;
shippingTime[4]['worst'] = 4;
domesticShippingSel[5] = 'UPS Ground';
shippingTime[5] = [];
shippingTime[5]['best'] = 2;
shippingTime[5]['worst'] = 6;
domesticShippingSel[6] = 'USPS First Class Mail';
shippingTime[6] = [];
shippingTime[6]['best'] = 3;
shippingTime[6]['worst'] = 7;
domesticShippingSel[7] = 'Wacky Saver Shipping';
shippingTime[7] = [];
shippingTime[7]['best'] = 2;
shippingTime[7]['worst'] = 7;
return new Array(domesticShippingSel, shippingTime);
}

//international shipping options and how long they can take
function getInternationalShipping(){
var internatShippingSel = [];
var shippingTime = [];
internatShippingSel[0] = 'USPS Priority Mail Express International';
shippingTime[0] = [];
shippingTime[0]['best'] = 3;
shippingTime[0]['worst'] = 5;
internatShippingSel[1] = 'USPS Priority Mail International';
shippingTime[1] = [];
shippingTime[1]['best'] = 6;
shippingTime[1]['worst'] = 10;
internatShippingSel[2] = 'USPS First Class Mail International';
shippingTime[2] = [];
shippingTime[2]['best'] = 7;
shippingTime[2]['worst'] = 21;
return new Array(internatShippingSel, shippingTime);
}

//--end functions that alter page content--


//--determine the cutoff time to pay for an order--
function getCutOffTime(curhours){
//11:59 PM is 3:59 AM GMT - for midnight

//default
//6:00 AM EST is 10:00 AM GMT
var cutofftime = 10;

//check for special case
//if cc by phone, shipping to US, 1-500 buttons, Next Day Air
//12 pm is 4pm GMT (16 hundred hours GMT)
if(getPaymentTypes()[0][document.timecalc.paying.value] == 'Credit card by phone' && (getDomesticShipping()[0][document.timecalc.shipping.value] == 'UPS Next Day Air' || getDomesticShipping()[0][document.timecalc.shipping.value] == 'USPS Priority Mail Express') && document.timecalc.country.value == "United States of America" && curhours < 16 && curhours > 11){
cutofftime = 16;
}

return cutofftime;
}
//--end determine the cutoff time to pay for an order--







function evalPaymentTime(){

var paymenttypes = getPaymentTypes()[0];
var paymenttime = getPaymentTypes()[1];
var specialcase;
var error;
var payingval = document.timecalc.paying.value;
var best = paymenttime[payingval]['best'];
var worst = paymenttime[payingval]['worst'];
var curtime = new Date();
var curhours = curtime.getUTCHours()


//-------conditions for how long it takes to pay--------------
if(paymenttypes[payingval] == "Credit card by phone" && curhours < 16 && curhours > 11){
specialcase = "by 12:00 PM Noon EST Today! Call us at 585-267-7670 to get your order scheduled.";
}
else if(paymenttypes[payingval] == 'Check by mail' || paymenttypes[payingval] == 'Money order by mail'){
specialcase = "This quotation assumes your payment will take 1 week (7 days) for us to receive your payment in the mail.";
}
else{
specialcase = "before 6:00 AM Eastern Standard Time.";
//if after noon and paying with cc by phone
if(paymenttypes[payingval] == "Credit card by phone"){
specialcase = "You can order by phone from 9:00 AM - 5:00 PM Eastern Standard Time, Monday - Friday.";
}
}
//-------end conditions for how long it takes to pay--------------


return new Array(best, worst, specialcase, error);
}







function evalProductionTime(){
var specialcase;
var error;
var qtytypes = getQtySelections()[0];
var productiontime = getQtySelections()[1];
var best = productiontime[document.timecalc.qty.value]['best'];
var worst = productiontime[document.timecalc.qty.value]['worst'];


//-------conditions for how long it takes to produce--------------
if(best == -1){
error = 'Unable to determine turnaround time. <a href="contact.php">Contact us</a> directly for turnaround quotation.';
}
//-------end conditions for how long it takes to produce--------------

return new Array(best, worst, specialcase, error);
}









function evalShippingTime(){
var specialcase;
var error;
var shippingtypes
var shippingtime
if(document.timecalc.country.value == "United States of America"){
shippingtypes = getDomesticShipping()[0];
shippingtime = getDomesticShipping()[1];
}else{
shippingtypes = getInternationalShipping()[0];
shippingtime = getInternationalShipping()[1];
}

var best = shippingtime[document.timecalc.shipping.value]['best'];
var worst = shippingtime[document.timecalc.shipping.value]['worst'];

//-------conditions for how long it takes to ship--------------
if(shippingtypes[document.timecalc.shipping.value].toLowerCase().indexOf("international") > -1){
specialcase = "This quotation assumes minimal customs delays for international shipments. Delays at customs could cause your package to be received later than expected.";
}
//-------conditions for how long it takes to ship--------------

return new Array(best, worst, specialcase, error);
}







//--generate html code for dropdown menus of the turnaround page--
function payment_types_html(){
paymenttypes = getPaymentTypes()[0];
outputhtml = "";
for(i = 0; i < paymenttypes.length; i++){
outputhtml = outputhtml + '<option value="'+i+'">'+paymenttypes[i]+'</option>';
}
return outputhtml;
}

function qty_selections_html(){
qtysel = getQtySelections()[0];
outputhtml = "";
for(i = 0; i < qtysel.length; i++){
outputhtml = outputhtml + '<option value="'+i+'">'+qtysel[i]+'</option>';
}
return outputhtml;
}

function domestic_shipping_html(){
domshipsel = getDomesticShipping()[0];
outputhtml = "";
for(i = 0; i < domshipsel.length; i++){
outputhtml = outputhtml + '<option value="'+i+'">'+domshipsel[i]+'</option>';
}
return outputhtml;
}

function international_shipping_html(){
intershipsel = getInternationalShipping()[0];
outputhtml = "";
for(i = 0; i < intershipsel.length; i++){
outputhtml = outputhtml + '<option value="'+i+'">'+intershipsel[i]+'</option>';
}
return outputhtml;
}
//--end generate html code for dropdown menus of the turnaround page--


//calculate date we are shipping out
function calculate_ship_date(inpdate){
if(inpdate){
var shipday = new Date(inpdate.getTime());
}else{
var shipday = new Date(); //if no input date, set to todays date
shipday.setDate(shipday.getDate() + 1); //set to tomorrows date - default 
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

//calculate date of delivery
function calculate_delivery_date(transitdays, shipdate){
//takes the number of days in transit as an integer
//also must take a starting date (shipping date) as input
var upsorpo = is_ups_or_po();
var deliveryday = new Date(shipdate.getTime());


for(i = 1; i <= transitdays; i++){//loop for each transit day

//set the day to the next day
deliveryday.setDate(deliveryday.getDate() + 1);//add a day
//then check if the day we set falls on a day that cannot be delivered
//if so change to the day after
while( (upsorpo == 'ups' && deliveryday.getDay() == 6) || deliveryday.getDay() == 0){ // || shipday == holiday
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



//if country is changed see if we need to switch to international shipping options
function changeCountry(){

if(document.timecalc.country.value == "United States of America"){
shippingtext = domestic_shipping_html();
}else{
shippingtext = international_shipping_html()
}

$('#shipping').html(shippingtext);

//after options get changed calculate the time
calculateTTime();

}



//function to translate day of the week number to written day of the week
function translateWeekday(inpdayintval){
var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
return d_names[inpdayintval];
}


//determine if UPS or USPS shipping
function is_ups_or_po(){

var upsorpo;

if(document.timecalc.country.value == "United States of America"){
shippingtypes = getDomesticShipping()[0];
}else{
shippingtypes = getInternationalShipping()[0];
}

if(shippingtypes[document.timecalc.shipping.value].toLowerCase().indexOf("ups") > -1){
upsorpo = "ups";
}else{
upsorpo = "usps";
}

return upsorpo;
}

//writes the html for the time left to order countdown on the turnaround page
function calcTimeLeftCounter(){

var curtime = new Date();
//figureout current time
var curhours = curtime.getUTCHours(); //0 - 23
var curminutes = curtime.getUTCMinutes(); //0 - 59

var cutofftime = getCutOffTime(curhours);

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




//Main function to calculate the turnaround and populate all the html
function calculateTTime(){

//--evaluate the form fields submitted--
paymentArr = evalPaymentTime();
productionArr = evalProductionTime();
shippingArr = evalShippingTime();

//--figure out delivery date ranges--
paymentTimeBest = paymentArr[0];
productionTimeBest = productionArr[0];
shippingTimeBest = shippingArr[0];

paymentTimeWorst = paymentArr[1];
productionTimeWorst = productionArr[1];
shippingTimeWorst = shippingArr[1];

//get special cases
paymentSpecialCase = paymentArr[2];
productionSpecialCase = productionArr[2];
shippingSpecialCase = shippingArr[2];

//get errors
paymentError = paymentArr[3];
productionError = productionArr[3];
shippingError = shippingArr[3];


turnaroundTimeBest = eval(paymentTimeBest) + eval(productionTimeBest) + eval(shippingTimeBest);
turnaroundTimeWorst = eval(paymentTimeWorst) + eval(productionTimeWorst) + eval(shippingTimeWorst);


//figure out when we will ship out
var curtime = new Date();
var curhours = curtime.getUTCHours()
var shipdate;
//if paying by phone today during proper time
if(getPaymentTypes()[0][document.timecalc.paying.value] == "Credit card by phone" && curhours < 16 && curhours > 11){
shipdate = calculate_ship_date(curtime); //ship today
}else{
shipdate = calculate_ship_date(); //ship tomorrow or next available day
}



deliverydateBest = calculate_delivery_date(turnaroundTimeBest, shipdate);
deliverydateWorst = calculate_delivery_date(turnaroundTimeWorst, shipdate);
//alert(deliverydateBest + " " + deliverydateWorst);

var receivewhen = "XX/XX/XXXX";
if(deliverydateBest.getTime() == deliverydateWorst.getTime()){
receivewhen = translateWeekday(deliverydateBest.getDay()) + "<br />" + (deliverydateBest.getMonth() + 1) + "/" + deliverydateBest.getDate() + "/" + deliverydateBest.getFullYear();
receivewhentitle = "You could receive your buttons on";
}else{
receivewhen = ' \
<table align="center"> \
<tr> \
<td> \
';
receivewhen = receivewhen + translateWeekday(deliverydateBest.getDay()) + "<br />" + (deliverydateBest.getMonth() + 1) + "/" + deliverydateBest.getDate() + "/" + deliverydateBest.getFullYear();
receivewhen = receivewhen + "</td><td>&nbsp; - &nbsp;</td><td>";
receivewhen = receivewhen + translateWeekday(deliverydateWorst.getDay()) + "<br />" + (deliverydateWorst.getMonth() + 1) + "/" + deliverydateWorst.getDate() + "/" + deliverydateWorst.getFullYear();
receivewhen = receivewhen + '\
</td> \
</tr> \
</table> \
';

receivewhentitle = "You could receive your buttons sometime";
}

//--end figure out delivery date--

//--include any special cases--
var otherfineprinttext = "";
var paymentdetailstext = "";
paymentdetailstext = paymentSpecialCase;
if(productionSpecialCase){
otherfineprinttext = "<li>" + productionSpecialCase + "</li>";
}
if(shippingSpecialCase){
otherfineprinttext = otherfineprinttext + "<li>" + shippingSpecialCase + "</li>";
}


$('#receivewhen_title').html(receivewhentitle);
$('#receivewhen').html(receivewhen);
$('#paymentdetails').html(paymentdetailstext);
$('#otherfineprint').html(otherfineprinttext);
//update the time left countdown
calcTimeLeftCounter();

}


//after the page is loaded initiate all the dropdowns and calculate turnaround time if someone were to pay right now
window.addEventListener("load", function(){
//set defaults
$('#country_dd').load('country_dropdown_php_output.txt');
$('#payment_types').html(payment_types_html());
$('#qty_selection').html(qty_selections_html());
$('#shipping').html(domestic_shipping_html());
calculateTTime();
});