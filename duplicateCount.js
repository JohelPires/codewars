function duplicateCount(text){
    let arr = Array.from(text.toLowerCase())
    let counter = 0

    let repeats = new Set()
    
    arr.forEach(e => {

      for (let i = 0; i <= arr.length; i++) {
        if (e === arr[i]) {
          counter++
        }

    }      
    if (counter > 1) {
        repeats.add(e)
      }
      counter = 0
    });
    return repeats.size
  }




// const arry = [1, 2, 1, 3, 4, 3, 5, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);


console.log(duplicateCount("aabBcde"))