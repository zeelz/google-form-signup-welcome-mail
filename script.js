/**
 * Sends email to new volunteer.
 * Automated to run when a user submits the form connected to the spreadsheet that owns this script.
 * Author: Keme Kenneth
 */

function MailToVolunteer() {
  var marker = "DONT_TOUCH_THIS_COL";
  var markerCol = 20;
  var emailCol = 3; // email is in the 3nd column
  var nameCol = 2;
  var sheet = SpreadsheetApp.getActiveSheet();
  var m = sheet.getRange(sheet.getLastRow(), markerCol).getValue();
  var name = sheet.getRange(sheet.getLastRow(), nameCol).getValue().split(" ")[0].replace(/(^,)|(,$)/g, "");
  var message = "Hello, "+ name +"\n\nThank you for indicating your interest to join the team of volunteers, it shows you have a large heart as we do.\nThe R.E.A.C.H is an intervention project set out to provide food relief for vulnerable and underserved communities in Rivers State.\nPlease, expect a team member to contact you soonest as we prepare for our next REACHOUT.\nIn the main time, kindly connect with us on our social platforms if you haven't already:\n\nTwitter: http:twitter.com/thereachng\nInstagram: http:instagram.com/thereachng\nFacebook : http:fb.com/thereachng\n\nThank you.\n\nREACH Team";
  var subject = "Thanks for your Interest to Volunteer";
  var email = sheet.getRange(sheet.getLastRow(), emailCol).getValue().trim();
  
  if(m !== marker || m == ""){
    MailApp.sendEmail(email, subject, message);
    sheet.getRange(sheet.getLastRow(), markerCol).setValue(marker);
    SpreadsheetApp.flush();
  }
  
}
