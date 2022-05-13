function pigIt(str){

    let arr = str.split(' ')
    let result = ''

    arr.forEach(e => {
        if ((e == '!') || (e == '?') || (e == '.')) {
            result += e
        } else {
            e.split('')
            e = e + e[0] + 'ay'
            e = e.slice(1, e.length)
            result += e + ' '            
        }
    });
    if (result[result.length - 1] == ' '){
        result = result.slice(0, result.length - 1)

    }
    
    return result
}



console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
console.log(pigIt('Hello world ?'));     // elloHay orldway !
