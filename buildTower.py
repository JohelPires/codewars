def tower_builder(n):
    result = []
    size = n*2-1
    for i in range(n):
        n_star = (i+1)*2-1
        spaces = size - n_star
        print(' '*(spaces//2), '*' * n_star, ' '*(spaces//2))
        result.append(' '*(spaces//2) + '*' * n_star + ' '*(spaces//2))
    return result


print(tower_builder(9))


#     *
#    ***
#   *****
#  *******
# *********
