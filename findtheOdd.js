function findOdd(A) {
    let result = 0
    let counter = 0
    A.forEach(e => {
        for (let i = 0; i < A.length; i++) {
            if (e === A[i]) {
                counter++
            }
        }
        if (counter/2 !== Math.floor(counter/2)) {
            result = e
        }
        counter = 0
    });



    return result
  }

  console.log(findOdd([0,1,0,1,0]))