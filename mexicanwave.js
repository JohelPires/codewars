function wave(str){
    return str
        .toUpperCase()
        .split('')
        .map((v,i) => v !== ' ' ? str.slice(0,i) + v + str.slice(i+1, str.length): v)
        .filter(v => v !==' ')
}
console.clear()
console.log(wave("he llo")) // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]