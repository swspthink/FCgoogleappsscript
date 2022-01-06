function afterFormSubmit(e){//설문지(form)에서 받은 내용을 pdf파일로 변환시키고 이메일로 보냄//명렁어 다 입력한 다음 실행해서 허용할것. 그러면 에러가 나는데 이문제의 해결은 트리거를 통해 설문 보내기로 하면됨(트리거 스프레드시트에서 양식제출시)
  const info = e.namedValues;
  const formpdfFile = formtoPDF(info);//pdf파일로 변환
  const entryRow = e.range.getRow();
  var sa = SpreadsheetApp.openById("___스프레드시트ID___");
  var sheet = sa.getSheetByName("설문지 응답 시트1");
  sheet.getRange(entryRow, 6).setValue(formpdfFile.getUrl());
  sheet.getRange(entryRow, 7).setValue(formpdfFile.getName());

  //이메일로 보내기
  sendEmail(e.namedValues['성명'][0], e.namedValues['이메일 주소'][0], formpdfFile);
}

//pdf파일 변환하기
function formtoPDF(info){
  const formpdfFolder = DriveApp.getFolderById("___PDF 파일 저장한 폴더ID___");
  const formdocFile = DriveApp.getFileById("___구글문서ID___");
  var sa = SpreadsheetApp.openById("___스프레드시트ID___");
  var sheet = sa.getSheetByName("설문지 응답 시트1");
  SpreadsheetApp.flush();
  var formNumber = sheet.getRange(sheet.getLastRow(), 5).getValue();
  // var formName = sheet.getRange(sheet.getLastRow(), 2).getValue();
  // var formBirth = sheet.getRange(sheet.getLastRow(), 4).getValue();
  var newformFile = formdocFile.makeCopy(formpdfFolder);

  var crdocFile = DocumentApp.openById(newformFile.getId());
  var body = crdocFile.getBody();
  body.replaceText("{cernumber}", formNumber);
  body.replaceText("{cername}", info['성명'][0]);
  // body.replaceText("{cername}", formName);
  body.replaceText("{cerbirth}", info['생년월일'][0]);
  // body.replaceText("{cerbirth}", formBirth);
  crdocFile.saveAndClose();

  var pdfBlob = newformFile.getAs(MimeType.PDF);
  var namePDF = info['성명'][0] +"_"+info['생년월일'][0]+"_"+new Date()+".pdf";
  const formpdfFile = formpdfFolder.createFile(pdfBlob).setName(namePDF);
  formpdfFolder.removeFile(newformFile);

  return formpdfFile;
}

//이메일로 보내기
function sendEmail(rName, email, formpdfFile){
  GmailApp.sendEmail(email, rName+" 수료증발급", "수료증 파일첨부", {attachments:[formpdfFile],name: '참좋은교육원'});
}
