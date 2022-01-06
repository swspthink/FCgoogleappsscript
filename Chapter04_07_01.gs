const pdfFolder = DriveApp.getFolderById("___PDF 파일 저장한 폴더ID___");
const sheetID = "___스프레드시트ID___";

function createPDF(){ //수료증 시트에 있는 내용을 pdf로 변환하는 명령어
  var number = "2022-001";
  var name = "홍길동";

  // var sheetID = "___스프레드시트ID___";

  // const pdfFolder = ___PDF 파일 저장한 폴더ID___");
  const msheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('수료증');
  msheet.getRange("C1").setValue(number);
  SpreadsheetApp.flush(); //새로고침

  var url = "https://docs.google.com/spreadsheets/d/"+sheetID+"/export"+
                                                        "?format=pdf&"+
                                                        "size=a4&"+//사이즈
                                                        "fzr=true&"+
                                                        "gid=9338253&"+//gid 넘버를 정확히 입력해야 합니다.
                                                        "portrait=true&"+//보여지는 부분 사이즈별로 나누는 지
                                                        "fitw=true&"+
                                                        "gridlines=false&"+
                                                        "printtitle=false&"+//프린트타이틀
                                                        "sheetnames=false&"+//시트명인쇄할것인지
                                                        "pagenum=false&"+//페이지번호
                                                        "attachment=true";
  var params = {"method":"GET","headers":{"Authorization":"Bearer "+ ScriptApp.getOAuthToken()}};
  var namepdf = name + ".pdf";
  var response = UrlFetchApp.fetch(url, params).getBlob().setName(namepdf);
  pdfFolder.createFile(response);
}

//명단시트에 있는 내용을 순서대로 pdf파일 변환하는 명령어로 전송
function credataPDFs(){
  // const pdfFolder = DriveApp.getFolderById("1FL7Bn2LhjFxhQZLORTMwYHu__yiIOy0X");
  const datasheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("명단");
  const data = datasheet.getRange(2,2,datasheet.getLastRow()-1,3).getDisplayValues();
  // console.log(data);
  let errors = [];
  data.forEach(row => {
    try{
      createPDFs(row[0],row[1],pdfFolder);
      errors.push(["Success"]);
    } catch(err){
      errors.push(["Fail"]);
    }
  }); //close forEach
  datasheet.getRange(2, 5, datasheet.getLastRow()-1, 1).setValues(errors);
}

function createPDFs(cpNumber, cpName, pdfFolder){ //credataPDFs에서 값을 받아 pdf로 변환

  const msheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('수료증');
  msheet.getRange("C1").setValue(cpNumber);
  SpreadsheetApp.flush(); //새로고침

  var url = "https://docs.google.com/spreadsheets/d/"+sheetID+"/export"+
                                                        "?format=pdf&"+
                                                        "size=a4&"+//사이즈
                                                        "fzr=true&"+
                                                        "gid=9338253&"+//gid 넘버를 정확히 입력해야 합니다.
                                                        "portrait=true&"+//보여지는 부분 사이즈별로 나누는 지
                                                        "fitw=true&"+
                                                        "gridlines=false&"+
                                                        "printtitle=false&"+//프린트타이틀
                                                        "sheetnames=false&"+//시트명인쇄할것인지
                                                        "pagenum=false&"+//페이지번호
                                                        "attachment=true";
  var params = {"method":"GET","headers":{"Authorization":"Bearer "+ ScriptApp.getOAuthToken()}};
  var namepdf = cpName + ".pdf";
  var response = UrlFetchApp.fetch(url, params).getBlob().setName(namepdf);
  pdfFolder.createFile(response);
}
