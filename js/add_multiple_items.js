//functions needed to add a multiple items to the shopping cart
//add_single_item.js needs to be included in the same html or php file for these functions to work


//---Add Multiple Items Popup---
function addMultipleItems(){

var designcodes = new Array();
var titlet = new Array();
designcodes[0] = "5097325";designcodes[1] = "5091829";designcodes[2] = "5091827";designcodes[3] = "5085850";designcodes[4] = "5085282";designcodes[5] = "5085192";designcodes[6] = "5085130";designcodes[7] = "5081890";designcodes[8] = "5056456";designcodes[9] = "5056455";designcodes[10] = "5055401";designcodes[11] = "5054146";designcodes[12] = "5054144";designcodes[13] = "5054137";designcodes[14] = "5052449";designcodes[15] = "5052076";designcodes[16] = "5052075";designcodes[17] = "5052074";designcodes[18] = "5051383";designcodes[19] = "5051308";designcodes[20] = "5046425";designcodes[21] = "5045670";designcodes[22] = "5045181";designcodes[23] = "5044053";designcodes[24] = "5044052";designcodes[25] = "5043972";designcodes[26] = "5043970";designcodes[27] = "5030292";designcodes[28] = "5028558";designcodes[29] = "5028061";designcodes[30] = "5027910";designcodes[31] = "5026854";designcodes[32] = "5024481";designcodes[33] = "5024330";titlet[0] = " ";titlet[1] = " ";titlet[2] = " ";titlet[3] = " ";titlet[4] = " ";titlet[5] = " ";titlet[6] = " ";titlet[7] = " ";titlet[8] = " ";titlet[9] = " ";titlet[10] = " ";titlet[11] = " ";titlet[12] = " ";titlet[13] = " ";titlet[14] = " ";titlet[15] = " ";titlet[16] = " ";titlet[17] = " ";titlet[18] = " ";titlet[19] = " ";titlet[20] = " ";titlet[21] = " ";titlet[22] = " ";titlet[23] = " ";titlet[24] = " ";titlet[25] = " ";titlet[26] = " ";titlet[27] = " ";titlet[28] = " ";titlet[29] = " ";titlet[30] = " ";titlet[31] = " ";titlet[32] = " ";titlet[33] = " ";

$('#dialog_title').html("Add multiple items to your cart");

inpcode = '<div align="center" style="background-color:#ffffff;padding:5px;">';
inpcode = inpcode + '<form name="frm_add_multiple" action="http://www.wackybuttons.com/shopcart.php" onsubmit="return checkMultipleForm(this, 34);" method="post" enctype="application/x-www-form-urlencoded" id="frm_add_multiple" target="cart" style="color:black;">';
inpcode = inpcode + '<input type="hidden" name="operation" value="addmultipletocart" />';

inpcode = inpcode + '<div class="container" style="max-width:550px;">';

inpcode = inpcode + '<div class="row">';
inpcode = inpcode + '<div class="col-md-12  multiple-add-cell">';
inpcode = inpcode + '<b>Change All Items Below:</b>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';


//--next row
inpcode = inpcode + '<div class="row">';
inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + 'Check All <br /><input type="checkbox" id="main_checkbox" onchange="javascript:checkAllItems(34);" />';
inpcode = inpcode + '</div>';//col-md-2

inpcode = inpcode + '<div class="col-md-4 multiple-add-cell">';
inpcode = inpcode + 'Product <br /><select name="main_prodchooser" id="main_prodchooser" class="form-control" onchange="javascript:changeAllProds(this.value, 34);">';
inpcode = inpcode + '<option value="">Choose Product</option>';
inpcode = inpcode + '<option value="Standard Pin Back">Standard Pin Back</option>';
inpcode = inpcode + '<option value="Refrigerator Magnet">Refrigerator Magnet</option>';
inpcode = inpcode + '<option value="Clothing Magnet">Clothing Magnet</option>';
inpcode = inpcode + '<option value="Bottle Opener">Bottle Opener</option>';
inpcode = inpcode + '<option value="Mirror Back">Mirror Back</option>';
inpcode = inpcode + '<option value="Clip Back">Clip Back</option>';
inpcode = inpcode + '<option value="Nothing on Back">Nothing on Back</option>';

inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-4 multiple-add-cell">';
inpcode = inpcode + 'Size <br /><div id="main_sizechooser_cont">';
inpcode = inpcode + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" disabled="disabled" onchange="javascript:changeAllSizes(34);">';
inpcode = inpcode + '<option value="">Choose Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + 'Quantity <br /><input type="text" name="main_qty" id="main_qty" class="form-control" style="max-width:100px;" maxlength="30" size="5" value="" onchange="changeAllQtys(34);" /><br /><a href="javascript:changeAllQtys(34);" style="color:blue;font-size:12px;">apply</a>';
inpcode = inpcode + '</div>'; //col-md-2

inpcode = inpcode + '</div>'; //row
//--end next row

//--next row
for(i = 0; i < designcodes.length; i++){


inpcode = inpcode + '<div class="row">';
inpcode = inpcode + '<div class="col-md-12">';
inpcode = inpcode + '<hr>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';


inpcode = inpcode + '<div class="row">';
inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + '<input type="checkbox" name="checked_'+i+'" id="checked_'+i+'" value="yes" /><br /><b>'+designcodes[i]+'</b><br />';
inpcode = inpcode + '<input type="hidden" name="title_'+i+'" value="'+titlet[i]+'" />';
inpcode = inpcode + '<input type="hidden" name="item_number_'+i+'" id="item_number_'+i+'" value="'+designcodes[i]+'" />';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/designcodes/'+designcodes[i].substr(0, 3)+"/"+designcodes[i]+'.jpg" border="0" alt="" width="50" height="50" />';
inpcode = inpcode + '</div>';//col-md-2
inpcode = inpcode + '<div class="col-md-4 multiple-add-cell">';
inpcode = inpcode + 'Product<br />';
inpcode = inpcode + '<select name="prod_chooser_'+i+'" id="prod_chooser_'+i+'" class="form-control" onchange="javascript:genButtonSizeDD('+"'"+'prod_chooser_'+i+"'"+', '+"'"+'size_chooser_cont_'+i+"'"+', '+"'"+'item_name_'+i+"'"+');">';
inpcode = inpcode + '<option value="">Choose Product</option>';
inpcode = inpcode + '<option value="Standard Pin Back">Standard Pin Back</option>';
inpcode = inpcode + '<option value="Refrigerator Magnet">Refrigerator Magnet</option>';
inpcode = inpcode + '<option value="Clothing Magnet">Clothing Magnet</option>';
inpcode = inpcode + '<option value="Bottle Opener">Bottle Opener</option>';
inpcode = inpcode + '<option value="Mirror Back">Mirror Back</option>';
inpcode = inpcode + '<option value="Clip Back">Clip Back</option>';
inpcode = inpcode + '<option value="Nothing on Back">Nothing on Back</option>';

inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-4 multiple-add-cell">';
inpcode = inpcode + 'Size<br />';
inpcode = inpcode + '<div id="size_chooser_cont_'+i+'">';
inpcode = inpcode + '<select name="item_name_'+i+'" id="item_name_'+i+'" class="form-control" disabled="disabled">';
inpcode = inpcode + '<option value="">Choose Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + 'Quantity<br />';
//inpcode = inpcode + '<input type="hidden" name="on0_'+i+'" value="number of buttons" />'; ------may not need
inpcode = inpcode + '<input type="text" name="os0_'+i+'" id="os0_'+i+'" class="form-control" style="max-width:100px;" maxlength="30" size="5" value="" />';
inpcode = inpcode + '</div>'; //col-md-2
inpcode = inpcode + '</div>'; //row


}//end for i

inpcode = inpcode + '</div>';//container

inpcode = inpcode + '<input type="image" name="Submit" value="Add Checked Items to Cart" alt="Add Checked Items to Cart" src="http://www.wackybuttons.com/images/order/addcheckedcart.gif" style="border:0px;" />';

inpcode = inpcode + '</form>';

//inpcode = inpcode + '<br /><a href="javascript:closeJDialog();">Close [X]</a></div>';


//$('#jDialog').dialog("option", "title", "Order Multiple Buttons");
//$('#jDialog').dialog("option", "width", 600);
//$('#jDialog').dialog("option", "height", 500);
$('#dialog_content').html(inpcode);
//$('#jDialog').dialog("open");

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);

}
//---End Add Multiple Items Popup---


function changeAllSizes(totalelems){
for(i = 0; i < totalelems; i++){
$('#prod_chooser_'+i).val($('#main_prodchooser').val()).change();
$('#item_name_'+i).val($('#main_sizechooser').val());
}
}

function checkAllItems(totalelems){
for(i = 0; i < totalelems; i++){
$('#checked_'+i).prop('checked', $('#main_checkbox').prop('checked'));
}
}

function changeAllQtys(totalelems){
for(i = 0; i < totalelems; i++){
$('#os0_'+i).val($('#main_qty').val());
}
}



//---generate button size drop down list for all products multiple add to cart--
//---multiple items add to cart function--
function changeAllProds(inpval, totalelems){

//recode this section
//send $('#main_prodchooser').val() and totalelems off to php

if($('#main_prodchooser').val() == "Standard Pin Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser"  id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Refrigerator Magnet"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Clothing Magnet"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Keychain"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Bottle Opener"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser"  class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Mirror Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Clip Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Nothing on Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose Size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if($('#main_prodchooser').val() == ''){
outputtext = "";
outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" class="form-control" disabled="disabled" onchange="javascript:changeAllSizes(34);">';
outputtext = outputtext + '<option value="">Choose Size</option>';
outputtext = outputtext + '</select>';
}

$('#main_sizechooser_cont').html(outputtext);



for(i = 0; i < totalelems; i++){
$('#prod_chooser_'+i).val(inpval);
//recode this section
//using genButtonSizeDD will hit php a lot
//we should try to get around this somehow
genButtonSizeDD("prod_chooser_"+i, "size_chooser_cont_"+i, "item_name_"+i);
}
}
//---end multiple items add to cart function--
//---generate button size drop down list for all products multiple add to cart--



//----function check multiple add to cart form-----
function checkMultipleForm(inpform, numelements){

var anythingechecked = false;

for(i=0; i<numelements; i++){

if($('#checked_'+i).is(':checked')){

anythingechecked = true;

	if($('#os0_'+i).val()=="0"){
		   alert("you need to enter a quantity greater than 0 for "+$('#item_number_'+i).val());
   return false;
	}
		else if($('#os0_'+i).val()==""){
		   alert("you need to enter a quantity for "+$('#item_number_'+i).val());
   return false;
	}
		else if(!/^\d+$/.test($('#os0_'+i).val())){
	 alert("The quantity you entered is invalid.");
   return false;
	}
//else if ($('#item_number_'+i).val()=="")  
//   {
//   alert("you need to enter a Design Code");
//   return false;
//   }
//else if ($('#item_number_'+i).val().length!=7 && $('#item_number_'+i).val().length!=9)
//{
//alert("you need to enter a correct 7 digit Design Code");
//return false;
//}
else if(!$('#item_name_'+i)){
	alert("you must select a button size and a product type for "+$('#item_number_'+i).val());
return false;
	}
else if($('#item_name_'+i).val() == "" || $('#item_name_'+i).val() == "none"){
alert("you must select a button size and a product type for "+$('#item_number_'+i).val());
return false;
}

}//end if checked

}//end for i

if(anythingechecked == false){
alert("You did not check any items. Please check the checkboxes next items you want to add to your cart.");
return false;
}

return true;

}
//----function check multiple add to cart form-----