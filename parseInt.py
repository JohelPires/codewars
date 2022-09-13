
def parse_int(string):
    # onetonineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    #                  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    number_dict = {'zero': 0,
                   'one': 1, 'two': 2,
                   'three': 3, 'four': 4,
                   'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
                   'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,

                   'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
                   'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,

                   'hundred': 100,
                   'thousand': 1000,
                   'million': 1000000

                   }

    result = string.split(' ')
    if 'and' in result:
        idx = result.index('and')
        result.pop(idx)

    def oneword(str):
        if '-' in str:
            str = str.split('-')
            result = number_dict[str[0]] + number_dict[str[1]]
        else:
            result = number_dict[str]
        return result

    def threewords(str):
        pass

    if len(result) == 1:
        result = oneword(result[0])
    elif len(result) == 2:
        result = oneword(result[0]) * number_dict[result[1]]
    elif len(result) == 3:
        third = oneword(result[2])
        result = number_dict[result[0]] * number_dict[result[1]] + third

    elif len(result) > 3:
        left = str(parse_int(' '.join(result[:3])))
        right = str(parse_int(' '.join(result[4:])))
        result = f'{left}{right}'

    return result


print(parse_int('twenty-six thousand three hundred and fifty-nine'))  # , 100)
print(parse_int('one hundred'))  # , 100)
print(parse_int('twenty'))  # 20)
print(parse_int('forty-six'))  # 46)
print(parse_int('seventy-eight'))  # 46)
print(parse_int('twenty-one'))  # 46)
print(parse_int('two hundred forty-six'))  # 246)
print(parse_int('nine hundred seventy-nine'))  # 246)
print(parse_int('nine hundred nineteen'))  # 246)
# , 783919
print(parse_int('seven hundred eighty-three thousand nine hundred and nineteen'))


# one
# two
# three
# four
# five
# six
# seven
# eight
# nine
# ten
# eleven
# twelve
# thirteen
# fourteen
# fifteen
# sixteen
# seventeen
# eighteen
# nineteen
# twenty
# twenty-one
# twenty-two
# twenty-three
# twenty-four
# twenty-five
# twenty-six
# twenty-seven
# twenty-eight
# twenty-nine
# thirty
# thirty-one
# thirty-two
# thirty-three
# forty
# fifty
# sixty
# seventy
