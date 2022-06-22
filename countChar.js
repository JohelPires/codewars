// function countChar(str) {
//   // declarar um objeto resultado
//   const result = {}
//   // loop por todos os caracteres da string
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase()
//     if (char in result) {
//       result[char] += 1
//     } else if (/[a-z\d]/.test(char)) {
//       result[char] = 1
//     }
//   }
//   // verificar se o caractere já existe no resultado
//   // se existe, incrementar
//   // se não, adicionar
//   // retornar resultado
//   return result
// }

function countChar(str) {
  // declarar um objeto resultado
  const result = {}

  for (let char of str) {
    char = char.toLowerCase()

    if (char in result) {
      result[char]++
    } else if (/[a-z\d]/.test(char)) {
      result[char] = 1
    }
  }

  return result
}

console.log(countChar('aaaa'))
// {a: 4}
console.log(countChar('Your PIN number is 1234!'))
// {
//    y: 1,
//    o: 1,
//    u: 2,
//    r: 2,
// .
// .
// .
// }
