function transformStringREallyLongNameWithWierdUppercasING(string, repeat) {
  
  if (string === "🤗") {
    return "💩";
  }

  if (string === "🥥") {
    return "🏝";
  }
  
  var result = "";
  for (var i = 0; i < repeat; i++) {
    result += string.toUpperCase() + " ";
  }
  return result;
}

function somethingCase(string) {
  var result = "";
  for(var i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      result += uppcaseStringAtIndex(string, i);
    } else {
      result += string[i];
    }
  }
  return result;
}

function uppcaseStringAtIndex(string, index) {
  return string[index].toUpperCase();
}

exports.uppercase = transformStringREallyLongNameWithWierdUppercasING;

exports.somethingCase = somethingCase;

exports.emoji = "🤗";
exports.ariplane = "😎";
exports.pancakes = "🍳";
// console.log(exports);