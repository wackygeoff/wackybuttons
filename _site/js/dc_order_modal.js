//note: most of the js in this file is called from preview-example.js
//here is the list of functions used:
//genButtonSizeDD()
//changeProdTypeImage()
//calcprice()
//checkSingleForm()

function design_code_order_window(){
$('#dialog_title').html("Order with a Design Code");

//we should ajax in the product list from php for the prod_chooser

inpcode = ' \
<div class="container" style="max-width:550px;"> \
<div class="row"> \
<div class="col-md-6" id="dc"> \
<img src="http://www.wackybuttons.com/images/designpreview.jpg"  width="200" height="200" border="0" alt="Preview of your button design will show here when you enter a design code in the form above" /> \
</div> \
<div id="prod" class="col-md-6"> \
<img src="http://www.wackybuttons.com/images/backofbutton.jpg" border="0" alt="Preview of what the back of your button will look like will show here after you choose a product type in the form above." /> \
</div> \
</div> \
<div class="row"> \
<div class="col-md-12"> \
<hr /> \
</div> \
</div> \
<div class="row"> \
<form name="frm_single_item" action="http://www.wackybuttons.com/shopcart.php" onsubmit="return checkSingleForm(this);" method="post" enctype="application/x-www-form-urlencoded" id="inpcode" target="cart"> \
<input type="hidden" name="operation" value="addtocart" /> \
<input type="hidden" name="title" value=" " /> \
<div style="max-width:75%;margin-left:auto;margin-right:auto;"> \
Design Code: <input type="text" class="form-control short-field" style="display:inline;" name="item_number" maxlength="7" size="8" onchange="dcwin_checkdc();" /> \
<input type="button" class="btn-default btn-wacky" style="display:inline;" value="View Design" onclick="dcwin_checkdc();" /> \
<select name="prod_chooser" class="form-control" id="dcwin_prod_chooser" style="margin-top:10px;" onchange="javascript:genButtonSizeDD('+"'"+'dcwin_prod_chooser'+"'"+', '+"'"+'dcwin_size_chooser'+"'"+', '+"'"+'item_name'+"'"+');"> \
<option value="">Choose Product</option>';
for(i = 0; i < prodshortnames.length; i++){
inpcode = inpcode + '<option value="'+prodshortnames[i]+'">'+prodshortnames[i]+'</option>';
}
inpcode = inpcode + ' \
</select> \
</div> \
<div id="dcwin_size_chooser" style="max-width:75%;margin-top:10px;margin-bottom:10px;margin-left:auto;margin-right:auto;"> \
<select name="item_name" class="form-control" onchange="javascript:changeProdTypeImage(this);" disabled="disabled"> \
<option value="">Choose Size</option> \
</select> \
</div> \
<div style="max-width:75%;margin-left:auto;margin-right:auto;"> \
<a href="javascript:show_size_info();">See Size Differences</a> <br /> <br /> \
<label for="on0">Quantity:</label> <input type="hidden" name="on0" value="number of buttons" /> \
<input type="text" class="form-control" name="os0" maxlength="30" size="9" value="" style="width:25%;display:inline;" /><br /> \
<input name="button" type="button" class="btn-default btn-wacky" value=" calculate price " style="margin-top:10px;margin-bottom:10px;" onclick="javascript:calcprice();" /> \
<div id="pricedispcont" style="display:none;"><iframe name="pricedisp" id="pricedisp" height="35" width="150" scrolling="no" src="" frameborder="0">Could not calculate price. Press "Add To Cart" Below to view the price of the item in your shopping cart.</iframe></div> \
<br /> <br /><input type="image" name="Submit" value="Add to Cart" alt="Add to Cart" src="http://www.wackybuttons.com/images/order/addtocart.gif" style="border:0px;" /> \
</div> \
</form> \
</div> \
</div> \
';
$('#dialog_content').html(inpcode);
inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}//end design_code_order_window







function dcwin_changedesign(){
dccc = document.frm_single_item.item_number.value;

custdeshtml = '<a href="javascript:showbig(';
custdeshtml = custdeshtml + "'";
custdeshtml = custdeshtml + 'http://www.wackybuttons.com/designcodes/'+ dccc.substring(0,3) + '/' + dccc + '.jpg';
custdeshtml = custdeshtml + "'";
custdeshtml = custdeshtml + ');"><img id="customdesimg" src="http://www.wackybuttons.com/designcodes/'+ dccc.substring(0,3) + '/' + dccc + '.jpg" width="200" height="200" border="0" alt="'+dccc+' - click to see larger image" onerror="this.src=';
custdeshtml = custdeshtml + "'http://www.wackybuttons.com/images/designnotfound.jpg'";
custdeshtml = custdeshtml + ';" /></a>';


document.getElementById('dc').innerHTML = custdeshtml;

}

/*
function dcwin_toggleSize(){

//we should ajax the dcwin_frm_order.prod_chooser.value to php and get the return html to put in

if(document.dcwin_frm_order.prod_chooser.value == 'Standard Pin Back'){
outputtext = "";
outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';
outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';
outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';
outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';
outputtext = outputtext + '</select>';
}
if(document.dcwin_frm_order.prod_chooser.value == 'Refrigerator Magnet'){
outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.dcwin_frm_order.prod_chooser.value == 'Clothing Magnet'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}
if(document.dcwin_frm_order.prod_chooser.value == 'Keychain'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if(document.dcwin_frm_order.prod_chooser.value == 'Bottle Opener'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if(document.dcwin_frm_order.prod_chooser.value == 'Mirror Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.dcwin_frm_order.prod_chooser.value == 'Clip Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.dcwin_frm_order.prod_chooser.value == 'Nothing on Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if(document.dcwin_frm_order.prod_chooser.value == ''){
outputtext = "";
outputtext = outputtext + '<select name="item_name" onchange="javascript:dcwin_changetype(this);" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

document.getElementById('dcwin_size_chooser').innerHTML = outputtext;
}
*/



/*
function dcwin_changetype(inp){

dcwin_calcprice();

//we should ajax the inp.options[inp.selectedIndex].value to php and get the return html to put in

if(inp.options[inp.selectedIndex].value == "3 inch round button with magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet3.jpg" width="150" height="150" border="0" alt="3 inch button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with mirror back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/mirror3.jpg" width="150" height="150" border="0" alt="3 inch button with mirror back" /><br />Back: Mirror';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with locking pin back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/3inchpinback.jpg" width="150" height="150" border="0" alt="3 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with locking pin back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/2.25inchpinback.jpg" width="150" height="150" border="0" alt="2.25 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet225.jpg" width="150" height="150" border="0" alt="2.25 inch button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with mirror back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/mirror25.jpg" width="150" height="150" border="0" alt="2.25 inch button with mirror back" /><br />Back: Mirror';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with bottle opener back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/bottleopener25.jpg" width="150" height="150" border="0" alt="2.25 inch button with bottle opener back" /><br />Back: Bottle Opener';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with keychain back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="150" height="150" border="0" alt="2.25 inch button with keychain back" /><br />Back: Keychain';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with keychain back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="150" height="150" border="0" alt="1.5 inch button with keychain back" /><br />Back: Keychain';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with locking pin back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/1.5inchpinback.jpg" width="150" height="150" border="0" alt="1.5 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with nothing on back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with locking pin back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/1inchpinback.jpg" width="150" height="150" border="0" alt="1 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet1.jpg" width="150" height="150" border="0" alt="1 inch round button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with nothing on back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback1.jpg" width="150" height="150" border="0" alt="1 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with nothing on back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with nothing on back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback3.jpg" width="150" height="150" border="0" alt="3 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with clip back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clip225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with clip back" /><br />Back: Clip back';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with clip back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clip3.jpg" width="150" height="150" border="0" alt="3 inch round button with clip back" /><br />Back: Clip back';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with clothing magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with clothing magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with clothing magnet back"){
document.getElementById('dcwin_prod_preview').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet3.jpg" width="150" height="150" border="0" alt="3 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}

}
*/

function dcwin_checkdc(){

if(document.frm_single_item.item_number.value.length == 7){
dcwin_changedesign();
}

}

/*
function dcwin_calcprice(){
if(document.getElementById('dcwin_price_disp_con').style.display == 'none' && document.dcwin_frm_order.os0.value != "" && document.dcwin_frm_order.os0.value > 0 && document.dcwin_frm_order.item_name.value != "" && document.dcwin_frm_order.item_name.value != "none"){
document.getElementById('dcwin_price_disp_con').style.display = 'block';
}

if(document.dcwin_frm_order.os0.value != "" && document.dcwin_frm_order.os0.value > 0 && document.dcwin_frm_order.item_name.value != "" && document.dcwin_frm_order.item_name.value != "none"){
document.getElementById('dcwin_price_disp').src = 'http://www.wackybuttons.com/smallprice.php?qty=' + document.dcwin_frm_order.os0.value + '&buttonsize=' + document.dcwin_frm_order.item_name.value;
}
}
*/