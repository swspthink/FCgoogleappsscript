function doGet(){
  const file = SpreadsheetApp.openById("__시트ID__");
  const sheet = file.getSheetByName("명단");
  const lastrow = sheet.getLastRow();
  const namelist = sheet.getRange(3, 1, lastrow-2, 1).getValues();
  const idlist = sheet.getRange(3, 2, lastrow-2, 1).getValues();
  const reidlist = idlist.sort()//가나다순 정렬을 해줌
  const myselect = HtmlService.createTemplateFromFile('caseSelect');
  myselect.namelist = namelist.map(function(r){return r[0];});
  myselect.reidlist = reidlist.map(function(r){return r[0];});
  return myselect.evaluate();
}

//연결하고자 하는 시트 연결 Test
//연결상태 확인을 위한 것으로 처음연결하거나 연결이 안되어 있을 경우 '권한검토'라고 나오는데 이경우 본인의 이메일로 권한을 승인해 주어야 함
function Edit(){
  var sa = SpreadsheetApp.openById("__시트ID__");
  var sheet = sa.getSheetByName('명단');
  var range = sheet.getRange('B1');
  range.setValue('1');
}
