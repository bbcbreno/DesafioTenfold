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

function romanToNumber(roman) {
  var number = 0;
  for(var i = 0;i < roman.length; i++) {
    var actual = mapRomanToNumber[roman[i]];
    var next = mapRomanToNumber[roman[i+1]];

    if(next == undefined) {
      next = 0;
    }
    if (actual >= next) {
      number += actual;
    } else {
      number -= actual;
    }
  }
  return number
}

function getAmountInCredits(quotation, alienNumber) {
  var roman = alienToRoman(alienNumber);
  var sum = romanToNumber(roman);
  console.log("ROMAN: "+roman);
  console.log("SUM: "+sum);
}
