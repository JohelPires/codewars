function formatDuration (seconds) {

    // function Hours(seconds){
    //     if (seconds >= 3600 && seconds < 3600*2) {
    //         return '1 hour'
    //     } else if (seconds >= 3600*2 && seconds < 3600*24){
    //         return Math.floor(seconds/3600) + ' hours'
    //     } else {
    //         return ''
    //     }
    // }

    function Hours(seconds){
        if (seconds >= 3600 && seconds < 3600*2) {
            return ['1 hour', seconds - 3600]
        } else if (seconds >= 3600*2 && seconds < 3600*24){
            const h = Math.floor(seconds/3600)
            return [h + ' hours', seconds - 3600*h]
        } else {
            return ['', seconds]
        }
    }


    // Hsec é um array contendo horas e segundos
    function Minutes(Hsec){
        if (Hsec[1] >= 60 && Hsec[1] < 60*2) {
            return ['1 minute', Hsec - 60]
        } else if (seconds >= 60*2 && seconds < 60*60){
            const m = Math.floor(seconds / 60)
            return [m + ' minutes', Hsec - 60*m]
        } else {
            return ''
        }
    }

    function Seconds(seconds){
        if (seconds == 1) {
            return '1 second'
        } else if (seconds > 1 && seconds < 60){
            return seconds + ' seconds'
        } else {
            return ''
        }
    }
    // if (seconds / 3600 > 1){
    //     return Math.floor(seconds / 3600) + ' hour, ' + seconds % 3600 + ' minutes'
    // }
    

    // Adds the 'ands' and ','s :
    // let result = '';

    // if (Hours(seconds) && Minutes(seconds) && Seconds(seconds)) {
    //     result += Hours(seconds) + ', ' + Minutes(seconds) + ' and '+ Seconds(seconds)
    // }
    // if (Hours(seconds) && Minutes(seconds) && !Seconds(seconds)) {
    //     result += Hours(seconds) + ' and ' + Minutes(seconds)
    // }
    // if (Hours(seconds) && !Minutes(seconds) && Seconds(seconds)) {
    //     result += Hours(seconds) + ' and ' + Seconds(seconds)
    // }
    // if (!Hours(seconds) && !Minutes(seconds) && Seconds(seconds)) {
    //     result += Seconds(seconds)
    // }
    // if (!Hours(seconds) && Minutes(seconds) && Seconds(seconds%60)) {
    //     result += Minutes(seconds) + Seconds(seconds)
    //}

    return Minutes(Hours(seconds))
  }

  

console.log('testes:')
console.log(formatDuration(1)) //, "1 second");
console.log(formatDuration(62)) //, "1 minute and 2 seconds");
console.log(formatDuration(120)) //, "2 minutes");
console.log(formatDuration(3600)) //, "1 hour");
console.log(formatDuration(3662)) //, "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(7662))