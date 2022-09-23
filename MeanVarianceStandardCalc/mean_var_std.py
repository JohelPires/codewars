import numpy as np
# [[0 1 2]
#  [3 4 5]
#  [6 7 8]]


def calculate(lista):
    a = np.array(lista).reshape(3, 3)

    mean1 = a.mean(axis=0)
    mean2 = a.mean(axis=1)
    flattenedmean = a.flatten().mean()

    var1 = a.var(axis=0)
    var2 = a.var(axis=1)
    flattenedvar = a.flatten().var()

    std1 = a.std(axis=0)
    std2 = a.std(axis=1)
    flattenedstd = a.flatten().std()

    max1 = a.max(axis=0)
    max2 = a.max(axis=1)
    flattenedmax = a.flatten().max()

    min1 = a.min(axis=0)
    min2 = a.min(axis=1)
    flattenedmin = a.flatten().min()

    sum1 = a.sum(axis=0)
    sum2 = a.sum(axis=1)
    flattenedsum = a.flatten().sum()

    result = {
        'mean': [mean1.tolist(), mean2.tolist(), flattenedmean],
        'variance': [var1.tolist(), var2.tolist(), flattenedvar],
        'standard deviation': [std1.tolist(), std2.tolist(), flattenedstd],
        'max': [max1.tolist(), max2.tolist(), flattenedmax],
        'min': [min1.tolist(), min2.tolist(), flattenedmin],
        'sum': [sum1.tolist(), sum2.tolist(), flattenedsum],
    }
    return result


lista = [0, 1, 2, 3, 4, 5, 6, 7, 8]
print(calculate(lista))
