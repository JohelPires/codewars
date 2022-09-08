# I 	1
# IV 	4
# V 	5
# X 	10
# L 	50
# C 	100
# D 	500
# M 	1000

class RomanNumerals:

    def to_roman(val):
        sval = list(str(val))
        while len(sval) < 4:
            sval.insert(0, '0')

        m = ['', 'M', 'MM', 'MMM']
        c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        d = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        u = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

        result = f'{m[int(sval[0])]}{c[int(sval[1])]}{d[int(sval[2])]}{u[int(sval[3])]}'

        return result

    def from_roman(roman_num):

        result = roman_num

        m = ['', 'M', 'MM', 'MMM']
        c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        d = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        u = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

        result = ['0', '0', '0', '0']

        if 'IV' in roman_num:
            roman_num = roman_num.replace('IV', '')
            result[3] = '4'
        else:
            for i in range(len(u)-1, 0, -1):
                if u[i] in roman_num:
                    roman_num = roman_num.replace(u[i], '')
                    result[3] = str(i)
                    break

        if 'XL' in roman_num:
            roman_num = roman_num.replace('XL', '')
            result[2] = '4'
        else:
            for i in range(len(d)-1, 0, -1):
                if d[i] in roman_num:
                    roman_num = roman_num.replace(d[i], '')
                    result[2] = str(i)
                    break
        if 'CD' in roman_num:
            roman_num = roman_num.replace('CD', '')
            result[1] = '4'
        else:
            for i in range(len(c)-1, 0, -1):
                if c[i] in roman_num:
                    roman_num = roman_num.replace(c[i], '')
                    result[1] = str(i)
                    break
        for i in range(len(m)-1, 0, -1):
            if m[i] in roman_num:
                roman_num = roman_num.replace(m[i], '')
                result[0] = str(i)
                break

        result = ''.join(result)

        return int(result)


print(RomanNumerals.to_roman(2509))  # , 21, 'XXI should == 21'))
print(RomanNumerals.to_roman(956))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('CMLVI'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('MMDIX'))  # , 21, 'XXI should == 21'))
