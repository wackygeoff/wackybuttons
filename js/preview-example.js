
//-------------global settings------------------
//preload back of button image for store
var $preloadimage = new Image();
$preloadimage.src = "http://www.wackybuttons.com/images/backofbutton.jpg";
//-------------end global settings------------------

//-------------begin functions------------------

function show_hide(inp){
$("div[id='"+inp+"']").toggle();
}

function show_large_photo(photo){
$('#dialog_title').html("Button Design Preview");
//inpcode = '<div style="border:1px solid black;">';
inpcode = '<img src="' + photo + '" width="400" height="400" style="display:block;margin-left:auto;margin-right:auto;" />';
//inpcode = inpcode + '</div>';
$('#dialog_content').html(inpcode);
}

function show_size_info(){

$('#dialog_title').html("Button Sizes");
inpcode = '<div style="overflow-x:scroll;text-align:left;">';
inpcode = inpcode + '<b>This chart shows the difference in button sizes in relation to a US Quarter (25 cent piece).</b><br /> <br />';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/images/order/sizedifferences.gif" alt="" width="603" height="230" />';
inpcode = inpcode + '<br />The size of the button is based on the length of the diameter. For example: a 3 inch button has exactly a 3 inch diameter across the face of the button. Using a ruler will help you determine the exact size.';
inpcode = inpcode + '<br /> <br /></div>';
$('#dialog_content').html(inpcode);
}



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



//---generate button size drop down list--
function genButtonSizeDD(inpid, receivingid, itemid){

if($('#'+inpid).val() == "Standard Pin Back"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Refrigerator Magnet"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Clothing Magnet"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Keychain"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Bottle Opener"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Mirror Back"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Clip Back"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#'+inpid).val() == "Nothing on Back"){outputtext = "";outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if($('#'+inpid).val() == ''){
outputtext = "";
outputtext = outputtext + '<select name="'+itemid+'" id="'+itemid+'" onchange="javascript:changeProdTypeImage(this);" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

$('#'+receivingid).html(outputtext);

}
//---end generate button size drop down list--




//---generate button size drop down list for all products multiple add to cart--
function changeAllProds(inpval, totalelems){

if($('#main_prodchooser').val() == "Standard Pin Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Refrigerator Magnet"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Clothing Magnet"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Keychain"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Bottle Opener"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Mirror Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Clip Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if($('#main_prodchooser').val() == "Nothing on Back"){outputtext = "";outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" onchange="javascript:changeAllSizes(34);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if($('#main_prodchooser').val() == ''){
outputtext = "";
outputtext = outputtext + '<select name="main_sizechooser" id="main_sizechooser" disabled="disabled" onchange="javascript:changeAllSizes(34);">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

$('#main_sizechooser_cont').html(outputtext);



for(i = 0; i < totalelems; i++){
$('#prod_chooser_'+i).val(inpval);
genButtonSizeDD("prod_chooser_"+i, "size_chooser_cont_"+i, "item_name_"+i);
}
}
//---generate button size drop down list for all products multiple add to cart--


//--change product back type image--
function changeProdTypeImage(inp){

if(!document.frm_single_item){
return;
}

calcprice();

if(inp.options[inp.selectedIndex].value == '1 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/1inchpinback.jpg" width="200" height="200" border="0" alt="1 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/1.5inchpinback.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/2.25inchpinback.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with locking pin back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/3inchpinback.jpg" width="200" height="200" border="0" alt="3 inch round button with locking pin back" /><br />Back: Standard Pin Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet1.jpg" width="200" height="200" border="0" alt="1 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/magnet3.jpg" width="200" height="200" border="0" alt="3 inch round button with magnet back" /><br />Back: Refrigerator Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with clothing magnet back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet3.jpg" width="200" height="200" border="0" alt="3 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with keychain back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with keychain back" /><br />Back: Keychain';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with keychain back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with keychain back" /><br />Back: Keychain';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with bottle opener back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/bottleopener25.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with bottle opener back" /><br />Back: Bottle Opener';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with mirror back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/mirror25.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with mirror back" /><br />Back: Mirror Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with mirror back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/mirror3.jpg" width="200" height="200" border="0" alt="3 inch round button with mirror back" /><br />Back: Mirror Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with clip back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clip225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with clip back" /><br />Back: Clip Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with clip back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/clip3.jpg" width="200" height="200" border="0" alt="3 inch round button with clip back" /><br />Back: Clip Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback1.jpg" width="200" height="200" border="0" alt="1 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '1-1/2 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback15.jpg" width="200" height="200" border="0" alt="1-1/2 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '2-1/4 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback225.jpg" width="200" height="200" border="0" alt="2-1/4 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}if(inp.options[inp.selectedIndex].value == '3 inch round button with nothing on back'){var inphtml = "";inphtml = inphtml + '<img src="http://www.wackybuttons.com/images/backs/noback3.jpg" width="200" height="200" border="0" alt="3 inch round button with nothing on back" /><br />Back: Nothing on Back';$('#prod').html(inphtml);}
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





//---More Details Popup---
function moreDetails(designcode, titlet){

$('#dialog_title').html("Add to cart");

var inpcode = "";

inpcode = '<div align="center">';
inpcode = inpcode + '<div align="center">';
inpcode = inpcode + '<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="top" align="center">';

inpcode = inpcode + '<div>';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/designcodes/' + designcode.substring(0,3) + '/' + designcode +'.jpg" width="200" height="200" border="0" />';
inpcode = inpcode + '<div style="margin-bottom:10px;font-size:16px;"><b>Design Code: </b><div style="border:2px solid black;display:inline;padding:2px;"><b>' + designcode +'</b></div></div>';
inpcode = inpcode + '</div>';

inpcode = inpcode + '</td><td valign="top" align="center">';
inpcode = inpcode + '<div id="prod">';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/images/backofbutton.jpg" width="200" height="200" border="0" alt="Preview of what the back of your button will look like will show here after you choose a product type in the form above." />';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</td></tr></table>';
inpcode = inpcode + '</div>';


inpcode = inpcode + '<form name="frm_single_item" action="http://www.wackybuttons.com/shopcart.php" onsubmit="return checkSingleForm(this);" method="post" enctype="application/x-www-form-urlencoded" id="inpcode" target="cart">';
inpcode = inpcode + '<input type="hidden" name="operation" value="addtocart" />';
inpcode = inpcode + '<input type="hidden" name="title" value="'+titlet+'" />';
inpcode = inpcode + '<input type="hidden" name="item_number" value="' + designcode + '" />';

inpcode = inpcode + '<table summary="" align="center" cellpadding="10" cellspacing="0">';
inpcode = inpcode + '<tr>';
inpcode = inpcode + '<td font-weight:bold; font-size:12pt;">';

inpcode = inpcode + 'Choose a Product:';
inpcode = inpcode + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="5" alt="" />';
inpcode = inpcode + '<select name="prod_chooser" id="prod_chooser" onchange="javascript:genButtonSizeDD('+"'"+'prod_chooser'+"'"+', '+"'"+'size_chooser'+"'"+', '+"'"+'item_name'+"'"+');">';
inpcode = inpcode + '<option value="">Choose a Product</option>';

inpcode = inpcode + '<option value="Standard Pin Back">Standard Pin Back</option>';
inpcode = inpcode + '<option value="Refrigerator Magnet">Refrigerator Magnet</option>';
inpcode = inpcode + '<option value="Clothing Magnet">Clothing Magnet</option>';
inpcode = inpcode + '<option value="Bottle Opener">Bottle Opener</option>';
inpcode = inpcode + '<option value="Mirror Back">Mirror Back</option>';
inpcode = inpcode + '<option value="Clip Back">Clip Back</option>';
inpcode = inpcode + '<option value="Nothing on Back">Nothing on Back</option>';

inpcode = inpcode + '</select>';

inpcode = inpcode + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="10" alt="" />';
inpcode = inpcode + 'Choose a Button Size:';
inpcode = inpcode + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="5" alt="" />';
inpcode = inpcode + '<div id="size_chooser">';
inpcode = inpcode + '<select name="item_name" onchange="javascript:changeProdTypeImage(this);" disabled="disabled">';
inpcode = inpcode + '<option value="">Choose a Button Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '<a href="javascript:show_size_info();" class="smalllink">See Size Differences</a>';


inpcode = inpcode + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="10" alt="" />';
inpcode = inpcode + 'Quantity: <input type="hidden" name="on0" value="number of buttons" />';
inpcode = inpcode + '<input type="text" name="os0" maxlength="30" size="9" value="" /><br /> <br />';
inpcode = inpcode + '<input name="button" type="button" value=" calculate price " onclick="javascript:calcprice();" />';
inpcode = inpcode + '<div id="pricedispcont" style="display:none;"><iframe name="pricedisp" id="pricedisp" height="35" width="150" scrolling="no" src="" frameborder="0">Could not calculate price. Press "Add To Cart" Below to view the price of the item in your shopping cart.</iframe></div>';


inpcode = inpcode + '</td>';
inpcode = inpcode + '</tr>';
inpcode = inpcode + '</table>';

inpcode = inpcode + '<br /><img src="http://www.wackybuttons.com/images/spacer.gif" width="1" height="5" alt="" />';
inpcode = inpcode + '<input type="image" name="Submit" value="Add to Cart" alt="Add to Cart" src="http://www.wackybuttons.com/images/order/addtocart.gif" style="border:0px;" />';
inpcode = inpcode + '</form>';
//inpcode = inpcode + '<br /> <br />';
//inpcode = inpcode + '<a href="javascript:closeJDialog();">Close [X]</a></div>';

//$('#jDialog').dialog("option", "title", "Order This Button");
//('#jDialog').dialog("option", "width", 520);
//$('#jDialog').dialog("option", "height", 650);
$('#dialog_content').html(inpcode);
//$('#jDialog').dialog("open");

}
//---End More Details Popup---





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
inpcode = inpcode + 'Product <br /><select name="main_prodchooser" id="main_prodchooser" onchange="javascript:changeAllProds(this.value, 34);">';
inpcode = inpcode + '<option value="">Choose a Product</option>';
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
inpcode = inpcode + '<select name="main_sizechooser" id="main_sizechooser" disabled="disabled" onchange="javascript:changeAllSizes(34);">';
inpcode = inpcode + '<option value="">Choose a Button Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + 'Quantity <br /><input type="text" name="main_qty" id="main_qty" maxlength="30" size="5" value="" onchange="changeAllQtys(34);" /><br /><a href="javascript:changeAllQtys(34);" style="color:blue;font-size:12px;">apply</a>';
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
inpcode = inpcode + '<img src="http://www.wackybuttons.com/designcodes/'+designcodes[i].substr(0, 3)+"/"+designcodes[i]+'.jpg" border="0" alt="" style="max-width:50px;" />';
inpcode = inpcode + '</div>';//col-md-2
inpcode = inpcode + '<div class="col-md-4 multiple-add-cell">';
inpcode = inpcode + 'Product<br />';
inpcode = inpcode + '<select name="prod_chooser_'+i+'" id="prod_chooser_'+i+'"  onchange="javascript:genButtonSizeDD('+"'"+'prod_chooser_'+i+"'"+', '+"'"+'size_chooser_cont_'+i+"'"+', '+"'"+'item_name_'+i+"'"+');">';
inpcode = inpcode + '<option value="">Choose a Product</option>';
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
inpcode = inpcode + '<select name="item_name_'+i+'" id="item_name_'+i+'" disabled="disabled">';
inpcode = inpcode + '<option value="">Choose a Button Size</option>';
inpcode = inpcode + '</select>';
inpcode = inpcode + '</div>';
inpcode = inpcode + '</div>';//col-md-4

inpcode = inpcode + '<div class="col-md-2 multiple-add-cell">';
inpcode = inpcode + 'Quantity<br />';
//inpcode = inpcode + '<input type="hidden" name="on0_'+i+'" value="number of buttons" />'; ------may not need
inpcode = inpcode + '<input type="text" name="os0_'+i+'" id="os0_'+i+'" maxlength="30" size="5" value="" />';
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
}
//---End Add Multiple Items Popup---


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


//----function check single add to cart form-----


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


function designChangeReq(designcodenum){
$('#dialog_title').html("Change Design Code: "+ designcodenum);
inpcode = '<div align="left" style="font-family:Century Gothic, Arial, Helvetica, Verdana, MS Serif;font-size:10pt;line-height:16px;">';
inpcode = inpcode + 'Because this design is already finalized, you are not able to edit this design yourself. Only one of our artists can change the design for you. Please describe what you would like to see changed and we will make the changes for you.';
inpcode = inpcode + '<br /> <br /><form action="http://www.wackybuttons.com/formemail/designchange/designchange.php" method="post">';
inpcode = inpcode + '<input type="hidden" name="design_code" value="'+designcodenum+'">';
inpcode = inpcode + 'Design Change Request:<br /><textarea name="ChangeRequest" rows="7" cols="40"></textarea>';
inpcode = inpcode + '<br /> <br /><img src="http://www.wackybuttons.com/images/captcha/5.gif" alt="" style="border:black 2px solid;"><br />Please type the word you see in the box above: <input type="text" name="captcha" value="" /><br />(This way we know you are not a robot spammer)';
inpcode = inpcode + '<input type="hidden" name="ar_subject" value="Wacky Buttons Change Request" />';
inpcode = inpcode + '<input type="hidden" name="comingfrom" value="http://www.wackybuttons.com/order.php" />';
inpcode = inpcode + '<br /> <br /><input type="submit" value="Submit your design change request">';
inpcode = inpcode + '</form>';
inpcode = inpcode + 'Once we complete your request, you will receive an email with a link to view the new button design. Design requests can take up to one business day to complete. If you are submitting your design change during our regular business hours (9-5, M-F), your design change will usually get completed within 1 hour from the time you submit this form. ';
inpcode = inpcode + '</div>';

$('#dialog_content').html(inpcode);
}

function info1(){
$('#dialog_title').html("What is a design code?");
inpcode = '<div align="left" style="font-family:Century Gothic, Arial, Helvetica, Verdana, MS Serif;font-size:10pt;line-height:16px;">';
inpcode = inpcode + 'It is a unique number that represents a design in our system. We use the Design Code to lookup and print your button design. The design code will never change so you can use it to order buttons anytime in the future.';
inpcode = inpcode + '</div>';
$('#dialog_content').html(inpcode);
}
