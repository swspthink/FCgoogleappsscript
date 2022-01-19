function doGet(){
  const file = SpreadsheetApp.openById("__시트ID__");
  const sheet = file.getSheetByName("종사자현황");
  const lastrow = sheet.getLastRow();
  const namelist = sheet.getRange(2, 1, lastrow-1, 1).getValues().sort();
  // const reidlist = namelist.sort()//가나다순 정렬을 해줌
  const myselect = HtmlService.createTemplateFromFile('commuteRecord');
  myselect.list = namelist.map(function(r){return r[0];});
  return myselect.evaluate();
}

function getSpreadSheet(form){
  const s1 = form.teamid;
  const s2 = form.mname1;
  const s3 = new Date();
  const res3 = Utilities.formatDate(s3, "GMT+9", "yyyy-MM-dd HH:mm");
  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet1 = sa.getSheetByName("출퇴근기록");
  const rowData = [[s1,s2,res3]];
  const lastRow = sheet1.getLastRow();

  sheet1.getRange(lastRow+1, 2, 1, 3).setValues(rowData);
  sheet1.getRange(lastRow, 6, 1, 2).copyTo(sheet1.getRange(lastRow+1, 6, 1, 2), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  SpreadsheetApp.flush();

  const relastRow = sheet1.getLastRow();
  if(lastRow != relastRow){
    const text = "입력이 완료되었습니다.";
    return text;
  } else {
    const text = "입력이 완료되지 않았습니다.";
    return text;
  }
}
