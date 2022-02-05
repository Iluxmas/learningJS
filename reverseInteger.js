var reverse = function(x) {
    let word
    if (x<0) {
        x *= -1
        word = `${x}`
        word = +word.split('').reverse().join('') * -1
    } else {
    word = `${x}`
    word = +word.split('').reverse().join('')
    }
    if (Math.abs(word) > 2 ** 32 - 1 ) {
        return 0
    }
    return word
};
console.log(reverse(-1222660969993))