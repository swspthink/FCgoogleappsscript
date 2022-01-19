function doGet(e){
  const crud = HtmlService.createTemplateFromFile('index');
  return crud.evaluate().setTitle("회원관리");;
}

//다른 파일 가져오는 함수
function include(filename){
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

//테스트연결
// function Edit(){
//   const sa = SpreadsheetApp.openById("__시트ID__");
//   const sheet = sa.getSheetByName('회원명부');
//   const range = sheet.getRange('B1');
//   range.setValue('1');
// }

// 이름에 대한 행을 찾아 해당 행의 값을 가져오는 명령어

function fSheet(name){
  var sa = SpreadsheetApp.openById("__시트ID__");
  var sheet1 = sa.getSheetByName('회원명부');
  var lc = sheet1.getLastRow();
  var sw = 0;
  var row = sheet1.getRange(1, 2, lc);
  var rangeArray = row.getValues();
  rangeArray = [].concat.apply([], rangeArray);//기존의 rangeArray를 배열로 만드는 부분
  for (let i=1; i<rangeArray.length; i++){
    var na = rangeArray[i].toString();
    if (na == name){
        var indice = i+1;
        var sw = 1;
    }
  }
  if(sw == 1){
    var Nu = indice;
    var info = sheet1.getRange('C'+Nu+':I'+Nu).getValues();//검색을 하고자하는 영역을 지정해줌
    return info;
  }
}

//읽기(검색) 이름에 대한 행을 찾은뒤 그 열에 몇번째 해당하는 값을 가져옴
function getNumberS(form){
  var name = form.mname;
  var data = fSheet(name);
  var data1 = data[0][0];
  var data2 = data[0][1];
  var data3 = data[0][2];
  var data4 = data[0][3];
  var fidate = data[0][4];
  var data5 = Utilities.formatDate(new Date(fidate), "GMT+9", "yyyy-MM-dd");
  var data6 = data[0][5];
  var data7 = data[0][6];

  var Totaldata = [[data1, data2, data3, data4, data5, data6, data7]];
  return Totaldata;
}

//업데이트(수정)
function rfSheet(name){
  var sb = SpreadsheetApp.openById("__시트ID__");
  var sheet2 = sb.getSheetByName('회원명부');
  var lc2 = sheet2.getLastRow();
  var sw2 = 0;
  var row2 = sheet2.getRange(1, 2, lc2);
  var rangeArray2= row2.getValues();
  rangeArray2 = [].concat.apply([], rangeArray2);//기존의 rangeArray를 배열로 만드는 부분
  for (let i=1; i<rangeArray2.length; i++){
    var na = rangeArray2[i].toString();
    if (na == name){
        var indice2 = i+1;
        var sw2 = 1;
    }
  }
  if(sw2 == 1){
    return indice2;
  }
}

function setEditor(form){
  var name2 = form.mname;
  var u1 = form.mbirth,
      u2 = form.msex,
      u3 = form.memail,
      u4 = form.mphone,
      u5 = form.mdate,
      u6 = form.mber,
      u7 = form.metc;
  var row = rfSheet(name2);

  var sc = SpreadsheetApp.openById("__시트ID__");
  var sheet3 = sc.getSheetByName('회원명부');
  var rowData1 = [[u1,u2,u3,u4,u5,u6,u7]];
  sheet3.getRange(row, 3, 1, 7).setValues(rowData1);
}


//추가입력
function newRecord(form){
  const r1 = form.mname,
        r2 = form.mbirth,
        r3 = form.msex,
        r4 = form.memail,
        r5 = form.mphone,
        r6 = form.mdate,
        r7 = form.mber,
        r8 = form.metc;
  const rowData2 = [[r1,r2,r3,r4,r5,r6,r7,r8]];
  const sd = SpreadsheetApp.openById("__시트ID__");
  const sheet4 = sd.getSheetByName('회원명부');
  const lastRow = sheet4.getLastRow();
  sheet4.getRange(lastRow+1, 2, 1, 8).setValues(rowData2);
}

//삭제
function rowDelete(form){
  var name3 = form.mname;
  var row3 = rfSheet(name3);

  const se = SpreadsheetApp.openById("__시트ID__");
  const sheet5 = se.getSheetByName('회원명부');
  const range = sheet5.getRange(row3,1,1,9);
  // sheet5.deleteRow(9)//삭제는 deleteRow(i)함수를 쓰면 되지만 만약 시트를 데이터베이스로 활용한다면 deleteRow함수 대신 clearContent함수를 쓸 것을 추천함
  range.clearContent();
}
