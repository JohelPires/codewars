function expandedForm(num) {
    const arr = (''+num).split('')
    let NumAndZ = []; //Represents a number followed by the number of zeros.
    for (i in arr){
      
      NumAndZ.push([arr[i], arr.length-1-i])
      // console.log(NumAndZ)
       
    }

    function putZeros(nz) {
      let zeros = ''
      if (nz[0]!=='0') {
        for (let j = 0; j < nz[1]; j++){
          zeros += '0'
        }
      }
      return nz[0] + zeros
    }

    let result = NumAndZ.map(putZeros).filter(item => item !== '0').join(' + ')
    return result
}

console.clear()
console.log(expandedForm(12))//, '10 + 2');
console.log(expandedForm(42))//, '40 + 2');
console.log(expandedForm(70304))//, '70000 + 300 + 4');