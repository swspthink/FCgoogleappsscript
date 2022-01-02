function mystock1(){
  var day = new Date();
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet().setName('삼성전자');

  var stock = sheet.getRange(2,3).getValue();
  var formula = "=GOOGLEFINANCE("+'"'+stock+'", '+'"PRICE")';

  var rowData = [[day, "장초", formula]];
  var lastRow = sheet.getLastRow()+1;

  //수식을 넣어 값을 만든뒤 새로고침을 한뒤 복사하고 값만 붙여넣기 해야 함
  sheet.getRange(lastRow, 1, 1, 3).setValues(rowData);
  SpreadsheetApp.flush();
  sheet.getRange(lastRow, 3).copyTo(sheet.getRange(lastRow, 3), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
}

function mystock2(){
  var day = new Date();
  // var spreadsheet = SpreadsheetApp.getActive();
  // var sheet = spreadsheet.getActiveSheet().setName('삼성전자');
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('삼성전자');

  var hour = Utilities.formatDate(new Date(), "GMT+9", "HH");

  // console.log(day, date);
  var stock = sheet.getRange(2,3).getValue();
  var formula = "=GOOGLEFINANCE("+'"'+stock+'", '+'"PRICE")';

  if(hour <= 11){
    var rowData = [[day, "장초", formula]];
  } else if(hour <= 14){
    var rowData = [[day, "장중", formula]];
  } else {
    var rowData = [[day, "종가", formula]];
  }

  var lastRow = sheet.getLastRow()+1;

  //수식을 넣어 값을 만든뒤 새로고침을 한뒤 복사하고 값만 붙여넣기 해야 함
  sheet.getRange(lastRow, 1, 1, 3).setValues(rowData);
  SpreadsheetApp.flush();
  sheet.getRange(lastRow, 3).copyTo(sheet.getRange(lastRow, 3), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
}

function datetimeget(){
  var day = new Date();
  console.log(day);
}
