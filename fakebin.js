function fakeBin(x){
    return x.split('').map(parseFloat).map(n => n>=5 ? 1 : 0).join('')
}

console.clear()
console.log(fakeBin('45385593107843568'))//, '01011110001100111');