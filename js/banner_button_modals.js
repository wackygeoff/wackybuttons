
function my_design_window(){
$('#dialog_title').html("Lookup Past Designs");
inpcode = ' \
				<form action="http://www.wackybuttons.com/dclookup.php" method="post"> \
				<div class="form-group"> \
				<label for="email"> \
				Enter your email address: \
				</label> \
				<input type="text" name="email" class="form-control" value="" maxlength="100" size="50" /> \
				<br /> \
				You need to enter the original email address you used when you submitted your design request to us. \
				<br /> <br /> \
				<input type="submit" name="submit" class="btn btn-default btn-wacky" value="Continue" /> \
				</form> \
				';
$('#dialog_content').html(inpcode);
inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}//end my_design_window




function my_cart_window(){
$('#dialog_title').html("Shopping Cart");
 //loads the contents of php output to the #dialog_content div
$('#dialog_content').html("Loading Shipping Cart Details...");//show this in case load time takes long
$('#dialog_content').load("./test_cart_php_output.txt");//replace with url to the proper php file
inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
<form action="http://www.wackybuttons.com/shopcart.php" method="post" name="contents" style="display:inline;"> \
<input name="operation" type="hidden" value="checkout" /> \
<input name="checkout" class="btn btn-primary btn-wacky" type="submit" value="Check Out >>" /> \
</form> \
';
$('#dialog_footer').html(inpcode);
}//end my_design_window


