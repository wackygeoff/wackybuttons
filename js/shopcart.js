function funShowHide(obj){
if(obj.style.display == 'block'){
obj.style.display = 'none';
}else{obj.style.display = 'block';
}
}
function emailcart(){
$('#dialog_title').html("Email this cart");

inpcode = '<form name="emailcart" method="post" action="http://www.wackybuttons.com/shopcart.php">';
inpcode = inpcode + '<input type="hidden" name="operation" value="emailcart">';
inpcode = inpcode + 'Email the contents of this cart to:<br /> <br />';
inpcode = inpcode + 'Your Email Address:<br /><input type="text" name="email" value="" size="40" maxlength="200"><br />';
inpcode = inpcode + 'Email Subject:<br /><input type="text" name="subject" value="" size="30" maxlength="200"><br />';
inpcode = inpcode + 'Message:<br /><textarea cols="30" rows="5" name="message"></textarea><br /> <br />';
inpcode = inpcode + 'Check this box if you also want to send this information to Wacky Buttons, Inc. Customer Service for help? <input type="checkbox" name="wackyservice" value="yes"><br />';
inpcode = inpcode + '<br /><input type="submit" name="submit" value="Email Cart"><br />';
inpcode = inpcode + '</form>';

$('#dialog_content').html(inpcode);
}

function pickuploc(){<br />
$('#dialog_title').html("Pick up location");
inpcode = 'Wacky Buttons, Inc.<br />101 Lincoln Parkway Suite A<br />East Rochester, NY 14445<br /> <br />';
inpcode = inpcode + '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Wacky+Buttons,+East+Rochester,+NY&amp;aq=1&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,56.953125&amp;vpsrc=0&amp;ie=UTF8&amp;hq=Wacky+Buttons,&amp;hnear=East+Rochester,+Monroe,+New+York&amp;t=m&amp;ll=43.11617,-77.480596&amp;spn=0.016491,0.01518&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Wacky+Buttons,+East+Rochester,+NY&amp;aq=1&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,56.953125&amp;vpsrc=0&amp;ie=UTF8&amp;hq=Wacky+Buttons,&amp;hnear=East+Rochester,+Monroe,+New+York&amp;t=m&amp;ll=43.11617,-77.480596&amp;spn=0.016491,0.01518" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
$('#dialog_content').html(inpcode);
}

function streetaddyhelp(){
$('#dialog_title').html("About Address (Line 2)");
inpcode = '<ul><li>You can enter your apartment number, suite number, floor number, etc... on this line.</li><li>You can also use this line if your address is just really long and you just need more room to write your address.</li><li>If you have more than 2 lines in your address, you can combine 2 lines onto one line by separateing them with a comma(,).</li><li>If you have any questions about inputting your shipping address please feel free to ask. We would be glad to help you out (Our phone number is 585-267-7670).</li></ul>';
$('#dialog_content').html(inpcode);
}

function wackyshiphelp(){
$('#dialog_title').html("About Wacky Saver Shipping");
inpcode = 'This option saves you money because we get to choose how we ship your package. Your package will ship either UPS Ground, USPS Priority Mail Flat Rate, or USPS Parcel Select depending on availablility. A tracking number is provided automatically by email after your order ships.';
$('#dialog_content').html(inpcode);
}
function decodeshipping(inp){
var build = false;
var method = "";
var shipcost = "";
for(i = 0; i <= inp.value.length; i ++){
if (inp.value.charAt(i) == "+"){
build = true;
}
if (build == false && inp.value.charAt(i) != "+"){
method = method + inp.value.charAt(i);
}
if (build == true && inp.value.charAt(i) != "+"){
shipcost = shipcost + inp.value.charAt(i);
}
}
document.checkout.item_name_3.value = method;
document.checkout.amount_3.value = shipcost;
}
function checkpg1(){checker = 'no';
for(var i=0; i<document.contents.paymenu.length; i++){if(document.contents.paymenu[i].checked){checker="yes";}
}
if(checker=='no'){
alert("You need to select a payment method");return false;}else{
return true;}
}
function changewin(){
window.close();
window.opener.focus();
}
function checkallshippable(){
checkboxes0 = document.getElementById("checkBoxes0");
if(checkboxes0.checked == true){
checkboxes0.checked = false;
}else{
checkboxes0.checked = true;
}checkboxes1 = document.getElementById("checkBoxes1");
if(checkboxes1.checked == true){checkboxes1.checked = false;
}else{checkboxes1.checked = true;
}
}