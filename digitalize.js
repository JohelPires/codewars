function digitize(n) {
    let arr = n.toString()
    arr = arr.split('')
    arr.reverse()

    for (let i = 0; i < arr.length; i++) {
         arr[i] = parseInt(arr[i])
     }

    return arr
}


digitize(35231)