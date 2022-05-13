function arrayDiff(a, b) {
    var result = []
    var n = a.length
  b.forEach(e => {
      for (let i = 0; i <= n; i++){ 
        if (a[i]==e) {
            console.log(n)
            a.splice(i,1)
            i=i-2
        }
      }
      
  });
  return a
}




// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], [2])) 
// console.log(arrayDiff([1,2,2], []))
// console.log(arrayDiff([], [1,2]))
// console.log(arrayDiff([1,2,3], [1,2]))
