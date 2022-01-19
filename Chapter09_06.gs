function doGet(){
  return HtmlService.createHtmlOutputFromFile('outsideWork');
}

function getValuesSpread(form){

  const s1 = form.teamid1,
        s2 = form.mname1,
        s3 = form.mdate1,
        s4 = form.mdate2,
        s5 = form.mname2,
        s6 = form.mname3;

  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet = sa.getSheetByName("대장");
  const rowData = [[s1, s2, s3, s4, s5, s6]];
  const lastRow = sheet.getLastRow();

  sheet.getRange(lastRow+1, 2, 1, 6).setValues(rowData);
  SpreadsheetApp.flush();
  const relastRow = sheet.getLastRow();
  const redate1 = sheet.getRange(relastRow, 4).getValue();
  const redate2 = sheet.getRange(relastRow, 5).getValue();
  const calendar = CalendarApp.getCalendarById("__캘린더ID__");
  calendar.createEvent("외근:"+s5, redate1, redate2, {description: s6});
}
