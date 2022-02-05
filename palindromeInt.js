var isPalindrome = function(x) {
    let word = `${x}`
    word = +word.split('').reverse().join('')
    if (x === word) {
        return true
     } else {
        return false      
     }
};
console.log(isPalindrome(-12321))