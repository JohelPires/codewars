# align-left:

# split text into list of words

# append words to line
# if width size reached, append \n

# append this line to a list of lines

def alignLeft(text, width):
    words = text.split(' ')
    lines = []
    line = []
    print(words)
    while True:
        if len(' '.join(line) + words[0]) <= width:
            line.append(words.pop(0))
        elif len(' '.join(words)) <= width:
            lines.append(words)
            words = []

        else:
            line.append('\n')
            lines.append(line)
            line = []
            # print(words)
        # print(['rest: '] + words)
        if len(words) == 0:
            break
    print(lines)
    for i, l in enumerate(lines):
        lines[i] = ' '.join(l)

    result = ''.join(lines)
    return result


# now justify:

# for each line, calculate and add the required spaces

# merge lines into text and return.

def justify(text, width):
    result = alignLeft(text, width)
    return result


print(justify('123 45 6', 7))  # , '123  45\n6')

# print(justify('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quam ut facilis doloribus facere sit voluptatem quaerat culpa exercitationem, saepe similique eveniet tenetur distinctio eligendi impedit quidem rem assumenda vel? Adipisci, iure? Provident numquam sequi, debitis corrupti voluptatibus adipisci nisi fugiat qui ratione magni aut at vitae perferendis cupiditate iure?', 30))
