function doGet(e){
  if(e.parameters.v == "car1234"){
  return loadForm1();
}else if(e.parameters.v == "car5678"){
  return loadForm2();
}else if(e.parameters.v == "car2580"){
  return loadForm3();
}else{
  return HtmlService.createTemplateFromFile("main").evaluate().setTitle("차량운행일지");
}
}

function loadForm1(){
  const pa = HtmlService.createTemplateFromFile("car1234");
  return pa.evaluate().setTitle("1234차량");
}

function loadForm2(){
  const pa = HtmlService.createTemplateFromFile("car5678");
  return pa.evaluate().setTitle("5678차량");
}

function loadForm3(){
  const pa = HtmlService.createTemplateFromFile("car2580");
  return pa.evaluate().setTitle("2580차량");
}

function getValuesSpread(form){
  const s1 = form.carid1,//차종
        s2 = form.carid2,//차량번호
        s3 = form.mdate,//운행일자
        s4 = form.mname1,//사용자 및 동승자
        s5 = form.cname1,//탑승인원
        s6 = form.mname2,//용무
        s7 = form.mname3,//목적지
        s8 = form.mtime1,//출발시간
        s9 = form.mtime2,//도착시간
        s10 = form.mname4,//총운행거리
        s11 = form.mname5,//급유량
        s12 = form.mname6,//급유금액
        s13 = form.mname7;//기타사항

  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet1 = sa.getSheetByName('운행대장');

  const rowData = [[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13]];
  const lastRow = sheet1.getLastRow();
  sheet1.getRange(lastRow+1, 2, 1, 13).setValues(rowData);
  autolist2();
}

function autolist2(){
  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet1 = sa.getSheetByName('운행대장');
  const Row1 = sheet1.getLastRow();
  const Row2 = sheet1.getLastRow()-1;
  sheet1.getRange(Row2, 15, 1, 4).copyTo(sheet1.getRange(Row1, 15, 1, 4), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
}
