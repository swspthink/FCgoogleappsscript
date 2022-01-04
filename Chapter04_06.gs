const sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("세출명세표");
const sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("세출총괄표");

function onEdit(e){

  const ActiveCell = sheet1.getActiveCell();
  var Ro = ActiveCell.getRow();
  var Co = ActiveCell.getColumn();

    if(Ro > 2 && Co == 1){
      gwan();
    } else if(Ro > 2 && Co == 2){
      hang();
    } else if(Ro > 2 && Co == 3){
      mok();
    }
}

function gwan(){
  var activecell = sheet1.getActiveCell();
  var Row = activecell.getRow();
  var Column1 = activecell.getColumn();
  var Column2 = activecell.getColumn()+1;
  var val1 = sheet1.getRange(Row, Column1, 1, 1).getValue();
    if(val1 == "경상비"){
      var list = sheet2.getRange("B3:B7").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "목적사업비"){
      var list = sheet2.getRange("B9:B16").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else {
      sheet1.getRange(Row, Column2, 1, 1).clearContent();
      sheet1.getRange(Row, Column2, 1, 1).clearDataValidations();
    }
}

function hang(){
  var activecell = sheet1.getActiveCell();
  var Row = activecell.getRow();
  var Column1 = activecell.getColumn();
  var Column2 = activecell.getColumn()+1;
  var val1 = sheet1.getRange(Row, Column1, 1, 1).getValue();
    if(val1 == "인건비"){
      var list = sheet2.getRange("C3:C5").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "운영비"){
      var list = sheet2.getRange("C6:C7").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "사업비"){
      var list = sheet2.getRange("C9:C16").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else {
      sheet1.getRange(Row, Column2, 1, 1).clearContent();
      sheet1.getRange(Row, Column2, 1, 1).clearDataValidations();
    }
}

function mok(){
  var activecell = sheet1.getActiveCell();
  var Row = activecell.getRow();
  var Column1 = activecell.getColumn();
  var Column2 = activecell.getColumn()+1;
  var val1 = sheet1.getRange(Row, Column1, 1, 1).getValue();
    if(val1 == "급여"){
      var list = sheet2.getRange("D3:D4").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "사회보험"){
      var list = sheet2.getRange("D5").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "운영비"){
      var list = sheet2.getRange("D6:D7").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "수익사업"){
      var list = sheet2.getRange("D9:D10").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "목적사업"){
      var list = sheet2.getRange("D11:D14").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else if(val1 == "목적외사업"){
      var list = sheet2.getRange("D15:D16").getValues();
      var data = SpreadsheetApp.newDataValidation().requireValueInList(list).setAllowInvalid(false).build();
      sheet1.getRange(Row, Column2, 1, 1).setDataValidation(data);
    } else {
      sheet1.getRange(Row, Column2, 1, 1).clearContent();
      sheet1.getRange(Row, Column2, 1, 1).clearDataValidations();
    }
}
