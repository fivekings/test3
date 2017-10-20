function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XqHt95EpLO":
        Script1();
        break;
      case "6PwpzhzfMBU":
        Script2();
        break;
      case "6W6ABMSP5Ia":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var myName  = lmsAPI.GetStudentName();

var array  = myName.split(',');
var newName = array[1] + " " + array[0];

player.SetVar("NewName", newName);
}

function Script2()
{
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

var player = GetPlayer();
player.SetVar("SystemDate",today);



}

function Script3()
{
  myWindow = window.open("","Print","width=900,height=700,scrollbars=0,resizable=0");

var player=GetPlayer();
var course=player.GetVar("CourseName");
var username=player.GetVar("NewName");
var date=player.GetVar("SystemDate");
var score=player.GetVar("ScorePercent");

var contents ='<html></head><style type="text/css">';
contents+='h2 {font-family:"Museo Sans For Dell"; font-size:20px; color:#333333}';
contents+='h3 {font-family:"Museo Sans For Dell"; font-size:30px; color:#0085C3}';
contents+='h4 {font-family:"Museo Sans For Dell"; font-size:16px; vertical-align:bottom}';
contents+='</style><body>';
contents+='<table width="100%" border="0" cellspacing="0" cellpadding="0">';
contents+='<tr><td><center><img src="../FINC9999/certificate/CertificateBanner.png"></center></td></tr></table>';
contents+='<table width="100%" border="0" cellspacing="0" cellpadding="20">';
contents+='<tr><td colspan="5"><center><h2>THE GLOBAL FP&A L&D TEAM CERTIFIES THAT</h2>';
contents+='<h3>'+username+'</h3>';
contents+='<h2>HAS SUCCESSFULLY COMPLETED</h2>';
contents+='<h3>'+course+'</h3>';
contents+='<h2>WITH A SCORE OF</h2>';
contents+='<h3>'+score+'%</h3></center></td></tr></table>';
contents+='<table width="100%" border="0" cellspacing="0"><tr>';
contents+='<td width="30%"><center><img src="../FINC9999/certificate/Signature.png"></center></td>';
contents+='<td width="5%" rowspan="2"></td>';
contents+='<td width="30%"><center><h4>'+date+'</h4></center></td>';
contents+='<td width="15%" rowspan="2"></td>';
contents+='<td width="20%" rowspan="2"><img src="../FINC9999/certificate/Dell-Logo.png"></td></tr>';
contents+='<tr><td><center><img src="../FINC9999/certificate/Signature Line.png"></center></td>';
contents+='<td><center><img src="../FINC9999/certificate/Date Line.png"></center></td></tr></table>';
contents+='</body></html>';

myWindow.document.write(contents);
myWindow.document.close();
myWindow.focus();
myWindow.print();
}

