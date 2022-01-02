// function onOpen() {
//   var spreadsheet = SpreadsheetApp.getActive();
//   var menuItems = [
//     {name: 'Prepare sheet...', functionName: 'prepareSheet_'},
//     {name: 'Generate step-by-step...', functionName: 'generateStepByStep_'}
//   ];
//   spreadsheet.addMenu('Directions', menuItems);
// }

// function onOpen(){
//   var spreadsheet = SpreadsheetApp.getActive();
//   var menuItems = [{name:'숫자올리기',functionName:'dateup'},{name:'숫자내리기',functionName:'datedown'}];
//   spreadsheet.addMenu('숫자바꾸기', menuItems);
// }

function onOpen() {
 var Sheet = SpreadsheetApp.getUi().createMenu("숫자바꾸기");
     Sheet.addItem("숫자올리기", 'dateup').addToUi();
     Sheet.addItem("숫자내리기", 'datedown').addToUi();
}

function dateup(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('업무일지');
  var range = spreadsheet.getRange('E2').getValue()+1;
  return spreadsheet.getRange('E2').setValue(range);
}

function datedown(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('업무일지');
  var range = spreadsheet.getRange('E2').getValue()-1;
  return spreadsheet.getRange('E2').setValue(range);
}
