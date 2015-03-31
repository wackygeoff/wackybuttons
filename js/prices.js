function pc_country_zip(){
if (document.getElementById('formx').country.value != "United States of America"){
document.getElementById('zipcodefield').style.display = 'none';
}else{
document.getElementById('zipcodefield').style.display = 'block';
}
}

function pc_show_countries(){
document.getElementById('countryfield').style.display = 'block';
document.getElementById('defaultcountry').style.display = 'none';
document.getElementById('zipcodefield').style.display = 'none';
}


function pc_check_fields(){
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

function pc_help_add(){
$('#dialog_title').html("Add Another Design");
inpcode = ' \
 \
<ul> \
<li> \
This allows you to get the price for different button designs. \
Maybe you might want a button that says one thing and another button to say \
something different. This calculator will let you build your button \
order and give you a total price. \
</li> \
<li>Also use this feature if you want the same design on 2 or more different \
button sizes. \
</li> \
</ul> \
 \
';

$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';

$('#dialog_footer').html(inpcode);

}

//--rewrites the dropdown menu for product sizes available--
function pc_size_dd(designnum){

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




//--rewrites the table for calculating a price--
function pc_add_one_more(destoadd){

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



texttoadd = texttoadd + '<select name="product[]" id="prod'+k+'" onchange="javascript:pc_size_dd('+k+');" width="175" style="width:175px">';
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
texttoadd = texttoadd + '<input type="button" value="Add another design" onclick="pc_add_one_more('+(destoadd+1)+');">';
if(destoadd > 1){
texttoadd = texttoadd + '<input type="button" value="Remove one design" onclick="pc_add_one_more('+(destoadd-1)+');">';
}
texttoadd = texttoadd + '</td>';
texttoadd = texttoadd + '</tr>';


document.getElementById('pricecalc_table').innerHTML = texttoadd;



}




function pc_disp_default(){

outputhtml = ' \
<form action="http://www.wackybuttons.com/pricecalc.php" id="formx" name="formx" method="post" onsubmit="javascript:return pc_check_fields();"> \
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
<select name="product[]" id="prod1" onchange="javascript:pc_size_dd(1);" width="175" style="width:175px"> \
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
<td valign="middle" colspan="3"><input type="button" value="Add another design" onclick="javascript:pc_add_one_more(2);"> <a href="#" data-toggle="modal" data-target="#dialog_win" onclick="pc_help_add();">What does this mean?</a></td> \
 \
</tr> \
</table> \
 \
 \
<br /> \
Calculate shipping (optional)<br /> <br /> \
<div id="countryfield" style="display:none;"> \
Country: <select name="country" id="country_ddlist" onchange="javascript:pc_country_zip();"> \
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
<div id="defaultcountry">Country: United States of America<br /><a href="javascript:pc_show_countries();">Choose a different country</a><br /> <br /></div> \
<input type="submit" value="Calculate Price" /> \
</form> \
';

$('#disp_pricecalc').html(outputhtml);

//ajax in the country list
$('#country_ddlist').load('country_dropdown_php_output.txt');
}


//--default window onload to get everything started--
window.addEventListener("load", pc_disp_default());