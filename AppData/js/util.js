/*************************************
* 공통 사용 함수 모음
*----------------------------

/*
*********************************************************************************************************
*   함수설명  : 문자열이 빈문자열 혹은 공백만 있는 문자열이지 검사한다.
* if (isEmpty(form.keyword)){
*       alert('값을 입력하여주세요');
* }
***********************************************************************************************************
*/
function isEmpty(input) {
  if (input.value == null || input.value.replace(/ /gi, "") == "") {
    return true;
  } else {
    return false;
  }
}

/*
*********************************************************************************************************
*   함수설명  : 입력값이  null 인지 체크
* if (isNull(form.keyword)){
*       alert('값을 입력하여주세요');
* }
***********************************************************************************************************
*/
function isNull(input) {
  if (input.value == null || input.value == "") {
    return true;
  } else {
    return false;
  }
}

/*
*********************************************************************************************************
*   함수설명: 문자열이 특정문자열을 포함하고 있는지 체크한다.
* str    : 특정문자 포함여부를 체크할 대상 문자열
* ch    : 지정된 특정문자
* 
***********************************************************************************************************
*/
function isContains(str, ch) {
  var i = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch) return true;
  }
  return false;
}

/*
*********************************************************************************************************
*   함수설명  : 해당문자열이 지정된 문자들만을 포함하고 있는지 검사한다.
* str    : 검사할 문자열
* chars   : 지정된 문자들의 나열
***********************************************************************************************************
*/
function isContainsOnly(str, chars) {
  for (var inx = 0; inx < str.length; inx++) {
    if (chars.indexOf(str.charAt(inx)) == -1)
      return false;
  }
  return true;
}

/*
*********************************************************************************************************
*   함수설명  : 지정하는 년,월,일이 달력상으로 존재하는 날짜인지 검사한다.
* year    : 년 (1900 년도 부터 2100년도만 유효한 값으로 인정)
* month   : 월
* day    : 일
***********************************************************************************************************
*/
function isValidDay(year, month, day) {
  var y = parseInt(year, 10);
  var m = parseInt(month, 10) - 1;
  var d = parseInt(day, 10);

  if (y >= 1900 && y <= 2100) {
    var end = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
  } else {
    return false;
  }
}

/**
* 입력값이 특정 문자만으로 되어있는지 체크하며
* 특정문자만을 허용하려 할때 사용한다.
* if (containsChars(form.name, "ABO")){
*    alert("혈액형 필드에는 A,B,O 문자만 사용할수 있습니다.");
* }
*/
function containsCharsOnly(input, chars) {
  for (var i = 0; i < input.value.length; i++) {
    if (chars.indexOf(input.value.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}

/**
* 입력값이 알파벳인지 체크
* 아래 isAlphabet() 부터 isNumComma()까지의 메소드가 자주 쓰이는 경우에는
* var chars 변수를 global 변수로 선언하고 사용하도록 한다.
* var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
* var lowercase = "abcdefghijklmnopqrstuvwxyz";
* var number = "0123456789";
* function isAlphaNum(input){
*       var chars = uppercase + lowercase + number;
*    return containsCharsOnly(input, chars);
* }
*/
function isAlphabet(input) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return containsCharsOnly(input, chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크한다
 */
function isUpperCase(input) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return containsCharsOnly(input, chars);
}

/**
* 입력값이 알파벳 소문자인지 체크한다
*/
function isLowerCase(input) {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  return containsCharsOnly(input, chars);
}

/**
* 입력값이 숫자만 있는지 체크한다.
*/
function isNumer(input) {
  var chars = "0123456789";
  return containsCharsOnly(input, chars);
}

/**
* 입려값이 알파벳, 숫자로 되어있는지 체크한다
*/
function isAlphaNum(input) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return containsCharsOnly(input, chars);
}

/**
* 입력값이 숫자, 대시"-" 로 되어있는지 체크한다
* 전화번호나 우편번호, 계좌번호에 -  체크할때 유용하다
*/
function isNumDash(input) {
  var chars = "-0123456789";
  return containsCharsOnly(input, chars);
}

/**
* 입력값이 숫자, 콤마',' 로 되어있는지 체크한다
*/
function isNumComma(input) {
  var chars = ",0123456789";
  return containsCharsOnly(input, chars);
}

function isValidEmail(str) {
  var format = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (str.match(format) == null) {
    return false;
  } else {
    return true;
  }
}

/* 비밀번호가 영문, 숫자, 특수문자 로 최소 8자~ 최대 16자  되어있는지 체크 */
function isPassword(str) {
  var chars = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;
  if (!chars.test(str)) {
    return false;
  } else {
    return true;
  }
}

/**
* isHangul(str)
* - 한글체크(문자열에한글이외의값이있다면:false)
* @param str
* @return
*/
function isHangul(str) {
  if (str.length > 0) {
    for (var i = 0; i < str.length; i++)
      if (str.charCodeAt(i) < 128)
        return false;
  }
  return true;
}
/**
* isHangulNumeric(str)
* - 한글/숫자체크
* @param str
* @return
*/
function isHangulNumeric(str) {
  for (var i = 0; i < str.length; i++) {
    var chr = str.substr(i, 1);
    if (!(chr < '0' || chr > '9')) continue; // 숫자
    chr = escape(chr);
    if (chr.charAt(1) == 'u') {
      chr = chr.substr(2, (chr.length - 1));
      if ((chr < 'AC00') || (chr > 'D7A3'))
        return false;
    } else return false;
  }
  return true;
}
/**
* isBlank(str)
* - 공백문자체크(공백으로만된경우:false)
* @param str
* @return
*/
function isBlank(str) {
  var regExp = /^[\s]+$/i;
  if (regExp.test(str) || str.length == 0) return false;
  else return true;
}
/**
* isWithBlank(str)
* - 공백포함체크(문자열에공백이포함된경우 :false)
* @param str
* @return
*/
function isWithBlank(str) {
  var regExp = /\s/i;
  if (regExp.test(str)) return false;
  else return true;
}

/*********************************************************************************************************
*   함수설명  : 주민등록번호유효체크
* num    : 검사할 문자열
***********************************************************************************************************/
function isJuminNum(num) {
  var reg = /([0-9]{6})-?([0-9]{7})/;
  if (!reg.test(num)) return false;

  var ssn = RegExp.$1 + RegExp.$2 + RegExp.$3;
  var sum = 0;
  var digit = "234567892345";

  for (var i = 0; i < 12; i++)
    sum += parseInt(ssn.charAt(i)) * parseInt(digit.charAt(i));

  var result = (11 - (sum % 11)) % 10;
  var check = parseInt(ssn.charAt(12));
  if (result != check) return false;

  return true;
}
/*********************************************************************************************************
*   함수설명  : 사업자번호 체크
* str    : 검사할 문자열
***********************************************************************************************************/
function isCompNum(str) {
  var reg = /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/;
  if (!reg.test(str)) return false;

  var strCompNum = RegExp.$1 + RegExp.$2 + RegExp.$3;
  if (strCompNum == "0000000000") return false;

  var intSum = 0;
  var strDigit = "13713713";
  var intEnd = strCompNum.charAt(9);

  for (var i = 0; i < 8; i++)
    intSum = intSum + (parseInt(strCompNum.charAt(i)) * parseInt(strDigit.charAt(i))) % 10;

  var strTemp = parseInt(strCompNum.charAt(8)) * 5 + "0";
  var intChk = parseInt(strTemp.charAt(0)) + parseInt(strTemp.charAt(1));
  var intMatch = (10 - (intSum + intChk) % 10) % 10;

  if (intEnd != intMatch) return false;

  return true;
}

/*====================

====================*/

/*
*********************************************************************************************************
*   함수설명  : 숫자를 세자리마다 컴마를 찍은 형식으로 바꾸어 준다.
* argStr    : argument
***********************************************************************************************************
*/
function plusComma(num) {
  if (num < 0) { num *= -1; var minus = true }
  else var minus = false

  var dotPos = (num + "").split(".")
  var dotU = dotPos[0]
  var dotD = dotPos[1]
  var commaFlag = dotU.length % 3

  if (commaFlag) {
    var out = dotU.substring(0, commaFlag)
    if (dotU.length > 3) out += ","
  }
  else var out = ""

  for (var i = commaFlag; i < dotU.length; i += 3) {
    out += dotU.substring(i, i + 3)
    if (i < dotU.length - 3) out += ","
  }

  if (minus) out = "-" + out
  if (dotD) return out + "." + dotD
  else return out
}

/*
*********************************************************************************************************
*   함수설명  : 문자열에서 특정문자를 제거한 새로운 문자열을 만든다.
* str    : 문자열
* ch    : 제거할 문자
***********************************************************************************************************
*/
function delChar(str, ch) {
  var len = str.length;
  var ret = "";

  //문자열에서 ch 문자를 제거한다. 예) ,  - 등등
  for (i = 0; i < len; ++i) {
    if (str.substring(i, i + 1) != ch)
      ret = ret + str.substring(i, i + 1);
  }

  return ret;
}

/*
*********************************************************************************************************
*   함수설명  : 문자열에서 특정문자를 다른 문자로 치환한 새로운 문자열을 만든다.
* str    : 문자열
* oldChar   : 바꾸기 전의 문자
* newChar   : 바꿔서 넣을 문자
***********************************************************************************************************
*/
function replace(str, oldChar, newChar) {
  var oldstr = "";
  while (oldstr != str) {
    oldstr = str;
    str = str.replace(oldChar, newChar);
  }
  return str;
}

/*
*********************************************************************************************************
*   함수설명  : 문자열에서 왼쪽의 공백을 제거한다.
* str    : 문자열
***********************************************************************************************************
*/
function lTrim(str) {
  var i;
  i = 0;
  while (str.substring(i, i + 1) == ' ' || str.substring(i, i + 1) == '　') i = i + 1;
  return str.substring(i);
}

/*
*********************************************************************************************************
*   함수설명  : 문자열에서 오른쪽의 공백을 제거한다.
* str    : 문자열
***********************************************************************************************************
*/
function rTrim(str) {
  var i = str.length - 1;
  while (i >= 0 && (str.substring(i, i + 1) == ' ' || str.substring(i, i + 1) == '　')) i = i - 1;
  return str.substring(0, i + 1);
}

/*
*********************************************************************************************************
*   함수설명  : 문자열에서 양쪽의 공백을 제거한다.
* str    : 문자열
***********************************************************************************************************
*/
function trim(str) {
  if (str == "" || str.length == 0) {
    return str;
  }
  else {
    return (lTrim(rTrim(str)));
  }
}

/*
*********************************************************************************************************
*   함수설명  : 문자열을 정해진 길이만큼 오른쪽을 특정 문자로 채운다.
* str    : 문자열
* len    : 총길이
***********************************************************************************************************
*/
function rPadString(str, ch, len) {
  var strlen = trim(str).length;
  var ret = "";
  var alen = len - strlen;
  var astr = "";

  //부족한 숫자만큼  len 크기로 ch 문자로 채우기
  for (i = 0; i < alen; ++i) {
    astr = astr + ch;
  }

  ret = trim(str) + astr; //뒤에서 채우기
  return ret;
}

/*
*********************************************************************************************************
*   함수설명  : 문자열을 정해진 길이만큼 왼쪽을 특정 문자로 채운다.
* str    : 문자열
* len    : 총길이
***********************************************************************************************************
*/
function lPadString(str, ch, len) {
  var strlen = trim(str).length;
  var ret = "";
  var alen = len - strlen;
  var astr = "";


  //부족한 숫자만큼  len 크기로 ch 문자로 채우기
  for (i = 0; i < alen; ++i) {
    astr = astr + ch;
  }

  ret = astr + trim(str); //앞에서 채우기
  return ret;
}


/*
*********************************************************************************************************
*   함수설명  : 날짜형식으로 년,월,일 사이에 구분자를 넣어준다.
* str       : 날짜가 YYMMDD형식으로 담겨있는 문자열
* mark   : 년,월,일 사이에 들어갈 구분자
***********************************************************************************************************
*/
function formatDate(str, mark) {

  if (str != "" && str.length == 8) {
    return str.substring(0, 4) + mark + str.substring(4, 6) + mark + str.substring(6, 8);
  } else {
    return "";
  }
}

/* 
****************************************************************************************************
*  함수설명: 입력란을 오늘날짜로 채워준다.
* field    : html에서 name으로 지정된 입력필드의 명
* 사용예
****************************************************************************************************
*/
function setToday(field) {
  var cDate = new Date();
  var year = cDate.getYear();
  var month = (cDate.getMonth() + 1).toString();
  month = month.length == 1 ? "0" + month : month;
  var day = cDate.getDate().toString();
  day = day.length == 1 ? "0" + day : day;
  field.value = "" + year + month + day;
}

/* 
****************************************************************************************************
*  함수설명: 입력란을 이번달의 첫날로 채워준다..
* field    : html에서 name으로 지정된 입력필드의 명
* 사용예
****************************************************************************************************
*/
function setMonthFirstDay(field) {

  var cDate = new Date();
  var year = cDate.getYear();
  var month = (cDate.getMonth() + 1).toString();
  month = month.length == 1 ? "0" + month : month;
  var day = "01";
  field.value = "" + year + month + day;
}

/* 
****************************************************************************************************
*  함수설명: 입력란을 올해 1월1일로 채워준다.
* field    : html에서 name으로 지정된 입력필드의 명
* 사용예
****************************************************************************************************
*/
function setYearFirstDay(field) {
  var cDate = new Date();
  var year = cDate.getYear();
  var month = "01";
  var day = "01";
  field.value = "" + year + month + day;
}

/* 
****************************************************************************************************
*  함수설명: 입력란을 오늘보다 한달전의 날짜로 채워준다..
* field    : html에서 name으로 지정된 입력필드의 명
* 사용예
****************************************************************************************************
*/
function setOneMonthBefore(field) {

  var cDate = new Date();
  var year = cDate.getYear();
  var month = (cDate.getMonth()).toString();
  month = month.length == 1 ? "0" + month : month;
  if (month == "00") {
    month = "12";
    year--;
  }
  var day = cDate.getDate().toString();
  day = day.length == 1 ? "0" + day : day;
  field.value = "" + year + month + day;
}

/* 
****************************************************************************************************
*  함수설명: 입력란을 오늘보다 1년전의 날짜로 채워준다..
* field    : html에서 name으로 지정된 입력필드의 명
* 사용예
****************************************************************************************************
*/
function setOneYearBefore(field) {
  var cDate = new Date();
  var year = cDate.getYear() - 1;
  var month = (cDate.getMonth() + 1).toString();
  month = month.length == 1 ? "0" + month : month;
  var day = cDate.getDate().toString();
  day = day.length == 1 ? "0" + day : day;
  field.value = "" + year + month + day;
}

/*
*********************************************************************************************************
* 함수설명 : 입력값의 바이트 길이를 리턴한다.
* if (getByteLength(form.title) > 100){
*    alert("제목은 한글 50자 (영문 100자) 이상 입력할수 없습니다");
* }
*********************************************************************************************************
*/
function getByteLength(input) {
  var byteLength = 0;
  for (var inx = 0; inx < input.value.charAt(inx); inx++) {
    var oneChar = escape(input.value.charAt(inx));
    if (oneChar.length == 1) {
      byteLength++;
    } else if (oneChar.indexOf("%u") != -1) {
      byteLength += 2;
    } else if (oneChar.indexOf("%") != -1) {
      byteLength += oneChar.length / 3;
    }
  }
  return byteLength;
}

/**********************************************************************************************************
* 함수설명 : 핸드폰번호 마스킹(정규식 사용)
* getMaskedPhone("01012341234") => 010-12**-12**
*********************************************************************************************************/
function getMaskedPhone(hp) {
  var pattern = /^(\d{3})-?(\d{1,2})\d{2}-?(\d{1,2})\d{2}-?$/;
  var result = "";
  if (!hp) return result;

  var match = pattern.exec(hp);
  if (match) {
    result = match[1] + "-" + match[2] + "**-" + match[3] + "**";
  } else {
    result = "***";
  }
  return result;
}

/**********************************************************************************************************
* 함수설명 : text 태그를 Html태그로 변환
*********************************************************************************************************/
function ConvertTextToHtml(text) {
  var entities = [
    ['amp', '&'],
    ['#37', '%'],
    ['#44', ','],
    ['lt', '<'],
    ['gt', '>'],
    ['apos', '\''],
    ['#x27', '\''],
    ['#39', '\''],
    ['quot', '"'],
    ['#34', '"'],
    ['#x2F', '/'],
    ['#47', '/'],
    ['nbsp', ' ']
  ];

  for (var i = 0, max = entities.length; i < max; ++i) {
    text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
  }
  return text;
}

/*
***************************************************************************************
*아이프레임을 내용에 따라 크기(폭,높이) 바꿔주는 스크립트

*아래 스크립트는 iframe에 들어갈 파일을 건드리지 않아도 됩니다. 
*객체에 대한 read/write권한을 위해서 같은 계정내의 파일이기만 하면 됩니다. 
*iframe에 들어갈 파일의 로딩이 완료되는 순간 doResize() 함수를 호출하여 iframe을 포함하는 TD태그의 width와 height를 강제로 바꿔줍니다. 
*Windows 2000, IE 6.0 에서는 잘 보이는데 다른 환경에서는 어떨런지 모르겠네요 :)

* 사용예.
*<table border="0" cellpadding="0" cellspacing="0"> 
*<tr> 
*<td id="container"><iframe src="your_file.html" name="myframe" width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="no" onload="doResize()"></iframe></td> 
*</tr> 
*</table> 
***************************************************************************************
*/
function doResize() {
  container.height = myframe.document.body.scrollHeight;
  container.width = myframe.document.body.scrollWidth;
}

/**
* 시작일자~종료일자 (금일, 전일, 금주, 전주, 금월, 전월)
*
* @param scope
* @return
*/
function scopeDate(scope) {
  var sDate = new Date();
  var eDate = new Date();

  switch (scope) {
    case "TODAY": break;
    case "YESTERDAY":
      sDate.setDate(sDate.getDate() - 1);
      eDate.setDate(eDate.getDate() - 1);
      break;
    case "THIS_WEEK":
      sDate.setDate(sDate.getDate() - sDate.getDay());
      break;
    case "LAST_WEEK":
      sDate.setDate(sDate.getDate() - (7 + sDate.getDay()));
      eDate.setDate(eDate.getDate() - (eDate.getDay() + 1));
      break;
    case "THIS_MONTH":
      sDate.setMonth(sDate.getMonth(), 1);
      break;
    case "LAST_MONTH":
      sDate.setMonth(sDate.getMonth() - 1, 1);
      eDate.setMonth(eDate.getMonth(), 0);
      break;
  }

  var seDate = new Array(2);
  //seDate[0] = sDate.getFullYear() + "" + rightPad(sDate.getMonth() + 1, 2) + rightPad(sDate.getDate(), 2);
  //seDate[1] = eDate.getFullYear() + "" + rightPad(eDate.getMonth() + 1, 2) + rightPad(eDate.getDate(), 2);
  seDate[0] = sDate.getFullYear() + "" + ('0' + (sDate.getMonth() + 1)).slice(-2) + ('0' + sDate.getDate()).slice(-2);
  seDate[1] = eDate.getFullYear() + "" + ('0' + (eDate.getMonth() + 1)).slice(-2) + ('0' + eDate.getDate()).slice(-2);

  return seDate;
}


/*==================
AJAX 공통 처리 
==================*/
function ajaxExec(_url, _method, _dataType, _data, _callback) {
  try {
    $.ajax({
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      url: _url,
      type: _method,
      dataType: _dataType,
      data: _data,
      success: function (data, status) {
        _callback(data);
      },
      error: function (request, status, error) {
        if (request.status == 403) {
          alert("장시간 미사용으로 자동로그아웃되었습니다. 재로그인 하여 주시기 바랍니다.");
        } else if (request.status == 500) {
          alert("시스템에 오류가 발생하였습니다. 다시 시도하여 주세요.");
        } else {
          alert("오류가 발생하였습니다.\n다시 시도하여 주세요. (" + error + ")");
        }
      }
    });
  } catch (e) {
    alert("오류 발생 (" + e.Description + ")");
  }
}

/*==================
 - AJAX 페이징 처리
   ㄴ 사용법 pagingList(현재페이지, 전체페이지수, 페이지당 출력수, 페이지 블럭출력수;
==================*/
function pagingList(nCurrent, nTotalMemoCnt, nPerPage, nPagePerBlock) {
  var nSeq = "1";
  var nPageModule = "A"

  var szHtml = "<ul class='pagination'>";

  nTotalMemoPage = Math.ceil(nTotalMemoCnt / nPerPage);

  //var nPagePerBlock = 5;
  var nBlock = Math.ceil(nCurrent / nPagePerBlock);
  var nTotalBlock = Math.ceil(nTotalMemoPage / nPagePerBlock);
  var nListPage = 0;

  // 맨처음 페이지
  var nPrevPage = (nBlock - 1) * nPagePerBlock;

  if (nBlock > 1) {
    //szHtml += ("<a href='javascript:setMovePage(" + nPrevPage + ");'>[이전]</a> ");
    szHtml += "<li><a href='javascript:setMovePage(1);' class='page-pprev'><span class='visuallyhidden'>이전 페이지목록</span></a></li>";
    if ((nBlock - 1) * nPagePerBlock < nCurrent) {
      szHtml += "<li><a href='javascript:setMovePage(" + (nBlock - 1) * nPagePerBlock + ");' class='page-prev' title='Last Page'></a></li>";
    }
  }

  for (var i = 1; i <= nPagePerBlock; i++) {
    nListPage = (nBlock - 1) * nPagePerBlock + i;

    if (nListPage > nTotalMemoPage) {
      break;
    }

    if (nListPage == nCurrent) {
      szHtml += "<li class='current'><a href='javascript:;' >" + nListPage + "</a></li>";
    }
    else {
      szHtml += "<li><a href='javascript:setMovePage(" + nListPage + ");'>" + nListPage + "</a></li>";
    }
  }
  szHtml += "&nbsp;";

  // 맨마지막 페이지
  var nNextPage = nBlock * nPagePerBlock + 1;

  if (nBlock < nTotalBlock) {
    szHtml += "<li><a href='javascript:setMovePage(" + nNextPage + ");' class='page-next'></a></li>";
    szHtml += "<li><a href='javascript:setMovePage(" + nTotalMemoPage + ");' class='page-nnext'><span class='visuallyhidden'>다음 페이지 목록</span></a></li>";
  }
  szHtml += "</ul>";
  return szHtml;
}

/*==================
JQuery EXTEND
==================*/

/**
 * Array.search(value)
 * - array search value return index(없으면 -1)
 *
 * @param value - 배열값
 * @return
 */
Array.prototype.search = function (value) {
  for (var i = 0; i < this.length; i++)
    if (this[i] == value) return i;
  return -1;
}

// 이메일 도메인
var EmailDomain = ["naver.com", "daum.net", "hanmail.net", "gmail.com", "nate.com", "hotmail.com"];

//쿠키정보 저장
function setCookie(name, value, expires, domain) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expires);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString(); + "; domain=" + domain + ";";
}

// 쿠키정보 가져오기
function getCookie(cName) {
  cName = cName + '=';
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';

  if (start != -1) {
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}

//모든 쿠키삭제
function setClearAllCookies(domain, path) {
  var doc = document,
    domain = domain || doc.domain,
    path = path || '/',
    cookies = doc.cookie.split(';'),
    now = +(new Date);
  for (var i = cookies.length - 1; i >= 0; i--) {
    doc.cookie = cookies[i].split('=')[0] + '=; expires=' + now + '; domain=' + domain + '; path=/' + path;
  }
}

// SPINNER SHOW/HIDE
function showSpinner(t) {
  if (t == true) {
    $(".spinner-layer").show();		// 스피너 보여줌    
    $.scrollLock(true);
  }
  else {
    $(".spinner-layer").hide();		// 스피너 숨짐    
    $.scrollLock(false);
  }
}

//인증번호 발송  
var AuthTimer;
function $AuthNumTimer() {
  //prototype extend
}
$AuthNumTimer.prototype = {
  comSecond: ''
  , fnCallback: function () { }
  , timer: ''
  , domId: ''
  , fnTimer: function () {
    //var m = Math.floor(this.comSecond / 60) + '분 ' + (this.comSecond % 60) + '초';	// 남은 시간
    var m = getFormatTime(this.comSecond);	// 남은 시간
    this.comSecond--;
    console.log(m);
    this.domId.innerText = m;
    if (this.comSecond < 0) {
      clearInterval(this.timer);		// timer 종료
      //chkMsg = fmAlert('', '인증시간이 초과하였습니다.<br>다시 인증해주시기 바랍니다.', 'black');
      //chkMsg.onDestroy = function () {
      authReset();  //인증 초기화
      $('#Re_AuthNum').attr('readonly', true);
      $('#msg_auth_time').show();
      $('#msg_auth_send').hide();
      $('#msg_auth_wrong').hide();
      //}
      //return;
    }
  }
  , fnStop: function () {
    clearInterval(this.timer);
  }
}


//다음 object로 focus() 이동
$(function () {
  $('.select').on('change', function () {
    $(this).next().focus();
  });

  //전화번호 다음 object로 focus() 이동
  $(".inputs").keyup(function () {
    var charLimit = $(this).attr("maxlength");
    if (this.value.length >= charLimit) {
      $(this).next().focus();
      return false;
    }
  });
});

//history.back() 경우 location.hash getParameter
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//이미지변환 data에서 순수 이미지데이터만 추출
function getConvertImageBlob(data) {
  if (data) return data.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
  //console.log("item_image", item_image);
}

//HEX-->REG 코드로 변환
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + ',' + g + ',' + b;
}


//시간 출력 형식 [00:00]
function getFormatTime(time) {
  time = Math.round(time);
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  this.time = minutes + ':' + seconds;
  return this.time;
}

//divice check
(function (a) {
  ($.browser = $.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);