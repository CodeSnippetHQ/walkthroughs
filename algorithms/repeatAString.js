// https://codesnippet.io/repeat-a-string-repeat-a-string/

function repeatStringNumTimes(str, num) {
  // repeat after me

  var repeatedStr = [];

  if(num < 1) {
    return "";
  }

  for(var i = 0; i < num; i++) {
    repeatedStr.push(str);
  }

  return repeatedStr.join('');
}

repeatStringNumTimes("abc", 3);

