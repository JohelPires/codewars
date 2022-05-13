// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).


function gap(g, m, n) {
    // your code

    const arr = []

    for (let i = m; i < n; i++){

        arr.push(i)
    }
    const primes = arr.filter(isPrime)

    for (let j = 0; j < primes.length; j++){
        if (primes[j+1] - primes[j] == g) {
            return [primes[j], primes[j+1]]
        }
    }


 return null
}


console.clear()
console.log(gap(2,100,110))//, [101, 103]);
console.log(gap(4,100,110))//, [103, 107]);
console.log(gap(6,100,110))//, null);
console.log(gap(8,300,400))//, [359, 367]);
console.log(gap(10,300,400))//, [337, 347]);

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }


// console.log(isPrime(17))