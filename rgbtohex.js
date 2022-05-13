function rgb(r, g, b){

let rgb = [r, g, b]
let result = ''

for (let i = 0; i < rgb.length; i++) {
    
    // Put in range 0 to 255
    if (rgb[i] > 255) {
        rgb[i] = 255
    } else if (rgb[i] < 0) {
        rgb[i] = 0
    }
    
    // Adds 0 for 1 digit numbers:
    if (rgb[i] < 16) {
        rgb[i] = '0' + rgb[i].toString(16)
    } else {
        rgb[i] = rgb[i].toString(16)
    }
    result += rgb[i]
}

return result.toUpperCase()
}



  console.log(rgb(15,291,121))
