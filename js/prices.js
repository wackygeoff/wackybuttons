function countryzip(){
if (document.getElementById('formx').country.value != "United States of America"){
document.getElementById('zipcodefield').style.display = 'none';
}else{
document.getElementById('zipcodefield').style.display = 'block';
}
}

function showothercountries(){
document.getElementById('countryfield').style.display = 'block';
document.getElementById('defaultcountry').style.display = 'none';
document.getElementById('zipcodefield').style.display = 'none';
}


function checkFields(){
//alert(document.formx.elements['buttonsize[]'].value);
buttonsizearr = document.getElementsByName('buttonsize[]');
//alert('last'+buttonsizearr.length);
testresult = true;
fieldfailed = 1;
for(i = 0; i < buttonsizearr.length; i++){
if(buttonsizearr[i].value == ""){
fieldfailed = i + 1;
testresult = false;
}
}

if(testresult == false){
alert('You did not choose a product or button size for Design #' + fieldfailed);
}

return testresult;
}

function helpAddMore(){

newwindow = window.open("about:blank",'name','height=350,width=400,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,status=no');
newwindow.document.write('<b>Add another design</b><br />');
newwindow.document.write('<li>This allows you to get the price for different button designs. Maybe you might want a button that says one thing and another button to say something different. This calculator will let you build your button order and give you a total price.<br /> <br /></li>');
newwindow.document.write('<li>Also use this feature if you want the same design on 2 or more different button sizes.<br /> <br /></li>');

}


function toggleSize(designnum){


for(i = 0; i < prodshortnames.length; i ++){

if(document.getElementById('prod'+designnum).value == prodshortnames[i]){
outputtext = "";
outputtext = outputtext + '<select name="buttonsize[]" id="size'+designnum+'" width="200" style="width:200px;">';
outputtext = outputtext + '<option value="">Choose a button size</option>';

for(j = 0; j < proddescs[prodshortnames[i]].length; j ++){
outputtext = outputtext + '<option value="' + proddescs[prodshortnames[i]][j] + '" id="' + prodlongids[prodshortnames[i]][j] + designnum + '">' + prodsizes[prodshortnames[i]][j] + '</option>';
}

outputtext = outputtext + '</select>';
}//end if
}//end for i


if(document.getElementById('prod'+designnum).value == ''){
outputtext = "";
outputtext = outputtext + '<select name="buttonsize[]" id="size'+designnum+'" width="200" style="width:200px" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

document.getElementById('sizewrapper'+designnum).innerHTML = outputtext;
}





function oneMoreDesign(destoadd){
//texttoadd = 'Get the price of any quantity of buttons and for multiple button designs.';
//texttoadd = texttoadd + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="5" alt="" />';
//texttoadd = texttoadd + '<table summary="" border="1" style="width:700px;">';
//texttoadd = texttoadd + '<tr>';
texttoadd = '<tr>';

texttoadd = texttoadd + '<td valign="bottom"></td><td valign="bottom"></td><td valign="bottom">Product Type</td><td valign="bottom">Button Size</td></tr><tr>';

//big loop
for (k = 1; k <= destoadd; k ++){
texttoadd = texttoadd + '<td valign="middle">Design #'+(k)+': </td>';
if(document.getElementById('qty'+k)){
texttoadd = texttoadd + '<td valign="bottom">Quantity: <input name="qty[]" id="qty'+k+'" type="text" size="6" value="'+ document.getElementById('qty'+k).value +'" /></td><td>';
}else{
texttoadd = texttoadd + '<td valign="bottom">Quantity: <input name="qty[]" id="qty'+k+'" type="text" size="6" value="'+ document.getElementById('qty'+(k-1)).value +'" /></td><td>';
}



texttoadd = texttoadd + '<select name="product[]" id="prod'+k+'" onchange="javascript:toggleSize('+k+');" width="175" style="width:175px">';
texttoadd = texttoadd + '<option value="">Choose a Product</option>';

productwasselected = false;
prodtypeselected = "";


for(i = 0; i < prodshortnames.length; i++){
if(document.getElementById(prodids[i]+k)){
if(document.getElementById(prodids[i]+k).selected == true){
texttoadd = texttoadd + '<option value="'+prodshortnames[i]+'" id="'+ prodids[i] + k + '" selected="selected">' + prodshortnames[i] + '</option>';
productwasselected = true;
prodtypeselected = prodshortnames[i];
}else{
texttoadd = texttoadd + '<option value="' + prodshortnames[i] + '" id="' + prodids[i] + k + '">' + prodshortnames[i] + '</option>';
}
}else{
if(document.getElementById(prodids[i] + (k-1)).selected == true){
texttoadd = texttoadd + '<option value="' + prodshortnames[i] + '" id="' + prodids[i] + k + '" selected="selected">' + prodshortnames[i] + '</option>';
productwasselected = true;
prodtypeselected = prodshortnames[i];
}else{
texttoadd = texttoadd + '<option value="' + prodshortnames[i] + '" id="' + prodids[i] + k+ '">' + prodshortnames[i] + '</option>';
}
}

}



texttoadd = texttoadd + '</select></td><td valign="bottom">';

texttoadd = texttoadd + '<div id="sizewrapper'+k+'">';

if(productwasselected == false){
texttoadd = texttoadd + '<select name="buttonsize[]" id="size'+k+'" width="200" style="width:200px" disabled=disabled>';
}else{
texttoadd = texttoadd + '<select name="buttonsize[]" id="size'+k+'" width="200" style="width:200px">';
}

texttoadd = texttoadd + '<option value="">Choose a button size</option>';



for(i = 0; i < prodshortnames.length; i++){
for(j = 0; j < prodlongids[prodshortnames[i]].length; j++){

if(prodtypeselected == prodshortnames[i]){

if(document.getElementById(prodlongids[prodshortnames[i]][j]+k)){
if(document.getElementById(prodlongids[prodshortnames[i]][j]+k).selected == true){
texttoadd = texttoadd + '<option value="' + proddescs[prodshortnames[i]][j] + '" id="' + prodlongids[prodshortnames[i]][j] +k+'" selected="selected">' + prodsizes[prodshortnames[i]][j] + '</option>';
}else{
texttoadd = texttoadd + '<option value="' + proddescs[prodshortnames[i]][j] + '" id="' + prodlongids[prodshortnames[i]][j] +k+'">' + prodsizes[prodshortnames[i]][j] + '</option>'
}
}

else{
if(document.getElementById(prodlongids[prodshortnames[i]][j]+(k-1))){
if(document.getElementById(prodlongids[prodshortnames[i]][j]+(k-1)).selected == true){
texttoadd = texttoadd + '<option value="' + proddescs[prodshortnames[i]][j] + '" id="' + prodlongids[prodshortnames[i]][j]+k+'" selected="selected">' + prodsizes[prodshortnames[i]][j] + '</option>';
}else{
texttoadd = texttoadd + '<option value="' + proddescs[prodshortnames[i]][j] + '" id="' + prodlongids[prodshortnames[i]][j]+k+'">' + prodsizes[prodshortnames[i]][j] + '</option>';
}
}
}

}
}
}




texttoadd = texttoadd + '</select>';
texttoadd = texttoadd + '</div>';

texttoadd = texttoadd + '</td>';
texttoadd = texttoadd + '</tr><tr>';
}
//end loop
texttoadd = texttoadd + '<td valign="middle" colspan="3">';
texttoadd = texttoadd + '<input type="button" value="Add another design" onclick="oneMoreDesign('+(destoadd+1)+');">';
if(destoadd > 1){
texttoadd = texttoadd + '<input type="button" value="Remove one design" onclick="oneMoreDesign('+(destoadd-1)+');">';
}
texttoadd = texttoadd + '</td>';
texttoadd = texttoadd + '</tr>';
//texttoadd = texttoadd + '</table>';

/*
texttoadd = texttoadd + '<br />';
texttoadd = texttoadd + 'Calculate shipping (optional)<br /> <br />';

if(document.formx.country.value != "" && document.formx.country.value != "United States of America"){
texttoadd = texttoadd + '<div id="countryfield" style="display:block;">';
}else{
texttoadd = texttoadd + '<div id="countryfield" style="display:none;">';
}
texttoadd = texttoadd + 'Country: <select name="country" id="country_ddlist" onchange="javascript:countryzip();">';




texttoadd = texttoadd + '</select><br /><br />';
texttoadd = texttoadd + '</div>';

if(document.formx.country.value != "" && document.formx.country.value != "United States of America"){
texttoadd = texttoadd + '<div id="zipcodefield" style="display:none;">Destination Zipcode: <input type="text" name="zip" size="5" maxlength="5" /></div><br />';
texttoadd = texttoadd + '<div id="defaultcountry" style="display:none;">Country: United States of America<br /><a href="javascript:showothercountries();">Choose a different country</a><br /> <br /></div>';
}else{
texttoadd = texttoadd + '<div id="zipcodefield">Destination Zipcode: <input type="text" name="zip" size="5" maxlength="5" /></div><br />';
texttoadd = texttoadd + '<div id="defaultcountry">Country: United States of America<br /><a href="javascript:showothercountries();">Choose a different country</a><br /> <br /></div>';
}
texttoadd = texttoadd + '<input type="submit" value="Calculate Price" />';
*/

document.getElementById('pricecalc_table').innerHTML = texttoadd;



}




function disp_default_price_calc(){

outputhtml = ' \
<form action="http://www.wackybuttons.com/pricecalc.php" id="formx" name="formx" method="post" onsubmit="javascript:return checkFields();"> \
Get the price of any quantity of buttons and for multiple button designs. \
<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="5" alt="" /> \
 \
<table id="pricecalc_table" style="width:700px;" border="1"> \
<tr> \
 \
<td valign="bottom"></td><td valign="bottom"></td><td valign="bottom">Product Type</td><td valign="bottom">Button Size</td></tr><tr> \
 \
<td valign="middle">Design #1: </td> \
<td valign="bottom">Quantity: <input name="qty[]" id="qty1" type="text" size="6" /></td><td valign="bottom"> \
 \
<select name="product[]" id="prod1" onchange="javascript:toggleSize(1);" width="175" style="width:175px"> \
<option value="">Choose a Product</option> \
';

for(i = 0; i < prodshortnames.length; i++){
outputhtml = outputhtml + '<option value="' + prodshortnames[i] + '" id="' + prodids[i] + '1">' + prodshortnames[i] + "</option>";
}

outputhtml = outputhtml + ' \
</select></td><td valign="bottom"> \
 \
<div id="sizewrapper1"> \
<select name="buttonsize[]" id="size1" width="200" style="width:200px" disabled="disabled"> \
<option value="">Choose a button size</option> \
</select> \
</div> \
 \
</td> \
</tr><tr> \
<td valign="middle" colspan="3"><input type="button" value="Add another design" onclick="javascript:oneMoreDesign(2);"> <a href="javascript:helpAddMore();" style="color:white; text-decoration:none;"><font size="-2" color="white" style="color:white;">What does this mean?</font></a></td> \
 \
</tr> \
</table> \
 \
 \
<br /> \
Calculate shipping (optional)<br /> <br /> \
<div id="countryfield" style="display:none;"> \
Country: <select name="country" id="country_ddlist" onchange="javascript:countryzip();"> \
<option value="">Select your country</option> \
 \
<option value="United States of America">United States of America</option> \
 \
';

//list of countries will get loaded in later by ajax

outputhtml = outputhtml + ' \
 \
 \
</select><br /><br /> \
</div> \
<div id="zipcodefield">Destination Zipcode: <input type="text" name="zip" size="5" maxlength="5" /></div><br /> \
<div id="defaultcountry">Country: United States of America<br /><a href="javascript:showothercountries();">Choose a different country</a><br /> <br /></div> \
<input type="submit" value="Calculate Price" /> \
</form> \
';

$('#disp_pricecalc').html(outputhtml);

//ajax in the country list
$('#country_ddlist').load('country_dropdown_php_output.txt');
}



window.addEventListener("load", disp_default_price_calc());