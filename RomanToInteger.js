const romanToInt = function(s) {
    let result = 0
    let i = 0
    while (i < s.length) {
        switch (s.charAt(i)) {
            case 'M':
                if (i === 0 || s.charAt(i-1) !== 'C') {
                    result += 1000
                }
                break;
                
            case 'D':
                if (i === 0 || s.charAt(i-1) !== 'C') { 
                    result += 500
                }
                break;
                
            case 'C':
                if (s.charAt(i+1) === 'M') {
                    result += 900
                } else if (s.charAt(i+1) === 'D') {
                    result += 400
                } else if (s.charAt(i-1) !== 'X') {
                    result += 100
                } break;

            case 'L':
                if (i === 0 || s.charAt(i-1) !== 'X' ) {
                    result += 50
                 }
                break;

            case 'X':
                if (s.charAt(i+1) === 'C') {
                    result += 90
                } else if (s.charAt(i+1) === 'L') {
                    result += 40
                } else if (s.charAt(i-1) === 'I') {
                    break
                } else if (i === 0 || s.charAt(i+1) !== 'L', 'C') {
                    result += 10
                } break;

            case 'V':
                if (i === 0 || s.charAt(i-1) !== 'I') {
                    result += 5
                }
                break;

            case 'I':
                if (s.charAt(i+1) === 'X') {
                    result += 9
                } else if (s.charAt(i+1) === 'V') {
                    result += 4
                } else if (i === 0 || s.charAt(i+1) !== 'V') {
                    result += 1
                }
                break;
                
        }
        i++
    }
    return result
}
console.log('IX - 9')
console.log(romanToInt('IX'))
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
