function order(words){
    // ...

    const arr = words.split(' ')
    const result = [...arr]


    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){

        // console.log(arr[i], arr[i][j], parseInt(arr[i][j]))
        the_number = parseInt(arr[i][j])
        
        // console.log(!isNaN(the_number))
        if (!isNaN(the_number)){
          console.log(the_number)
          result[the_number - 1] = arr[i]
        }
        
      }

      }
  
      return result.join(' ')

    }
  
    
  
  
  console.log(order("is2 Thi1s T4est 3a"))