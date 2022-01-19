function doGet() {
  return HtmlService.createHtmlOutputFromFile('cusService');
}

function getValuesSpread(form){
  const s1 = form.mname,
        s2 = form.mdate,
        s3 = form.tBoxname1,
        s4 = form.tBoxname2;
  // 상담시트 입력
  const sa = SpreadsheetApp.openById("__상담일지시트ID__");
  const sheet = sa.getSheetByName("상담대장");
  const rowData1 = [[s2, s1, s3, s4]];
  const lastRow1 = sheet.getLastRow();
  sheet.getRange(lastRow1+1, 3, 1, 4).setValues(rowData1);

  // 각 이름에 맞는 시트에 가서 입력
  const str = new String(s1);
  const code = str.charCodeAt();
  const recode = Math.floor(Math.floor((code-0xAC00)/28)/21);
  const rename = String.fromCharCode(recode + 0x1100);
  const long = rename.charCodeAt();
  // ㄱ=4352, ㄲ=4353, ㄴ=4354, ㄷ=4355, ㄸ=4356 ,ㄹ=4357, ㅁ=4358, ㅂ=4359, ㅃ=4360
  // ㅅ=4361, ㅆ=4362, ㅇ=4363, ㅈ=4364, ㅉ=4365, ㅊ=4366, ㅋ=4367, ㅌ=4368, ㅍ=4369 ,ㅎ=4370

  if(long == 4352){
    let sb = SpreadsheetApp.openById("__'ㄱ'시트ID__");
    SpreadsheetApp.setActiveSpreadsheet(sb);
  } else if(long == 4353){
    let sb = SpreadsheetApp.openById("__'ㄱ'시트ID__");
    SpreadsheetApp.setActiveSpreadsheet(sb);
  } else if(long == 4370){
    let sb = SpreadsheetApp.openById("__'ㅎ'시트ID__");
    SpreadsheetApp.setActiveSpreadsheet(sb);
  }

  const resheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(s1)
  const rowData2 = [[s2, s3, s4]];
  const lastRow2 = resheet.getLastRow();
  resheet.getRange(lastRow2+1, 3, 1, 3).setValues(rowData2);

}
