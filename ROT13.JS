function rot13(str) {

    // console.log('!'.charCodeAt(0))
    // console.log('?'.charCodeAt(0))
    console.log('Z'.charCodeAt(0))
    console.log('?'.charCodeAt(0))
    console.log('!'.charCodeAt(0))
    // console.log(str.charCodeAt(1))
    const result = []

    for (let i = 0; i < str.length; i++){
        const n = str.charCodeAt(i)
        if (n >= 78 && n <= 90){
            result.push(String.fromCharCode(n - 13))
        } else if (n >= 65 && n < 78){
            result.push(String.fromCharCode(n + 13))
        } else {
            result.push(String.fromCharCode(n))
        }
    }


    return result.join('')
  }
  
  
  console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVXYZ"))
    console.log(rot13("NOPQRSTUVXYZABCDEFGHIJKLM"))
