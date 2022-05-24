function validParentheses(parens) {
    // your code here ..


    //se o numero de parenteses ( em sequencia for igual ao numero de parenteses ) em sequencia
/*
    if (parens[0] == ')') {
        return false
    }
    if (parens.length===1){
        return false
    }
    const open = [...parens.matchAll(/\(+/g)]
    const close = [...parens.matchAll(/\)+/g)]
    for (let i = 0; i < open.length;i++){
        if (open[i][0].length != close[i][0].length){
            return false
        } 
        // console.log(open[i][0], close[i][0])
    }
    return true
*/

return parens.split('()')

}


  console.clear()
  console.log(validParentheses('(()()()())(())'))