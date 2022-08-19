def move_zeros(lst):
    nzeros = 0
    result = []

    for item in lst:

        if item == 0:
            nzeros += 1
        else:
            result.append(item)

    for o in range(nzeros):
        result.append(0)

    return result


print(move_zeros([1, 0, 1, 2, 0, 1, 3]))  # returns [1, 1, 2, 1, 3, 0, 0]

# lsi
# [1, 0, 1, 2, 0, 1, 3]
