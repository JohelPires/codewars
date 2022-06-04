function rot13(str) {

    // console.log('!'.charCodeAt(0))
    // console.log('?'.charCodeAt(0))
    console.log('Z'.charCodeAt(0))
    console.log('?'.charCodeAt(0))
    console.log('!'.charCodeAt(0))
    // console.log(str.charCodeAt(1))
    const result = []

    for (let i = 0; i < str.length; i++){
        result.push(str.charCodeAt(i))
    }


    return str
        .split('')
        .map(char => /[A-Z/g]/.test(char) ? char.charCodeAt(0) - 13 : char.charCodeAt(0))
        .map(char => char < 65 && char > 52 ? char + 26 : char)
        .map(char => String.fromCharCode(char))
        .join('')
    return result.map(n => {
        n = n-13
        if (n < 65){
            n = n + 26
        }
        return n
    }).map(char => String.fromCharCode(char))
  }
  
  console.log(rot13("SERR YBIR?"))
  console.log(rot13("SERR CVMMN!"))
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))