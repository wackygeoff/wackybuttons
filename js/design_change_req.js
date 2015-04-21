

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

inpcode = ' \
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> \
';
$('#dialog_footer').html(inpcode);

}


