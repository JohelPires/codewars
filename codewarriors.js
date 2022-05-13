function XO(str) {
    //code here

    var nofX = 0
    var nofO = 0
    const str2 = Array.from(str)
    
    str2.forEach(element => {
        if (element.toLowerCase() =='x') {
            nofX = nofX + 1
        } else if (element.toLowerCase() =='o') {
            nofO = nofO + 1
        }
        
    });

    if (nofX == nofO){
        return(true)
    } else {
        return(false)
    }
        
        
            


    // for (let i = 0; i  < str.length; i++) {
    //     console.log(i, str)

    // }
}

XO('This is an odd exempleXO')