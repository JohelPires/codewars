function narcissistic(value) {
    // Code me to return true or false

    let pol = 0 // Power of length
    let result = 0

    let arr = String(value).split('')
    arr.forEach(e => {
        pol = parseInt(e ** arr.length)
        result += pol
    });
    
    return (value === result)
  }
  
  
  console.log(narcissistic(371))
  console.log(narcissistic(372))