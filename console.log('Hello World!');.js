// // let arr = [1, 2, 4, 6, 8, 67]
// // const arrTwo = (arr) => [...arr,...arr] 
// // console.log(arrTwo(arr));

// const phrase = 'kavabanga'
// let i = 0
// while (i < phrase.length) {
//     switch (phrase.charAt(i)) {
//         case 'a':
//             console.log('bukva a')
//             break
//         case 'b':
//             console.log('bukva b')
//             break
//         default:
//             console.log('ne A i ne B')
//     }
//     i++
// // }
// const xxx = 1213516
// let word = `${xxx}`
// console.log(word)
// word = +word.split('').reverse().join('')
// console.log(word)
// let a = 2 + word
// console.log(a)




var obj = Object.create({ foo: 1 }, { // foo является унаследованным свойством.
    bar: {
      value: 2  // bar является неперечисляемым свойством.
    },
    baz: {
      value: 3,
      enumerable: true  // baz является собственным перечисляемым свойством.
    }
  });
  
  var copy = Object.assign({}, obj);
  console.log(copy); // { baz: 3 }