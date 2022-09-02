def arithmetic_arranger(problems, res=False):
    size = len(problems)
    if size > 5:
        return 'Error: Too many problems.'

    parr = []

    for i, problem in enumerate(problems):
        if (problem.split()[1] != '+') and (problem.split()[1] != '-'):
            return "Error: Operator must be '+' or '-'."
        parr.append(problem.split())

    line1 = ''
    line2 = ''
    line3 = ''
    line4 = ''
    for idx, item in enumerate(parr):
        a, b, operand = item[0], item[2], item[1]

        if len(a) > 4 or len(b) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        try:
            int(a)
            int(b)
        except:
            return 'Error: Numbers must only contain digits.'

        opresult = eval(f'{item[0]} {operand} {item[2]}')

        maxlen = max(len(a), len(b)) + 2
        space = ' ' * (maxlen - len(a))

        if idx == len(parr) - 1:
            endspace = ''
        else:
            endspace = '    '

        line1 += f'{space}{a}{endspace}'
        if len(b) > len(a):
            space = ' '
        else:
            space = ' ' * (maxlen - len(b) - 1)
        line2 += f'{operand}{space}{b}{endspace}'
        line3 += '-' * maxlen + endspace
        if res == True:
            space = ' ' * (maxlen - len(str(opresult)))
            line4 += f'{space}{opresult}{endspace}'

    # result = f'''
    # {line1}
    # {line2}
    # {line3}
    # {line4}
    # '''

    if res == True:
        result = f'{line1}\n{line2}\n{line3}\n{line4}'
    else:
        result = f'{line1}\n{line2}\n{line3}'

    return result


print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))

print(arithmetic_arranger(['3801 - 2', '123 + 49']))

print(arithmetic_arranger(
    ["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))

'  3801      123\n-    2    +  49\n------    -----\n'
'  3801      123\n-    2    +  49\n------    -----'
