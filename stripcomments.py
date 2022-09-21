import re


def strip_comments(string, markers):
    string = string.split('\n')

    # for s in string:
    #     line = []
    #     words = s.split(' ')
    #     for word in words:
    #         if word != '#':
    #             line.append(word)
    #     print(line)
    newstring = []

    for line in string:
        newline = ''
        for i in range(len(line)):
            if line[i] == '#':
                break
            newline += line[i]
        newstring.append(newline)

    return newstring


print(strip_comments('apples, pears # and bananas\ngrapes\nbananas !apples', [
      '#', '!']))  # 'apples, pears\ngrapes\nbananas')
# print(strip_comments('a #b\nc\nd $e f g', ['#', '$']))  # 'a\nc\nd')
# print(strip_comments(' a #b\nc\nd $e f g', ['#', '$']))  # ' a\nc\nd')
