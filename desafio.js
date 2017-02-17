var mapAlienToRoman = {
  "isk":   "I",
  "vev":   "V",
  "xesh":  "X",
  "leth":  "L",
  "cresh": "C",
  "dorn":  "D",
  "mern":  "M"
}

var mapRomanToNumber = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

function alienToRoman(alienNumber) {
  var roman = "";
  var list = alienNumber.split(' ');
  for(var i = 0; i < list.length; i++) {
    roman += mapAlienToRoman[list[i]];
  }
  return roman;
}

function getAmountInCredits(quotation, alienNumber) {
  console.log(alienToRoman("isk isk isk"));
}
