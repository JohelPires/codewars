function palindrome(string) {
    const str = string
        .split(' ')
        .join('')
        .toLowerCase()
        .split(/[.,!?_-]/)
        .join('')
        .split('/')
        .join('')
        .split('\\\\')
        .join('')
        .split('(')
        .join('')
        .split(')')
        .join('')
    const rev = []
    for (let i = str.length-1; i >= 0; i--) {
        rev.push(str[i])

    }

    
    return (rev.join('') === str);
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))

console.log(palindrome("1 eye for of 1 eye."))

console.log(palindrome("race car"), '. should return true.')

console.log(palindrome("not a palindrome"), '. should return false.')

console.log(palindrome("A man, a plan, a canal. Panama"), '. should return true.')