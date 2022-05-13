function highAndLow(numbers){

const numbersArr = numbers.split(' ')

if (numbersArr.length == 1){
    return numbers + ' ' + numbers
}

for (let i = 0; i < numbersArr.length; i++){
    numbersArr[i] = parseInt(numbersArr[i])
}



let higher = numbersArr.sort((a,b) => a-b).pop()
let lower = numbersArr.sort((a,b) => a-b).shift()


return higher + ' ' + lower


}


// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(Math.floor(Math.random() * (15 - 13 + 1)) + 13)

console.log(0.2*3+13)


