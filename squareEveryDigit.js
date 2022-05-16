function squareDigits(num){
    return parseInt(num.toString().split('').map(parseFloat).map(n => n * n).join(''))
  }



  console.clear();
    console.log(squareDigits(3212))//, 9414);
    console.log(squareDigits(2112))//, 4114);
    console.log(squareDigits(0)) //, 0);