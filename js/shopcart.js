/*
function funShowHide(obj){
if(obj.style.display == 'block'){
obj.style.display = 'none';
}else{obj.style.display = 'block';
}
}
*/

function emailcart(){
$('#dialog_title').html("Email this cart");

inpcode = '<form name="emailcart" method="post" action="http://www.wackybuttons.com/shopcart.php">';
inpcode = inpcode + '<input type="hidden" name="operation" value="emailcart">';
inpcode = inpcode + 'Email the contents of this cart to:<br /> <br />';
inpcode = inpcode + 'Your Email Address:<br /><input type="text" class="form-control med-field" name="email" value="" size="40" maxlength="200"><br />';
inpcode = inpcode + 'Email Subject:<br /><input type="text" class="form-control med-field" name="subject" value="" size="30" maxlength="200"><br />';
inpcode = inpcode + 'Message:<br /><textarea cols="30" class="form-control" rows="5" name="message"></textarea><br /> <br />';
inpcode = inpcode + 'Check this box if you also want to send this information to Wacky Buttons, Inc. Customer Service for help? <input type="checkbox" name="wackyservice" value="yes"><br />';
inpcode = inpcode + '<br /><input type="submit" class="btn btn-default btn-wacky" name="submit" value="Email Your Cart"><br />';
inpcode = inpcode + '</form>';

$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}


function upsg_map(){
$('#dialog_title').html("UPS Ground Map");
inpcode = 'This map, provided by UPS, shows how long your package will take to receive from our location if you were to ship using UPS Ground.';
inpcode = inpcode + '<div style="overflow-x:scroll;"><img src="http://www.wackybuttons.com/images/UPSGMap.gif" alt=""></div>';

$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}

function pickuploc(){
$('#dialog_title').html("Pick up location");
inpcode = 'Wacky Buttons, Inc.<br />101 Lincoln Parkway Suite A<br />East Rochester, NY 14445<br /> <br />';
inpcode = inpcode + '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Wacky+Buttons,+East+Rochester,+NY&amp;aq=1&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,56.953125&amp;vpsrc=0&amp;ie=UTF8&amp;hq=Wacky+Buttons,&amp;hnear=East+Rochester,+Monroe,+New+York&amp;t=m&amp;ll=43.11617,-77.480596&amp;spn=0.016491,0.01518&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Wacky+Buttons,+East+Rochester,+NY&amp;aq=1&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,56.953125&amp;vpsrc=0&amp;ie=UTF8&amp;hq=Wacky+Buttons,&amp;hnear=East+Rochester,+Monroe,+New+York&amp;t=m&amp;ll=43.11617,-77.480596&amp;spn=0.016491,0.01518" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}

function streetaddyhelp(){
$('#dialog_title').html("About Address (Line 2)");
inpcode = '<ul><li>You can enter your apartment number, suite number, floor number, etc... on this line.</li><li>You can also use this line if your address is just really long and you just need more room to write your address.</li><li>If you have more than 2 lines in your address, you can combine 2 lines onto one line by separateing them with a comma(,).</li><li>If you have any questions about inputting your shipping address please feel free to ask. We would be glad to help you out (Our phone number is 585-267-7670).</li></ul>';
$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}

function wackyshiphelp(){
$('#dialog_title').html("About Wacky Saver Shipping");
inpcode = 'This option saves you money because we get to choose how we ship your package.<br /> <br />';
inpcode = inpcode + 'Depending on availablility, Your package will ship using one of the following services: <br /> <br />';
inpcode = inpcode + '<ul>';
inpcode = inpcode + '<li>UPS Ground</li>';
inpcode = inpcode + '<li>USPS Priority Mail Flat Rate</li>';
inpcode = inpcode + '<li>USPS Parcel Select</li>';
inpcode = inpcode + '</ul>';
inpcode = inpcode + 'We ship from East Rochester, NY, USA. The further you are located from our facility, the longer it will take to receive. A tracking number is provided automatically by email after your order ships.';
$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}


function changewin(){
if(!window.opener){
window.location = "http://www.wackybuttons.com";
}else{
window.close();
window.opener.focus();
}
}
