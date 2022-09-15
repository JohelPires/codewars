def histogram(values, bin_width):
    if values == []:
        return []

    size_of_hist = max(values)
    result = []
    hist = {}

    for v in values:
        if v not in hist:
            hist[v] = 1
        else:
            hist[v] += 1

    for i in range(size_of_hist+1):
        if i in hist.keys():
            result.append(hist[i])
        else:
            result.append(0)

    if bin_width > 1:
        while (len(result) % bin_width) != 0:
            result.append(0)

    if bin_width > 1:
        comp_result = []
        while (len(result) % bin_width) != 0:
            result.append(0)
        while len(result) > 0:
            soma = 0
            for i in range(bin_width):
                soma += result.pop()

            comp_result.append(soma)
        comp_result.reverse()
        return comp_result

    return result


print(histogram([1, 1, 0, 1, 3, 2, 6], 3))  # , [1, 3, 1, 1, 0, 0, 1])
print(histogram([1, 1, 0, 1, 3, 2, 6], 1))  # , [1, 3, 1, 1, 0, 0, 1])
print(histogram([1, 1, 0, 1, 3, 2, 6], 2))  # , [4, 2, 0, 1])
print(histogram([], 1))  # , [])
print(histogram([8], 1))  # , [0, 0, 0, 0, 0, 0, 0, 0, 1])
