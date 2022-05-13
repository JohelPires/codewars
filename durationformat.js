function formatDuration (seconds) {

    // let sec;
    // let min;
    // let hour;
    // let day;
    // let year;
    // let result;


    function getsec(seconds) {
        let sec = seconds/60
        if (sec === 1){
            return '1 second.'
        } else if (sec < 1){

        }

    }


// if (seconds > 60){
//     min = Math.floor(seconds/60)
//     sec = seconds % 60
// } else {min = 0}

// if (min >= 60){
//     hour = Math.floor(min/60)
//     min = min % 60
// } 

// if (hour >= 24){
//     day = Math.floor(hour/24)
//     hour = hour % 24
// }

// if (day >= 365){
//     year = Math.floor(day/365)
//     day = day % 365
// }



result = `${year}y, ${day}d, ${hour}h, ${min}m, ${sec}`

    
    // if (seconds === 1) {
    //     return '1 second.'
        
    // }
    // if (seconds > 1) {
    //     if (seconds < 60) {
    //         return `${seconds} seconds.`
    //     }

    // }
    // }

    // //MINUTES:

    // if (seconds => 60) {
    //     min = Math.floor(seconds/60)
    //     sec = seconds % 60
    //     if (sec===0){
            
    //     }
    //     return `${min} minute and ${sec} seconds.`
    // }
    
    // if (seconds => 60) {
    //     hour = Math.floor(min/60)
    //     min += min % 60
    //     result = `${hour} hours, ${min} minute and ${sec} seconds.`
    // }
    
    
    // result = `${hour} hours, ${min} minutes and ${sec} seconds.`
     
    return result

  }

  

  console.log(formatDuration(1))
  console.log(formatDuration(62))
  console.log(formatDuration(120))
  console.log(formatDuration(3600))
  console.log(formatDuration(3623462))

  console.log(formatDuration(3513006234262))