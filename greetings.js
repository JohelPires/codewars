
const date = new Date()
let result

function greetings(name) {
    const h = date.getHours()

    if (h < 4){
        result = 'good night, '+ name
    } else if (h < 12){
        result = 'good morning, '+ name
    } else if (h < 17) {
        result = 'good afternoon, '+ name
    } else if (h < 20) {
        result = 'good evening, '+ name
    } else {
        result = 'good night, '+ name
    }
    
    return result
}

console.clear()
console.log(greetings('Bob'))