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
        print(sval)

        m = ['', 'M', 'MM', 'MMM']
        c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        d = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        u = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

        # for i in range(len(sval)):
        #     print(i)

        result = f'{m[int(sval[0])]}{c[int(sval[1])]}{d[int(sval[2])]}{u[int(sval[3])]}'

        return result

    def from_roman(roman_num):

        result = roman_num

        m = ['', 'M', 'MM', 'MMM']
        c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        d = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        u = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

        # MDCLXVI
        result = ['0', '0', '0', '0']
        # result = result.replace('IV', '4')
        # result = result.replace('XL', '4')
        # result = result.replace('IV', '4')
        if 'IV' in roman_num:
            result[3] = '4'
        else:
            for i in range(len(u)-1, 0, -1):
                if u[i] in roman_num:
                    result[3] = str(i)
                    break

        if 'XL' in roman_num:
            result[2] = '4'
        else:
            for i in range(len(d)-1, 0, -1):
                if d[i] in roman_num:
                    result[2] = str(i)
                    break
        if 'CD' in roman_num:
            result[1] = '4'
        else:
            for i in range(len(c)-1, 0, -1):
                if c[i] in roman_num:
                    result[1] = str(i)
                    break
        for i in range(len(m)-1, 0, -1):
            if m[i] in roman_num:
                result[0] = str(i)
                break

        result = ''.join(result)

        return int(result)


print(RomanNumerals.from_roman('X'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('IX'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('VIII'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('VII'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('VI'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('V'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('IV'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('III'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('II'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('I'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('XXI'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('I'))  # , 1, 'I should == 1'))
print(RomanNumerals.from_roman('IV'))  # , 4, 'IV should == 4'))
print(RomanNumerals.from_roman('MMVIII'))  # , 2008, 'MMVIII should == 2008'))
# , 1666, 'MDCLXVI should == 1666'))
print(RomanNumerals.from_roman('MDCLXVI'))
