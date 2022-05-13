function generateHashtag (str) {
    if (/^\s*$/.test(str)){
        return false
      }
    console.log(str)
    str = str.replace(/\s{2,}/g, ' ')
    console.log(str)
    const arr = str.split(' ')
    let capitalize
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        capitalize = arr[i][0].toUpperCase() + arr[i].slice(1)
        
        result += capitalize
    
    }


    if (result.length >= 140) {
        return false
    }

    return '#' + result
}


console.log(generateHashtag("Do We have A Hashtag"))


console.log(generateHashtag("code" + " ".repeat(140) + "wars"))