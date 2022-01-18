function LimitResponse(){//이건 만든 후에 트리거 설정(함수선택, 이벤트소스선택->설문지에서, 이벤트유형선택->양식제출시 선택)
  const setResponse = 10;//최대 응답수 설정
  const form = FormApp.openById(__form(설문지)ID__);
  const formResponse = form.getResponses();
  const len = formResponse.length;

  if(len >= setResponse){
    form.setAcceptingResponses(false);
  }
}

// _________FormID___________

function LimitTime(){//이건 만든 후에 트리거 설정(이벤트유형선택->열릴시로 선택)
  const time = new Date();
  const hour = Utilities.formatDate(time, "GMT+9", "H");
  // const hour = time.getHours();//console.log(time);함수 확인후 이상없으면 사용해도 가능하나 이상 있으면 위 함수 사용
  const minu = Utilities.formatDate(time, "GMT+9", "m");
  // const minu = time.getMinutes();
  var liform = FormApp.openById(__form(설문지)ID__);

  if(hour == 19){
    if(minu < 58){
      liform.setAcceptingResponses(true);
    } else {
      liform.setAcceptingResponses(false);
    }
  } else {
    liform.setAcceptingResponses(false);
  }
}
// 시간 제한을 하기 위해 위 LimitTime명령어를 여러개 만들어 사용하는 방법도 있지만, 한걸음 더 나아가서
// 트리거를 만들고 없애면서 시간제한 하는 방법을 알아보겠습니다.

function openForm(){//폼을 열도록 만드는 명령어
  var daForm = FormApp.openById(__form(설문지)ID__);
  daForm.setAcceptingResponses(true);
}

function closeForm(){//폼을 닫도록 만드는 명령어
  var daForm = FormApp.openById(__form(설문지)ID__);
  daForm.setAcceptingResponses(false);
  Delete();//트리거를 삭제하는 명령어
}

function opentimeForm(){//원하는 시간에 트리거를 삽입(결국 폼을 시간에 맞춰 열도록 함)
  var time = new Date();
  var retime = Utilities.formatDate(time, 'Asia/Seoul', 'MMMM dd, yyyy 10:30:ss Z');//시간이 뉴욕시간대로 설정되어 있어서 시간대를 바꿔줌.여기에서 원하는 시간을 삽입시킨다.
  //원래는 retime없이 아래 두가지 명령어만 있었으면 되었음.
  // time.setHours(10);
  // time.setMinutes(10);
  var reretime = new Date(retime);// retime을 다시 시간으로 만들어줌
  // ScriptApp.newTrigger("openForm").timeBased().at(krtime).create();//원래 이 명령어를 사용했으나 workspace의 경우 시간대가 틀려 아래와 같이 조정함
  ScriptApp.newTrigger("openForm").timeBased().inTimezone("Asia/Seoul").at(reretime).create();
}

function closetimeForm(){//원하는 시간에 트리거를 삽입(결국 폼을 시간에 맞춰 닫도록 함)
  var time = new Date();
  var retime = Utilities.formatDate(time, 'Asia/Seoul', 'MMMM dd, yyyy 10:35:ss Z');
  var reretime = new Date(retime);
  ScriptApp.newTrigger("closeForm").timeBased().at(time).inTimezone("Asia/Seoul").at(reretime).create();
}

function Delete(){//트리거삭제시키기
  var Triggers = ScriptApp.getProjectTriggers();
  for(var i=0; i<Triggers.length; i++){
    if(Triggers[i].getHandlerFunction() == "openForm" || Triggers[i].getHandlerFunction() == "closeForm"){//openForm 트리거가 또는 closeForm 트리거가 있으면 삭제시키라는 부분
      ScriptApp.deleteTrigger(Triggers[i]);
    }
  }
}
