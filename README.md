# FCgoogleappsscript
구글앱스스크립트 이해부터 실무활용(web포함)까지

# Fast Campus에서 진행되는 GAS(Google Apps Script)관련 자료
강의를 통해 설명된 자료와 본 자료가 다를 수 있습니다. 다만, 본 자료를 기초로 설명을 하고 가공을 한 부분이기 때문에 이 자료가 기초자료가 될 것입니다.
강의 Chapter01~04_01까지는 자동 매크로 함수이기 때문에 여기에 자료를 넣지는 않았습니다.
여기서는 Chapter04_02부터 자료가 있음을 양해 부탁드립니다.
또한, Chapter10부분도 코딩자료가 없으므로 여기엔 기재하지 않았습니다.
본 자료는 제가 실행하기에 이상이 없었으나 개인 상황별 실행이 안될수도 있습니다.(개인계정과 기업계정의 차이, 서버의 위치 등의 문제로 이런 문제를 극복하는 방법은 강의때 설명할 예정)

* Chapter04 스크립트 편집기 사용하기
  * Chapter04_02 구글 시트 안에서 작동하는 스크립트 이해 및 기본함수 사용방법 알기
  * Chapter04_03 나만의 수식 만들어 사용하기(내가만드는 곱하기 함수, 내가만드는 분을 시간분으로 쪼개는 함수)
  * Chapter04_04 메뉴바에 나만의 명령어 삽입, 실행단추(버튼) 만들기
  * Chapter04_05 내가 원하는 증권정보를 가져오고, 매일매일 자동 업데이트되도록 하기
  * Chapter04_06 세출총괄표만들기(다중 드롭다운 만들기)
  * Chapter04_07 자동으로 PDF변환하기(시트->PDF, 시트&문서->PDF)
  * Chapter04_08 자동으로 PDF변환하기(설문지 응답->PDF)
* Chapter05 Spreadsheet와 gmail 연결하기
  * Chapter05_01 구글시트와 gmail 연결하기(시트->gmail, gmail->시트)
* Chapter06 Spreadsheet와 문자메세지도구 연결하기
  * Chapter06_01 구글시트에 있는 값을 문자로 보내기
* Chapter07 구글설문지 활용하기
  * Chapter07_01 설문지를 정해진 시간에만 열고 응답자 제한하기
  * Chapter07_02 설문지 완료시 답메일 보내고, 설문지 완료후 시트에 수식 넣기
  * Chapter07_03 매월 만족도조사를 실시하고 수집된 데이터를 바탕으로 자동으로 보고서를 만들어 PDF 변환 후 게시자에게 메일 보내기
* Chapter08 구글캘린더 활용하기
  * Chapter08_01 휴가자나 주요 행사 일정을 시트에 저장하면 캘린더로 자동 전송되게 하고 반대로도 해보기
* Chapter09 Web App
  * Chapter09_01 나만의 웹창 만드는 법 개요(창 띄우는 법, 권한 설정, 공유 및 활용)
  * Chapter09_02 웹창에서 입력한 데이터를 자동으로 구글시트로 보내기(input박스 값 전송)
  * Chapter09_03 웹창에서 구글시트에 있는 데이터 가져오기
  * Chapter09_04 개인정보 입력창 만들어보기(개인정보입력, 동의까지 작성 후 구글시트로 전송)
  * Chapter09_05 출퇴근 기록지 만들기
  * Chapter09_06 외근일지 작성 후 시작시간과 마침시간 자동으로 캘린더로 전송하기
  * Chapter09_07 상담일지 작성하기(이름별로 정해진 구글시트로 정보 전송)
  * Chapter09_08 웹창 여러개 만들기
  * Chapter09_09 차량운행일지 만들기
  * Chapter09_10 CRUD만들기(생성, 읽기, 수정, 삭제_구글 시트 연결)
  * Chapter09_11 문서대장 만들기


|구분 | 과정명 | 내용 |
|---|---|---|
|Chapter04|Chapter04_02|기본적으로 시트와 스크립트편집기의 관계를 이해하고 스크립트 편집기에서 시트와 연동하는 방법을 이해하고 기본함수 사용방법에((변수에 대한 이해:var, const, let) if문, for문, while문, console.log, Logger.log) 대해 알아본다.|
|Chapter04|Chapter04_03|기본 함수에는 없는 나만의 수식을 만들어보고 시트에서 내가만든 명령어가 자동으로 사용되는 것을 알아본다.(내가만드는 곱하기 함수, 내가만드는 분을 시간분으로 쪼개는 함수)|
||  Chapter04_04|숫자를 올리고 내리는 명령어가 있다고 가정했을 때 이 숫자를 올리고 내리는 것을 메뉴바에 삽입하는 방법과 실행단추 만들어 실행하는 방법을 알아본다.(숫자 올리고 내리는 것이 날짜를 표시하고 이것에 따라 값을 불러오기)|
||  Chapter04_05|내가 원하는 종목을 스크립트 편집기를 활용해서 금액을 가져오는 작업을 자동화시킴(매일매일 자동 업데이트). 물론 이 부분에 있어서는 googlefinance함수를 사용할 수도 있다. 이때 함수를 통해 가져온 값을 복사->값만붙여넣기를 통해 순수하게 값만 업데이트 시킨다.(트리거 함수 사용, getlastrow 사용)|
||  Chapter04_06|관, 항, 목에 따라 달리 다른 드롭다운이 자동으로 만들어지는 스크립트 함수를 소개한다.(엑셀의 경우 다중 드롭다운이 함수로 만들수 있으나 구글 시트의 경우는 스크립트를 사용해야 한다)|
||  Chapter04_07|1. 구글시트에 있는 페이지를 pdf로 변환한다.<br />2. 시트와 문서를 연결해서 문서를 pdf로 변환한다.|
||  Chapter04_08|설문지 응답에 따라 시트를 변경하고 이를 토대로 문서를 pdf로 변환해서 응답자에게 보내준다.|
|Chapter05|Chapter05_01|1. 시트에 있는 값을 gmail을 통해 메일로 보낼 수 있다.<br />2. 메일에 있는 메일 제목과 내용을 시트로 불러온다(문서가 온 순서대로 10개, 20개, 등 내가 지정한대로 물러오기도 하고 내가 열지 않은 메일만 골라서 불러올 수 있다)|
|Chapter06|Chapter06_01|문자메세지를 전송해주는 업체와 연동을 통해 구글시트에 있는 값을 자동으로 전송한다.(이 부분은 특정 업체의 홍보가 될 수 있으며, 업체에서 만든 명령어를 사용하기에 강의 진행여부를 논의해야 합니다. 업체명: 헬로메세지)|
|Chapter07|Chapter07_01|설문지 정해진 시간에만 열기, 응답자 제한하는 방법을 소개|
||Chapter07_02|설문지 완료시 답메일 보내기(설문지 만들때 이메일 수집을 해야 함), 설문지 완료후 시트에 수식 넣기(설문지 완료후 시트에 일정한 수식이 들어가게 끔 설문지에 스크립트 명령어를 넣는다)|
||Chapter07_03|매월 만족도조사를 실시하고 수집된 시트에서 수집된 데이터를 바탕으로 보고서를 자동으로 만들어 만들어진 보고서를 pdf로 변환하여 게시자에게 보내준다.(ex. 만족도조사 보고서 or 월 응답보고서)|
|Chapter08|Chapter08_01|개인별 휴가를 시트에 저장해 놓았으며 시트를 기초로 캘린더에 휴가자를 전송시킴. 반대로 캘린더에 휴가등 인사와 관련된 내용을 입력하면 그것을 시트로 옮겨옴|
|Chapter09|Chapter09_01|Web App에 대해 설명하고(.gs파일과 .html파일의 차이점) 나만의 웹페이지를 만들고(웹 배포하는 방법) 어떻게 공유하고 활용하는 지를 배운다(권한설정. .exec와.dev 파일의 차이점 등)|
||Chapter09_02|간단한 웹페이지를 만들어 데이터를 구글 시트로 보낸다.(1개의 파일에도 보내고 2개의 파일에도 각각 보낸다)|
||Chapter09_03|웹창에서 구글시트에 있는 데이터 가져오기(select를 구글시트의 내용으로 바꿀수 있다)|
||Chapter09_04|웹창에서 개인정보 입력창 만들어 입력 버튼을 누르면 시트로 전송(완료시 완료메세지 까지 나오는 것을 실행한다)|
||Chapter09_05|Chapter 07_01에서 구글설문지에 시간 설정을 했었는데요. 이번에는 web app에서 시간설정을 통해 정해진 시간에만 입력을 할 수 있는 폼을 만들어 실행해 보겠습니다.|
||Chapter09_06|외근일지를 작성(시작시간, 마침시간 설정해서 구글시트로 전송)해서 시트로 보내고 이를 다시 캘린더로 보낼 수 있게 한다|
||Chapter09_07|input박스 이름에 따라 다른시트로 데이터 전송(성을 ㄱㄴㄷ의 자음으로 변환해서 해당 시트로 이동)|
||Chapter09_08|하나의 파일에서 웹창을 여러개 만들어 페이지를 열고 닫을 수 있다|
||Chapter09_09|차량 3개정도의 페이지를 열 수 있는 웹페이지를 만들고 이를 구글시트로 정보를 받아온다.<br />시트에서는 이를 바탕으로 일일운행일지와 월운행일지를 만들어 제작한다|
||Chapter09_10|구글 웹페이지에서 CRUD(create, read, update, delete)를 해본다|
||Chapter09_11|구글 웹페이지에서 문서대장을 만들어본다(입력, 조회, 삭제 등을 해볼 수있다)|
