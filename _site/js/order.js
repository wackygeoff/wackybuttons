
function info2(divID){
newcode = '<div align="left"><b>Adding Multiple Design Codes to your cart</b><br /> <br />';
newcode = newcode + '<ul><li>You can only add one product at a time<br /> <br /></li>';
newcode = newcode + '<li>Start by entering your first Design Code, choose a product and button size, then press the button that says "Add to Cart". This will submit the first Design Code to the shopping cart.<br /> <br /></li>';
newcode = newcode + '<li>To enter another Design Code, press the button that says "Continue Shopping" which will appear on the shopping cart page.<br /> <br /></li></ul></div>';
revealModal(divID, newcode);
}

function info3(divID){
newcode = '<div align="left"><b>What is a design code? How do I get one?</b><br /> <br />';
newcode = newcode + '<ul><li>We require that you design your buttons or have us design them before you pay for them.<br /> <br /></li>';
newcode = newcode + '<li>You will get a design code for each button design you create. The design code will be emailed to you.<br /> <br /></li>';
newcode = newcode + '<li>To get started on designing your buttons visit our create page: <a href="http://www.wackybuttons.com/create.php" target="_blank">www.wackybuttons.com/create.php</a> <br /> <br /></li></ul></div>';
revealModal(divID, newcode);
}

function info4(divID){
newcode = '<div align="left"><b>This chart shows the difference in button sizes in relation to a US Quarter (25 cent piece).</b><br /> <br />';
newcode = newcode + '<img src="http://www.wackybuttons.com/images/order/sizedifferences.gif" alt="" width="603" height="230" />';
newcode = newcode + '<br />The size of the button is based on the length of the diameter. For example: a 3 inch button has exactly a 3 inch diameter across the face of the button. Using a ruler will help you determine the exact size.<br /></div>';
revealModal(divID, newcode);
}



function showbig(photo){
newWindow = window.open(photo, 'newWindow', 'width=450, height=450, resizable=no, scrollbars=no, toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no');
}

function funShowHide(obj){
if(obj.style.display == 'block'){
obj.style.display = 'none';
}else{
obj.style.display = 'block';
}
}

function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}


function revealModal(divID, newcode)
{
    window.onscroll = function () { document.getElementById(divID).style.top = getScrollTop() + "px"; };
    document.getElementById(divID).style.display = "block";
    document.getElementById(divID).style.top = getScrollTop() + "px";

		document.getElementById('modalBody').innerHTML = newcode + '<br /> <br /><a href="javascript:hideModal(' + "'" + divID + "'" + ')">Close (X)</a>';
}

function hideModal(divID)
{
    document.getElementById(divID).style.display = "none";
}



function checkFields() {
	if(document.formx.os0.value=="0"){
		   alert("you need to enter a quantity greater than 0.");
   return false;
	}
		else if(document.formx.os0.value==""){
		   alert("you need to enter a quantity.");
   return false;
	}
else if (document.formx.item_number.value=="")  
   {
   alert("you need to enter a Design Code");
   return false;
   }
else if (document.formx.item_number.value.length!=7 && document.formx.item_number.value.length!=9)
{
alert("you need to enter a correct 7 digit Design Code");
return false;
}
else if(!document.formx.item_name){
	alert("you must select a product and a button size.");
return false;
	}
else if(document.formx.item_name.value == "" || document.formx.item_name.value == "none"){
alert("you must select a product and a button size.");
return false;
}


else 
   {return true;}
}



function changedesign(){
dccc = document.formx.item_number.value;

custdeshtml = '<a href="javascript:showbig(';
custdeshtml = custdeshtml + "'";
custdeshtml = custdeshtml + 'http://www.wackybuttons.com/designcodes/'+ dccc.substring(0,3) + '/' + dccc + '.jpg';
custdeshtml = custdeshtml + "'";
custdeshtml = custdeshtml + ');"><img id="customdesimg" src="http://www.wackybuttons.com/designcodes/'+ dccc.substring(0,3) + '/' + dccc + '.jpg" width="150" height="150" border="0" alt="'+dccc+' - click to see larger image" onerror="this.src=';
custdeshtml = custdeshtml + "'http://www.wackybuttons.com/images/designnotfound.jpg'";
custdeshtml = custdeshtml + ';" /></a>';


document.getElementById('dc').innerHTML = custdeshtml;

}


function toggleSize(){

if(document.formx.prodchooser.value == 'Standard Pin Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with locking pin back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with locking pin back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with locking pin back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with locking pin back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Refrigerator Magnet'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with magnet back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Clothing Magnet'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clothing magnet back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Keychain'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with keychain back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with keychain back">2.25 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Bottle Opener'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with bottle opener back">2.25 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Mirror Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with mirror back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with mirror back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Clip Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with clip back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with clip back">3 inch</option>';outputtext = outputtext + '</select>';}if(document.formx.prodchooser.value == 'Nothing on Back'){outputtext = "";outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);">';outputtext = outputtext + '<option value="">Choose a button size</option>';outputtext = outputtext + '<option value="1 inch round button with nothing on back">1 inch</option>';outputtext = outputtext + '<option value="1-1/2 inch round button with nothing on back">1.5 inch</option>';outputtext = outputtext + '<option value="2-1/4 inch round button with nothing on back">2.25 inch</option>';outputtext = outputtext + '<option value="3 inch round button with nothing on back">3 inch</option>';outputtext = outputtext + '</select>';}
if(document.formx.prodchooser.value == ''){
outputtext = "";
outputtext = outputtext + '<select name="item_name" onchange="javascript:changetype(this);" disabled="disabled">';
outputtext = outputtext + '<option value="">Choose a button size</option>';
outputtext = outputtext + '</select>';
}

document.getElementById('sizechooser').innerHTML = outputtext;
}



function changetype(inp){

calcprice();


if(inp.options[inp.selectedIndex].value == "3 inch round button with magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet3.jpg" width="150" height="150" border="0" alt="3 inch button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with mirror back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/mirror3.jpg" width="150" height="150" border="0" alt="3 inch button with mirror back" /><br />Back: Mirror';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with locking pin back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/3inchpinback.jpg" width="150" height="150" border="0" alt="3 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with locking pin back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/2.25inchpinback.jpg" width="150" height="150" border="0" alt="2.25 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet225.jpg" width="150" height="150" border="0" alt="2.25 inch button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with mirror back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/mirror25.jpg" width="150" height="150" border="0" alt="2.25 inch button with mirror back" /><br />Back: Mirror';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with bottle opener back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/bottleopener25.jpg" width="150" height="150" border="0" alt="2.25 inch button with bottle opener back" /><br />Back: Bottle Opener';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with keychain back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="150" height="150" border="0" alt="2.25 inch button with keychain back" /><br />Back: Keychain';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with keychain back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/1.5inchkeychainback.jpg" width="150" height="150" border="0" alt="1.5 inch button with keychain back" /><br />Back: Keychain';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with locking pin back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/1.5inchpinback.jpg" width="150" height="150" border="0" alt="1.5 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with nothing on back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with locking pin back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/1inchpinback.jpg" width="150" height="150" border="0" alt="1 inch button with locking pin back" /><br />Back: Pin back';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/magnet1.jpg" width="150" height="150" border="0" alt="1 inch round button with magnet back" /><br />Back: Magnet';
}
else if(inp.options[inp.selectedIndex].value == "1 inch round button with nothing on back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback1.jpg" width="150" height="150" border="0" alt="1 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with nothing on back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with nothing on back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/noback3.jpg" width="150" height="150" border="0" alt="3 inch round button with nothing on back" /><br />Back: Nothing';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with clip back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clip225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with clip back" /><br />Back: Clip back';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with clip back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clip3.jpg" width="150" height="150" border="0" alt="3 inch round button with clip back" /><br />Back: Clip back';
}
else if(inp.options[inp.selectedIndex].value == "1-1/2 inch round button with clothing magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet15.jpg" width="150" height="150" border="0" alt="1-1/2 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}
else if(inp.options[inp.selectedIndex].value == "2-1/4 inch round button with clothing magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet225.jpg" width="150" height="150" border="0" alt="2-1/4 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}
else if(inp.options[inp.selectedIndex].value == "3 inch round button with clothing magnet back"){
document.getElementById('prod').innerHTML = '<img src="http://www.wackybuttons.com/images/backs/clothingmagnet3.jpg" width="150" height="150" border="0" alt="3 inch round button with clothing magnet back" /><br />Back: Clothing Magnet';
}

}

function checkdc(){

if(document.formx.item_number.value.length == 7){
changedesign();
}

}

function clearform(){
document.getElementById('pricedispcont').style.display = 'none';
document.getElementById('backtype').innerHTML = "";
document.getElementById('prod').innerHTML = "";
document.getElementById('dc').innerHTML = "";
}

function calcprice(){
if(document.getElementById('pricedispcont').style.display == 'none' && document.formx.os0.value != "" && document.formx.os0.value > 0 && document.formx.item_name.value != "" && document.formx.item_name.value != "none"){
document.getElementById('pricedispcont').style.display = 'block';
}

if(document.formx.os0.value != "" && document.formx.os0.value > 0 && document.formx.item_name.value != "" && document.formx.item_name.value != "none"){
document.getElementById('pricedisp').src = 'http://www.wackybuttons.com/smallprice.php?qty=' + document.formx.os0.value + '&buttonsize=' + document.formx.item_name.value;
}
}
