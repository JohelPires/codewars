function solution(str, ending){
    // TODO: complete
    
    if (ending == str.slice(str.length - ending.length)) {
        return true 
    } else {
        return false
    }
    // return str.includes(ending)
  }

  console.log(solution('abc', 'bc'))