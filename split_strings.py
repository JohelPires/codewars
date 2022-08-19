def split_string(s):
    result = []
    if len(s) % 2 != 0:
        s += '_'
    for i in range(0, len(s)-1, 2):
        pair = s[i]+s[i+1]
        result.append(pair)
    return result


print(split_string('asdfads'))
