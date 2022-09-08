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

        # casa dos milhares:
        m = ['', 'M', 'MM', 'MMM']
        c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        d = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        u = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

        # for i in range(len(sval)):
        #     print(i)

        result = f'{m[int(sval[0])]}{c[int(sval[1])]}{d[int(sval[2])]}{u[int(sval[3])]}'

        return result

    def from_roman(roman_num):
        return 0


print(RomanNumerals.to_roman(1000))  # , 'M', '1000 should == "M"'))
print(RomanNumerals.to_roman(4))  # , 'IV', '4 should == "IV"'))
print(RomanNumerals.to_roman(1))  # , 'I', '1 should == "I"'))
print(RomanNumerals.to_roman(1990))  # , 'MCMXC', '1990 should == "MCMXC"'))
print(RomanNumerals.to_roman(2008))  # , 'MMVIII', '2008 should == "MMVIII"'))
print(RomanNumerals.from_roman('XXI'))  # , 21, 'XXI should == 21'))
print(RomanNumerals.from_roman('I'))  # , 1, 'I should == 1'))
print(RomanNumerals.from_roman('IV'))  # , 4, 'IV should == 4'))
print(RomanNumerals.from_roman('MMVIII'))  # , 2008, 'MMVIII should == 2008'))
# , 1666, 'MDCLXVI should == 1666'))
print(RomanNumerals.from_roman('MDCLXVI'))
