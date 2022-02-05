var romanToInt = function(s) {
    const dic = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    };
    const reverseArr = s.split("").reverse();
    let level = 0;
    let sum = 0;
    reverseArr.forEach(item => {
      const newLevel = dic[item];
      if (newLevel >= level) {
        sum += newLevel;
        level = newLevel;
      } else {
        sum -= newLevel;
      }
    });
    return sum;
};
console.log('IXM - eerror')
console.log(romanToInt('IXMM'))
console.log('IV - 4')
console.log(romanToInt('IV'))

console.log('XXXI - 31')
console.log(romanToInt('XXXI'))
console.log('VII - 7')
console.log(romanToInt('VII'))
console.log('CLXVII - 167')
console.log(romanToInt('CLXVII'))
console.log('LXVII - 67')
console.log(romanToInt('LXVII'))
console.log('DCLXVII - 667')
console.log(romanToInt('DCLXVII'))
console.log('MCMLIV - 1954')
console.log(romanToInt('MCMLIV'))
console.log('MDCCCLXXXVIII - 1888')
console.log(romanToInt('MDCCCLXXXVIII'))