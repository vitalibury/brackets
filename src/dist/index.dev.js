"use strict";

module.exports = function check(str, bracketsConfig) {
  var newArr = [str[0]];

  for (var i = 1; i < str.length; i++) {
    var symbolCount = newArr.length;

    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1] && newArr[newArr.length - 1] === bracketsConfig[j][0]) {
        newArr.pop();
      }
    }

    if (newArr.length === symbolCount) {
      newArr.push(str[i]);
    }
  }

  if (newArr.length === 0) {
    return true;
  } else {
    return false;
  }
};