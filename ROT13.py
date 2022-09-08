def rot13(message):
    message = list(message)
    for i in range(len(message)):
        message[i] = ord(message[i])

        if (message[i] >= 97 and message[i] <= 122):
            message[i] = message[i] + 13
            if message[i] > 122:
                message[i] = (message[i] - 122) + 96

        elif (message[i] >= 65 and message[i] <= 90):
            message[i] = message[i] + 13
            if message[i] > 90:
                message[i] = (message[i] - 90) + 64

        message[i] = chr(message[i])
    result = ''.join(message)

    return result


print(rot13('az'))  # , 'grfg',
print(rot13('AZ'))  # , 'grfg',
print(rot13('test'))  # , 'grfg',
print(rot13('Test'))  # , 'Grfg',
print(rot13('aA bB zZ 1234 *!?%'))  # , 'nN oO mM 1234 *!?%',
