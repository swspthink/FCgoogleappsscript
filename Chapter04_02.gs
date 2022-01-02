function variable() {
  // var
  // const
  // let

  var a = 1;
  console.log(a);
  var a = 2;
  a = 3;
  console.log(a);
  // var는 변수를 여러번 생성해도 에러 없이 각기 다른 값의 출력이 가능하다.

  const b = 10;
  console.log(b);
  // const b = 2; //구문오류로 저장이 되지 않음
  // console.log(b);
  // b = 2; //변수 값이 변하지 않음
  // console.log(b);
  // const는 한번 선언하면 재선언 불가능하다. 향후 함수가 많아질 경우 같은 변수 이름 지정오류 등의 여러 문제점을 줄일 수 있다.

  let c = 10;
  console.log(c);
  // let c = 20; //구문오류로 저장이 되지 않음
  // console.log(c);
  c = 20;
  console.log(c);//변수 값이 변함
  // let은 const와 마찬가지로 재선언이 불가능 하지만 다른 값을 넣을 수 있다.
  // 검색창에 "var, let, const"라고 입력하면 각 변수 선언 방식에 대한 차이를 잘 설명해 놓았다.

}

function typereturn(){
  const b = 30;
  var num1 = 10;
  var num2 = 10;
  console.log(num1+num2);
  Logger.log(num1+num2);

}

function int(){//숫자
  var a = 1;
  var b = 2;
  var c = 3;
  console.log(a+b+c);
}
function float(){//문자
  var a = "1";
  var b = "2";
  var c = "3";
  console.log(a+b+c);
}

function boolean(){//참,거짓
  // var a = 1;
  // var b = 2;
  // var c = a == b;
  // console.log(c);
  // var c = a != b;
  // console.log(c);
  // var d = null;//값이 없는 것
  // var e = null;
  // console.log(a+d+e);
  // var f;
  // console.log(f); // 정의되지 않음
  // console.log(a+f); //NaN(not a number: 수학적으로 정의가 안됨)

  //문자
  // var a = Boolean();
  // console.log(a);
  // var a = Boolean('');
  // console.log(a);
  // var a = Boolean('참');
  // console.log(a);

  //숫자
  // var a = Boolean(2);
  // console.log(a);
  // var a = Boolean(0);
  // console.log(a);
  // var a = Boolean();
  // console.log(a);

  //참과 거짓
  // var a = 1;
  // var b = 2;
  // var c = a+b;
  // console.log(Boolean(c == 3));
  // console.log(Boolean(c == 4));
}

function iffun(){
  // var a = 3;
  // var b = 4;
  // if(a == b){
  //   console.log("a와 b는 같다");
  // } else {
  //   console.log("a와 b는 같지않다");
  // }

  var date = new Date();
  var hour = date.getHours();
  console.log(hour);
  if(hour <= 9){
    console.log("출근전입니다.");
  } else if(hour <= 13){
    console.log("점심식사는 하셨나요?");
  } else {
    console.log("밥은먹고다니냐~?");
  }
}

function array(){
  const animals = ["고양이", "강아지", "소", "말"];
  console.log(animals);
  console.log(animals.length);
  console.log(animals[0]);
  console.log(animals[3]);

  animals.push("돼지", "염소");
  console.log(animals);
  animals.splice(0, 2);
  console.log(animals);
}

function forexample(){
  for(var i = 0; i < 10; i++){
    console.log("The number is " + i);
  }
}

function whileexample(){
  var i = 0;
  while(i < 10){
    console.log(i+1);
    i++;
  }

  var i = 5;
  while(i > 0){
    console.log("숫자감소 "+i)
    i--;
  }
}
