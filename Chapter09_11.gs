function doGet(e){
  const sa = SpreadsheetApp.openById("__시트ID__");
  const sheet1 = sa.getSheetByName("총무공문");
  const list1 = sheet1.getRange(2,2,sheet1.getRange("B2").getDataRegion().getLastRow()-1,1).getValues();//내부공문번호리스트

  const sheet2 = sa.getSheetByName("담당");
  const list2 = sheet2.getRange(2,2,sheet2.getRange("B2").getDataRegion().getLastRow()-1,1).getValues();//담당자리스트

  const doc = HtmlService.createTemplateFromFile('document');
  doc.dlist = list1.map(function(r){ return r[0];});
  doc.mlist = list2.map(function(r){ return r[0];});
  return doc.evaluate().setTitle("내부문서");;
}

//다른 파일 가져오는 함수
function include(filename){
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// 문서번호에 대한 행을 찾아 해당 행의 값을 가져오는 명령어
function FSheet(name){
  var sb = SpreadsheetApp.openById("__시트ID__");
  var sheet3 = sb.getSheetByName('총무공문');
  var lc = sheet3.getLastRow();
  var sw = 0;
  var row = sheet3.getRange(1, 2, lc);
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
    var info = sheet3.getRange('C'+Nu+':I'+Nu).getValues();//검색을 하고자하는 영역을 지정해줌
    return info;
  }
}

//읽기(검색) 문서번호 대한 행을 찾은뒤 그 행에 몇번째 해당하는 값을 가져옴
function getNumberS(form){
  var name = form.document;
  var data = FSheet(name);
  var fidate = data[0][0];
  var data1 = Utilities.formatDate(new Date(fidate), "GMT+9", "yyyy-MM-dd");
  var data2 = data[0][1];
  var data3 = data[0][2];
  var data4 = data[0][3];
  var data5 = data[0][4];
  var data6 = data[0][5];
  var data7 = data[0][6];

  var Totaldata = [[data1, data2, data3, data4, data5, data6, data7]];
  return Totaldata;
}

//업데이트(수정)
function RFSheet(name){
  var sc = SpreadsheetApp.openById("__시트ID__");
  var sheet4 = sc.getSheetByName('총무공문');
  var lc2 = sheet4.getLastRow();
  var sw2 = 0;
  var row2 = sheet4.getRange(1, 2, lc2);
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
  var name2 = form.document;
  var u1 = form.docdate,
      u2 = form.docname,
      u3 = form.docteam,
      u4 = form.docowe,
      u5 = form.docwork,
      u6 = form.docpaper,
      u7 = form.docetc;
  var row = RFSheet(name2);

  var sc = SpreadsheetApp.openById("__시트ID__");
  var sheet5 = sc.getSheetByName('총무공문');
  var rowData1 = [[u1,u2,u3,u4,u5,u6,u7]];
  sheet5.getRange(row, 3, 1, 7).setValues(rowData1);
}

//추가입력
function newRecord(form){
  const r1 = form.docdate,
        r2 = form.docname,
        r3 = form.docteam,
        r4 = form.docowe,
        r5 = form.docwork,
        r6 = form.docpaper,
        r7 = form.docetc;
  const rowData2 = [[r1,r2,r3,r4,r5,r6,r7]];
  const sd = SpreadsheetApp.openById("__시트ID__");
  const sheet6 = sd.getSheetByName('총무공문');
  const lastRow = sheet6.getLastRow();
  sheet6.getRange(lastRow+1, 3, 1, 7).setValues(rowData2);
}

// list 채우기
function getTTableData(){
  var lisa = SpreadsheetApp.openById("__시트ID__");
  var lisheet = lisa.getSheetByName('총무공문');
  var lilastRow = lisheet.getLastRow();
   if(lilastRow < 15){
     var data2 = lisheet.getRange(2, 1, lilastRow-1, 7).getDisplayValues();
   } else {
     var data2 = lisheet.getRange(lilastRow-14, 1, 15, 7).getDisplayValues();
   }
  return data2;
}

function getTTableData2(){
  var lisa = SpreadsheetApp.openById("__시트ID__");
  var lisheet = lisa.getSheetByName('총무공문');
  var lilastRow = lisheet.getLastRow();
  var data2 = lisheet.getRange(2, 1, lilastRow-1, 7).getDisplayValues();
  return data2;
}
