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
        idx = result[:width*line].rfind(' ')
        lines.append(result[:idx] + '\n')
        result = result[idx+1:]
    if len(result) > 0:
        lines.append(result)

    return ''.join(lines)


def justify(text, width):
    result = left(text, width)
    return result


# print(justify('123 45 6', 7))  # , '123  45\n6')

print(justify('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quam ut facilis doloribus facere sit voluptatem quaerat culpa exercitationem, saepe similique eveniet tenetur distinctio eligendi impedit quidem rem assumenda vel? Adipisci, iure? Provident numquam sequi, debitis corrupti voluptatibus adipisci nisi fugiat qui ratione magni aut at vitae perferendis cupiditate iure?', 30))
