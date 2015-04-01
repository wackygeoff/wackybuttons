//functions needed to add a single item to the shopping cart

//-------------global settings------------------

//????? I think we need to get rid of this preload somehow ?????

//preload back of button image for store
var $preloadimage = new Image();
$preloadimage.src = "http://www.wackybuttons.com/images/backofbutton.jpg";
//-------------end global settings------------------


//---More Details Popup---
//the modal that opens to allow the user to add a single item to the cart
function moreDetails(designcode, titlet){

$('#dialog_title').html("Add to cart");

var inpcode = "";

inpcode = '<div class="container" style="max-width:550px;">';//overall div

//--button preview
inpcode = inpcode + '<div class="row">';

inpcode = inpcode + '<div class="col-md-6">';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/designcodes/' + designcode.substring(0,3) + '/' + designcode +'.jpg" width="200" height="200" border="0" />';
inpcode = inpcode + '<div style="margin-bottom:10px;font-size:16px;"><b>Design Code: </b><div style="border:2px solid black;display:inline;padding:2px;"><b>' + designcode +'</b></div></div>';
inpcode = inpcode + '</div>';


inpcode = inpcode + '<div id="prod" class="col-md-6">';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/images/backofbutton.jpg" border="0" alt="Preview of what the back of your button will look like will show here after you choose a product type in the form above." />';
inpcode = inpcode + '</div>';

inpcode = inpcode + '</div>';//end div row
//--end button preview


//--hr row
inpcode = inpcode + '<div class="row">';
inpcode = inpcode + '<div class="col-md-12">';
inpcode = inpcode + '<hr />';
inpcode = inpcode + '</div>';//end div col-md-12
inpcode = inpcode + '</div>';//end div row
//--end hr row

//--form to order
inpcode = inpcode + '<div class="row">';

inpcode = inpcode + '<form name="frm_single_item" action="http://www.wackybuttons.com/shopcart.php" onsubmit="return checkSingleForm(this);" method="post" enctype="application/x-www-form-urlencoded" id="inpcode" target="cart">';
inpcode = inpcode + '<input type="hidden" name="operation" value="addtocart" />';
inpcode = inpcode + '<input type="hidden" name="title" value="'+titlet+'" />';
inpcode = inpcode + '<input type="hidden" name="item_number" value="' + designcode + '" />';

inpcode = inpcode + '<div style="max-width:75%;margin-left:auto;margin-right:auto;">';
inpcode = inpcode + '<select name="prod_chooser" class="form-control" id="prod_chooser" onchange="javascript:genButtonSizeDD('+"'"+'prod_chooser'+"'"+', '+"'"+'size_chooser'+"'"+', '+"'"+'item_name'+"'"+');">';
inpcode = inpcode + '<option value="">Choose Product</option>';

for(i = 0; i < prodshortnames.length; i++){
inpcode = inpcode + '<option value="'+prodshortnames[i]+'">'+prodshortnames[i]+'</option>';
}

inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';


inpcode = inpcode + '<div id="size_chooser" style="max-width:75%;margin-top:10px;margin-bottom:10px;margin-left:auto;margin-right:auto;">';
inpcode = inpcode + '<select name="item_name" class="form-control" onchange="javascript:changeProdTypeImage(this);" disabled="disabled">';
inpcode = inpcode + '<option value="">Choose Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';


inpcode = inpcode + '<div style="max-width:75%;margin-left:auto;margin-right:auto;">';//div for qty, price, and submit

inpcode = inpcode + '<a href="javascript:show_size_info();" class="smalllink">See Size Differences</a> <br /> <br />';

inpcode = inpcode + '<label for="on0">Quantity:</label> <input type="hidden" name="on0" value="number of buttons" />';
inpcode = inpcode + '<input type="text" class="form-control" name="os0" maxlength="30" size="9" value="" style="width:25%;display:inline;" /><br />';
inpcode = inpcode + '<input name="button" type="button" class="btn-default btn-wacky" value=" calculate price " style="margin-top:10px;margin-bottom:10px;" onclick="javascript:calcprice();" />';
inpcode = inpcode + '<div id="pricedispcont" style="display:none;"><iframe name="pricedisp" id="pricedisp" height="35" width="150" scrolling="no" src="" frameborder="0">Could not calculate price. Press "Add To Cart" Below to view the price of the item in your shopping cart.</iframe></div>';


inpcode = inpcode + '<br /> <br /><input type="image" name="Submit" value="Add to Cart" alt="Add to Cart" src="http://www.wackybuttons.com/images/order/addtocart.gif" style="border:0px;" />';
inpcode = inpcode + '</div>';//end div for qty, price, and submit


inpcode = inpcode + '</form>';


inpcode = inpcode + '</div>';//end div row
//--end form to order

inpcode = inpcode + '</div>';//end div container


//inpcode = inpcode + '<br /> <br />';
//inpcode = inpcode + '<a href="javascript:closeJDialog();">Close [X]</a></div>';

//$('#jDialog').dialog("option", "title", "Order This Button");
//('#jDialog').dialog("option", "width", 520);
//$('#jDialog').dialog("option", "height", 650);
$('#dialog_content').html(inpcode);
//$('#jDialog').dialog("open");

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);

}
//---End More Details Popup---



//---generate button size drop down list--
function genButtonSizeDD(inpid, receivingid, itemid){

//recode this section. just send the $('#'+inpid).val() and itemid off to php and have it return the html to write to $('#'+receivingid).html()
//changed my mind lets just do it all in javascript
//all we need is just a global js file with all the products stores as arrays
//totally removes php so everything can depend on javascript

/* ---old code---
if($('#'+inpid).val() == "Standard Pin Back"){outputtext = "";outputtext = outputtext + '<select class="form-control"  name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Refrigerator Magnet"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Clothing Magnet"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Keychain"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Bottle Opener"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Mirror Back"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Clip Back"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Nothing on Back"){outputtext = "";outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if($('#'+inpid).val() == ''){
outputtext = "";
outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose Size</option>';
outputtext = outputtext + '</select>';
}
 ---end old code--- */

for(i = 0; i < allprodshortnames.length; i++){
if($('#'+inpid).val() == allprodshortnames[i]){
outputtext = "";
outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
for(j = 0; j < allprodsizes[allprodshortnames[i]].length; j++){
outputtext = outputtext + '<option value="' + allproddescs[allprodshortnames[i]][j] + '">' + allprodsizes[allprodshortnames[i]][j] + '</option>';
}
outputtext = outputtext + '</select>';
}
}

if($('#'+inpid).val() == ''){
outputtext = "";
outputtext = outputtext + '<select class="form-control" name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

$('#'+receivingid).html(outputtext);



}
//---end generate button size drop down list--



//--change product back type image--
function changeProdTypeImage(inp){

if(!document.frm_single_item){
return;
}

calcprice();

//recode this section. just send the value off to php and have it return the html to write to $('#prod')
/*
if(inp.options[inp.selectedIndex].value == '1 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/1inchpinback.jpg" width="200" height="200" border="0" alt="1 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/1.5inchpinback.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/2.25inchpinback.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/3inchpinback.jpg" width="200" height="200" border="0" alt="3 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet1.jpg" width="200" height="200" border="0" alt="1 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet3.jpg" width="200" height="200" border="0" alt="3 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet3.jpg" width="200" height="200" border="0" alt="3 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with keychain back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with keychain back" /><br />Back: Keychain';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with keychain back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with keychain back" /><br />Back: Keychain';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with bottle opener back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/bottleopener25.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with bottle opener back" /><br />Back: Bottle Opener';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with mirror back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/mirror25.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with mirror back" /><br />Back: Mirror Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with mirror back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/mirror3.jpg" width="200" height="200" border="0" alt="3 inch round button with mirror back" /><br />Back: Mirror Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with clip back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clip225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with clip back" /><br />Back: Clip Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with clip back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clip3.jpg" width="200" height="200" border="0" alt="3 inch round button with clip back" /><br />Back: Clip Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback1.jpg" width="200" height="200" border="0" alt="1 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback3.jpg" width="200" height="200" border="0" alt="3 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}
}
*/

for(i = 0; i < allprodshortnames.length; i++){
for(j = 0; j < allproddescs[allprodshortnames[i]].length; j++){
if(inp.options[inp.selectedIndex].value == allproddescs[allprodshortnames[i]][j]){
var inphtml = "";
inphtml = inphtml + '<img src="' + allprodimages[allprodshortnames[i]][j] + '" width="200" height="200" border="0" alt="' + allproddescs[allprodshortnames[i]][j] + '" /><br />Back: ' + allprodshortnames[i];
$('#prod').html(inphtml);
}//end if
}//end for j
}//end for i

}

//--end change product back type image--



//---calc price---
function calcprice(){
if($('#pricedispcont').is(":hidden") && document.frm_single_item.os0.value != "" && document.frm_single_item.os0.value > 0 && document.frm_single_item.item_name.value != "" && document.frm_single_item.item_name.value != "none"){
$('#pricedispcont').show();
}

if(document.frm_single_item.os0.value != "" && document.frm_single_item.os0.value > 0 && document.frm_single_item.item_name.value != "" && document.frm_single_item.item_name.value != "none"){
document.getElementById('pricedisp').src = 'http://www.wackybuttons.com/smallprice.php?qty=' + document.frm_single_item.os0.value + '&buttonsize=' + document.frm_single_item.item_name.value;
}
}
//---end calc price---





//----function check single add to cart form-----
function checkSingleForm(inpform){
	if(inpform.os0.value=="0"){
		   alert("you need to enter a quantity greater than 0.");
   return false;
	}
		else if(inpform.os0.value==""){
		   alert("you need to enter a quantity.");
   return false;
	}
	else if(!/^\d+$/.test(inpform.os0.value)){
	 alert("The quantity you entered is invalid.");
   return false;
	}
else if (inpform.item_number.value=="")  
   {
   alert("you need to enter a Design Code");
   return false;
   }
else if (inpform.item_number.value.length!=7 && document.formx.item_number.value.length!=9)
{
alert("you need to enter a correct 7 digit Design Code");
return false;
}
else if(!inpform.item_name){
	alert("you must select a button size and a product type.");
return false;
	}
else if(inpform.item_name.value == "" || inpform.item_name.value == "none"){
alert("you must select a button size and a product type.");
return false;
}


return true;

}


//----end function check single add to cart form-----