function doGet(e) {
  return HtmlService.createTemplateFromFile("caseList").evaluate();
}

function getSpreadSheet(data){
  const s1 = new Date(),
        s2 = data.mname,
        s3 = data.mdate,
        s4 = data.phone,
        s5 = data.textBoxname1;

  const res4 = s4.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");//02로 시작할경우 뒷자리 없이 02만 사용, 01로 끝날경우 01포함 1자리수 사용, 나머지의 경우 3자릿수 사용, 마지막은 반드시 4자리
  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet = sa.getSheetByName("개인정보명단");
  const lastRow = sheet.getLastRow();
  const rowData = [[s1,s2,s3,res4,s5]];

  sheet.getRange(lastRow+1, 2, 1, 5).setValues(rowData);
  SpreadsheetApp.flush();

  const relastRow = sheet.getLastRow();
  if(lastRow != relastRow){
    const text = "입력이 완료되었습니다.";
    return text;
  } else {
    const text = "입력이 완료되지 않았습니다.";
    return text;
  }
}
