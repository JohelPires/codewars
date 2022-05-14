
function gap(g, m, n) {
    // your code
  
  function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

    const arr = []

    for (let i = m; i < n; i++){

        arr.push(i)
    }
    const primes = arr.filter(isPrime)

    // for (let j = 0; j < primes.length; j++){
    //     if (primes[j+1] - primes[j] == g) {
    //         return [primes[j], primes[j+1]]
    //     }
    // }


 return primes.filter((a, i, arr) => arr[i+1]-arr[i]==g)
}

console.clear()
console.log(gap(2,100,110))//, [101, 103]);
console.log(gap(4,100,110))//, [103, 107]);
console.log(gap(6,100,110))//, null);
console.log(gap(8,300,400))//, [359, 367]);
console.log(gap(10,300,400))//, [337, 347]);
