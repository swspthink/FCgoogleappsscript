function doGet(e){
  if(e.parameters.v == "window1"){
    return loadForm1();
  }else if(e.parameters.v == "window2"){
    return loadForm2();
  }else{
    return HtmlService.createTemplateFromFile("main").evaluate().setTitle("메인 페이지");//.setTitle을 주면 텝창의 이름이 바뀐다.
  }
}

function loadForm1(){
  const pa = HtmlService.createTemplateFromFile("window1");
  return pa.evaluate().setTitle("첫번째 페이지");
}

function loadForm2(){
  const pa = HtmlService.createTemplateFromFile("window2");
  return pa.evaluate().setTitle("두번째 페이지");
}
