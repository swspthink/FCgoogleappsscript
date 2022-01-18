function onOpen() {
 var Sheet = SpreadsheetApp.getUi().createMenu("캘린더연동");
     Sheet.addItem("시트->캘린더", 'outputData').addToUi();
     Sheet.addItem("캘린더->시트", 'inputData').addToUi();
}

function outputData(){
  // deleteEvent() //마지막에 첨부할 것
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("내보내기");
  const lastrow = sheet.getLastRow();
  const calendar = CalendarApp.getCalendarById("__캘린더ID__");

  // const data = sheet.getRange("A3:J").getValues();//이수식을 써도 무방하고 아래 수식을 써도 무방함
  const data = sheet.getRange(3,1,lastrow-2,10).getValues();
  for(let i = 0; i<data.length; i++){
    // let sDate = data[i][1];
    // let eDate = data[i][3];
    // sDate.setHours(data[i][2].getHours());
    // sDate.setMinutes(data[i][2].getMinutes());
    // eDate.setHours(data[i][4].getHours());
    // eDate.setMinutes(data[i][4].getMinutes());
    // let startDate = new Date(sDate);
    // let endDate = new Date(eDate);
    // console.log(startDate, endDate);
    calendar.createEvent(data[i][0]+":"+data[i][1], data[i][8], data[i][9], {location: data[i][6], description: data[i][7]});
  }
}

function deleteEvent(){
  const cal = CalendarApp.getCalendarById("__캘린더ID__");
  const event = cal.getEvents(new Date("12/1/2021 12:00 AM"), new Date("1/31/2022 11:59 PM"));//형식은 월/일/년으로 되어있음
  for(let i = 0; i<event.length; i++){
    event[i].deleteEvent();
  }
}

function inputData(){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("가져오기");
  const calendar = CalendarApp.getCalendarById("__캘린더ID__");
  const events = calendar.getEvents(new Date("12/1/2021 12:00 AM"), new Date("1/31/2022 11:59 PM"));

  const lastrow = sheet.getLastRow();
  // sheet.getRange(2, 1, lastrow-1, 5).clearContent();//값이 없을 경우 오류남.
  sheet.getRange("A3:E").clearContent();
  for(let i = 0; i<events.length; i++){
    const title = events[i].getTitle();
    const sdate = events[i].getStartTime();
    const edate = events[i].getEndTime();
    const loc = events[i].getLocation();
    const des = events[i].getDescription();

    sheet.getRange(i+3, 1).setValue(title);
    sheet.getRange(i+3, 2).setValue(sdate);
    sheet.getRange(i+3, 2).setNumberFormat("yyyy/mm/dd h:mm:ss AM/PM");
    sheet.getRange(i+3, 3).setValue(edate);
    sheet.getRange(i+3, 3).setNumberFormat("yyyy/mm/dd h:mm:ss AM/PM");
    sheet.getRange(i+3, 4).setValue(loc);
    sheet.getRange(i+3, 5).setValue(des);
  }
}
