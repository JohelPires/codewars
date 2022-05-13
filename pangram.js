function isPangram(string){
    string = string.toLowerCase()

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alphabet.length; i++){
        if (string.includes(alphabet[i]) == false){
            return false
        }

    }
    return true

  }



console.log(isPangram('The quick brown fer the lazy dog.'))