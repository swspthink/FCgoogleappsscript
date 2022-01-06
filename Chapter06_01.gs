//기존 명령어에서 조금만 수정함
function sms2Send() {
    var userProperties = PropertiesService.getUserProperties();
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('문자발송시트');; //신규입력
    // var sw = SpreadsheetApp.getActiveSpreadsheet(); //주석으로 변경
    // var ss = sw.getActiveSheet();//주석으로 변경


  //1행부터 마지막행까지 3,4열 clear
  for ( var i=2; i <= ss.getLastRow(); i++) {//여기는 3,4열을 가르키는 것으로 전송 결과값을 넣는 부분이니 i값을 1에서 2로 변경함으로써 2행부터 시작할 수 있도록 변경
    ss.getRange(i, 3).setValue('');  //type
    ss.getRange(i, 4).setValue('');  //결과코드
  }


  //api key, api secret, callback
  // var remote_id = userProperties.getProperty('b_id');  //주석처리
  var remote_id = '__API키값__';//api 키값 직접입력
  // var remote_pass = userProperties.getProperty('b_pwd'); //주석처리
  var remote_pass = '__API SECRET 값__';//api secret값 직접 입력
  // var remote_callback = userProperties.getProperty('b_callback');//주석처리
  var remote_callback = '__발신번호 직접 입력__';//발신번호 직접 입력
  var remote_phone = ''
  var msg = '';

  if( remote_id != null &&  remote_pass != null && remote_callback != null) {

    //마지막까지 루프돌며 메시지전송
    for( var i = 2; i <= ss.getLastRow(); i++) {//마찬가지로 여기도 i값을 2로부터 시작할 수 있도록 수정
      remote_phone = ss.getRange(i, 1).getValue();
