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

        line1 += f'{space}{a}    '
        if len(b) > len(a):
            space = ' '
        else:
            space = ' ' * (maxlen - len(b) - 1)
        line2 += f'{operand}{space}{b}    '
        line3 += '-' * maxlen + '    '
        if res == True:
            space = ' ' * (maxlen - len(str(opresult)))
            line4 += f'{space}{opresult}    '

    result = f'''
    {line1}
    {line2}
    {line3}
    {line4}
    '''

    return result


# print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))

print(arithmetic_arranger(['1 + 2', '1 - 9380']))

# print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))
