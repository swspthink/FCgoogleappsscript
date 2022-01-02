function multisum(x, y){
  var result = x * y * 100;
  return result;
}

function multitime(x){

 var h = (x/60)%24;
 var h = ("0"+Math.floor(h)).slice(-2);

 var m = (x/60*60)%60;
 var m = ("0"+Math.floor(m)).slice(-2);
 return h + ":" + m;
}


//시트에 접근하기
function multishsum(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  for(var i=13; i<18; i++){
    var cell = sheet.getRange(i,2).getValue();
    cell = cell+5;
    sheet.getRange(i, 4).setValue(cell);

  }
}

function multishsum2(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  for(var i=19; i<22; i++){
    var cell = sheet.getRange(i,2).getValue();
    cell = "패스트 캠퍼스 " + cell;
    sheet.getRange(i, 4).setValue(cell);

  }
}

//시트 이름으로 이동하기
function multishsum3(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('시트3');
  for(var i=1; i<21; i++){
    var cell = "패스트 캠퍼스 " + i;
    sheet.getRange(i, 1).setValue(cell);

  }
}

function clear(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('시트3');
  // sheet.getRange("A1:D20").clearContent();
  //clear()_전체삭제, clearContent()_서식은 두고 삭제, clearFormat(), 셀에 색깔을 넣어 비교
  // sheet.deleteRows(1,10);
  // sheet.deleteRows(sheet.getLastRow()-1, 2);
}
