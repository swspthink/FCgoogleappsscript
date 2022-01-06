const dcpdfFolder = DriveApp.getFolderById("___PDF 파일 저장할 폴더ID___");//const pdfFolder는 이미 Code.gs에서 선언되어서 이름을 변경함
// const sheetID = "1qHrPm7qRMpHWcxZFESNwYo1L6YL1fCtDkbdd9yUQvLI";
const docFile = DriveApp.getFileById("___구글문서ID___");
// const copyFolder = DriveApp.getFolderById("1P-owWKjU3-IJ_AFetoLkQuuWA3RiFLup");

function dataPDF(){
  const datasheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("명단");
  const data = datasheet.getRange(2,2,datasheet.getLastRow()-1,3).getDisplayValues();
  // console.log(data);
  let errors = [];
  data.forEach(row => {
    try{
      doctoPDFs(row[0], row[1], row[2], docFile, dcpdfFolder);
      errors.push(["Success"]);
    } catch(err){
      errors.push(["Fail"]);
    }
  }); //close forEach
  datasheet.getRange(2, 5, datasheet.getLastRow()-1, 1).setValues(errors);
}

function doctoPDFs(dataNumber, dataName, dataBirth, docFile, dcpdfFolder){
  var crcopyFile = docFile.makeCopy(dcpdfFolder);
  var crdocFile = DocumentApp.openById(crcopyFile.getId());
  var body = crdocFile.getBody();
  body.replaceText("{cernumber}", dataNumber);
  body.replaceText("{cername}", dataName);
  body.replaceText("{cerbirth}", dataBirth);
  crdocFile.saveAndClose();
  var pdfBlob = crcopyFile.getAs(MimeType.PDF);
  var namePDF = dataName + ".pdf";
  dcpdfFolder.createFile(pdfBlob).setName(namePDF);
  // dcpdfFolder.removeFile(crcopyFile);//폴더에서는 없앨 수 있으나 드라이브에는 남아있음
  crcopyFile.setTrashed(true);//폴더에서 휴지통으로 이동시킴

}
