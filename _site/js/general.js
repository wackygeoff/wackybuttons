//universal functions to be used on all or many pages of wackybuttons.com

//show or hide a div
//takes the div id as input
function show_hide(inp){
$("div[id='"+inp+"']").toggle();
}


//show a photo in a modal popup
//takes the url of the image as input
function show_large_photo(photo){
$('#dialog_title').html("Button Design Preview");
//inpcode = '<div style="border:1px solid black;">';
inpcode = '<img src="' + photo + '" width="400" height="400" style="display:block;margin-left:auto;margin-right:auto;" />';
//inpcode = inpcode + '</div>';
$('#dialog_content').html(inpcode);
inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}

//popsup a modal showing info on the product sizes available
function show_size_info(){

$('#dialog_title').html("Button Sizes");
inpcode = '<div style="overflow-x:scroll;text-align:left;">';
inpcode = inpcode + '<b>This chart shows the difference in button sizes in relation to a US Quarter (25 cent piece).</b><br /> <br />';
inpcode = inpcode + '<img src="http://www.wackybuttons.com/images/order/sizedifferences.gif" alt="" width="603" height="230" />';
inpcode = inpcode + '<br />The size of the button is based on the length of the diameter. For example: a 3 inch button has exactly a 3 inch diameter across the face of the button. Using a ruler will help you determine the exact size.';
inpcode = inpcode + '<br /> <br /></div>';
$('#dialog_content').html(inpcode);
inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);
}

//what is a design code modal popup
//formally "info1"
function what_is_design_code(){
$('#dialog_title').html("What is a design code?");
inpcode = '<div align="left" style="font-family:Century Gothic, Arial, Helvetica, Verdana, MS Serif;font-size:10pt;line-height:16px;">';
inpcode = inpcode + 'It is a unique number that represents a design in our system. We use the Design Code to lookup and print your button design. The design code will never change so you can use it to order buttons anytime in the future.';
inpcode = inpcode + '</div>';
$('#dialog_content').html(inpcode);

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);

}