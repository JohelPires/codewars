// M 	1000
// CM 	900
// D 	500
// CD 	400
// C 	100
// XC 	90
// L 	50
// XL 	40
// X 	10
// IX 	9
// V 	5
// IV 	4
// I 	1


function convertToRoman(num) {

    const arr = num.toString().split('')
    const unid = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    const dezenas = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
    const cent = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']
    const mil = ['', 'M', 'MM', 'MMM', ]//'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']

    switch (arr.length) {
        case 1:
            return unid[num]
            break;
        case 2:

            return dezenas[parseInt(arr[0])] + unid[parseInt(arr[1])]
            break;
        case 3:
            return cent[parseInt(arr[0])] + dezenas[parseInt(arr[1])] + unid[parseInt(arr[2])]
            break;
        case 4:
            return mil[parseInt(arr[0])] + cent[parseInt(arr[1])] + dezenas[parseInt(arr[2])] + unid[parseInt(arr[3])]
            break;
    
        default:
            break;
    }

   
    return result;
}
   
   console.log(convertToRoman(600))