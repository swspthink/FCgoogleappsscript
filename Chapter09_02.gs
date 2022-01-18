function doGet(){
  return HtmlService.createHtmlOutputFromFile('caseData');
}

function getValuesSpread(form){

  const s1 = form.txtBox1,
        s2 = form.txtBox2;

  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet = sa.getSheetByName("명단");
  const rowData = [[s1, s2]];
  const lastRow = sheet.getLastRow();

  sheet.getRange(lastRow+1, 1, 1, 2).setValues(rowData);
  SpreadsheetApp.flush();

  // const relastRow = sheet.getLastRow();
  // if(lastRow != relastRow){
  //   const text = "입력이 완료되었습니다.";
  //   return text;
  // } else {
  //   const text = "입력항목이 없거나 입력이 완료되지 않았습니다.";
  //   return text;
  // }
}
