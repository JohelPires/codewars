from colorama import Fore, Back, Style


# def snail(array):
#     # result = array[0]
#     result = []

#     result.append(array[0][len(array[1])-3])
#     result.append(array[0][len(array[1])-2])
#     result.append(array[0][len(array[1])-1])

#     result.append(array[1][len(array[1])-1])

#     result.append(array[2][len(array[1])-1])
#     result.append(array[2][len(array[1])-2])
#     result.append(array[2][len(array[1])-3])

#     result.append(array[1][len(array[1])-3])
#     result.append(array[1][len(array[1])-2])

#     return result

# directions:
# 0 = left to right
# 1 = top to bottom
# 2 = right to left
# 3 = bottom to top

def snail(array):
    d = len(array)

    result = []

    def snail_helper(array, direction = 0):
        if direction==0:
            result.append(array[0])

    result = array.pop(0)
    return result


array0 = [[1, 2],
          [3, 4]]

array1 = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

array2 = [['a', 'b', 'c', 'd'],
          ['e', 'f', 'g', 'h'],
          ['i', 'j', 'k', 'l'],
          ['m', 'n', 'o', 'p']]

array3 = [[1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5]]

expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
expected2 = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


saida = snail(array1)

if saida == expected:
    print(Fore.LIGHTGREEN_EX + '[PASSED]' + Fore.RESET)
else:
    print(Fore.LIGHTRED_EX + '[FAIL]' + Fore.RESET)

print(saida)
