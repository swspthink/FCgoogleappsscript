function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // ui.createMenu('이메일전송').addItem('이메일발송하기', 'SendEmail').addToUi();
  ui.createMenu('이메일전송').addItem('이메일발송하기', 'getData').addToUi();
  ui.createMenu('이메일검색').addItem('받은메일함검색','getEmail').addToUi();
}

function getData(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일보내기");
  var Row = 2;
  var Col = 1;
  var NumRows = 1;
  var Numcols = 4;
  var Lrow = sheet.getLastRow();
  //Logger.log(Lrow);
  for (var i = Row; i <=Lrow; i++){
    var dataRange = sheet.getRange(i, Col, NumRows, Numcols);
    var data = dataRange.getValues();
    // Logger.log(data);
    // return data;
    for (var j = 0; j < data.length; j++){
      var row = data[j];
      var address = row[1];
      var subject = row[2];
      var body = row[3];
    // Logger.log([address, subject, body]);

      // MailApp.sendEmail(address, subject, body); //이젠 사용하지 않음
      GmailApp.sendEmail(address, subject, body );
      sheet.getRange(i, 5).setValue("success");
      SpreadsheetApp.flush();
    }
  }
}

function sendmail(){// 가장 기본적인 이메일 보내는 명령
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일보내기");
  var Edata = sheet.getRange("A2:D4").getValues();

  for (var i = 0; i < Edata.length; i++){
    var Erow = Edata[i];
    var Eaddress = Erow[1];
    var Esubject = Erow[2];
    var Ebody = Erow[3];

    // MailApp.sendEmail(Eaddress, Esubject, Ebody); //이젠 사용하지 않음
    GmailApp.sendEmail(Eaddress, Esubject, Ebody);
  }
}

function getEmail(){

  //A. threads를 활용하는 방법
  // const threads = GmailApp.getInboxThreads();//1.이것은 모든 메일을 불러옴(이건 메일이 많을 경우 시간이 오래 걸린다.)
  // const threads = GmailApp.getInboxThreads(0, 1);//1.이것은 1개까지만 불러옴_일반적으로 한 10만 검색하는 걸 추천

  // B. 날짜지정하는 방법
  // const query ="in:inbox after:2022/1/1" //도착편지함 날짜지정
  // const threads = GmailApp.search(query);

  // C. 안읽은 메일만 불러오기
  // const query = "label:unread";
  // const threads = GmailApp.search(query, 0, 10); //10개 읽어오기

  // D. 내가 지정해 놓은 라벨에 있는 메일만 불러오기(Gmail로 들어가 '새라벨만들기'에서 '테스트메일'이라는 라벨 만든 후 진행)
  // const label = GmailApp.getUserLabelByName("테스트메일");
  // const threads = label.getThreads();


  for(var i=0; i<threads.length; i++){
    var messages = threads[i].getMessages();

    for(var j=0; j<messages.length; j++){
      var message = messages[j];
      spreadDetails(message);
    }
  }
}

function spreadDetails(message){
  const msTime = message.getDate();
  const msSubject = message.getSubject();
  const msFrom = message.getFrom();
  const msBody = message.getPlainBody();

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("받은편지함");
  sheet.appendRow([msTime, msSubject, msFrom, msBody]);
}
