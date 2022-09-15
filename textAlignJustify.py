# align-left:

# split text into list of words

# append words to line
# if width size reached, append \n

# append this line to a list of lines


def left(text, width):
    line = 1
    result = text
    lines = []

    while len(result) >= width:
        idx = result[:(width)*line].rfind(' ')
        lines.append(result[:idx] + '\n')
        result = result[idx+1:]
    if len(result) > 0:
        lines.append(result)

    return lines


def justify(text, width):
    lines = left(text, width)
    result = []
    for line in lines:
        spaces_to_add = width - len(line) + 1
        spaces_in_line = line.count(' ')
        n_of_spaces_per_space = spaces_to_add // spaces_in_line
        rest = spaces_to_add % spaces_in_line
        arr_of_spaces = []
        finalline = []
        for n in range(spaces_in_line):
            arr_of_spaces.append(n_of_spaces_per_space)
        print(line, arr_of_spaces, rest)
        for i in range(rest):
            arr_of_spaces[i] = arr_of_spaces[i] + 1
        words = line.split(' ')
        for i, word in enumerate(words):
            if i < len(arr_of_spaces):
                finalline.append(word)
                finalline.append(' ' * (arr_of_spaces[i]+1))
            else:
                finalline.append(word)
        result.append(''.join(finalline))

    return ''.join(result)


# print(justify('123 45 6', 7))  # , '123  45\n6')

print(justify('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quam ut facilis doloribus facere sit voluptatem quaerat culpa exercitationem, saepe similique eveniet tenetur distinctio eligendi impedit quidem rem assumenda vel? Adipisci, iure? Provident numquam sequi, debitis corrupti voluptatibus adipisci nisi fugiat qui ratione magni aut at vitae perferendis cupiditate iure?', 30))
