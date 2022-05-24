function sumStrings(a,b) { 
    const num1 = BigInt(a) ? BigInt(a) : 0
    const num2 = BigInt(b) ? BigInt(b) : 0


  return (num1+num2).toString()
    
  }
console.clear()
console.log(sumStrings('273', '9284'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
//: expected '7.125774134884027e+26' to equal '712577413488402631964821329'
