def factorialByIteration(num):
    produto = 1
    for i in range(1, num+1):
        produto = produto * i
    print(produto)


def factorialByRecursion(num):
    if num == 1:
        return num
    return num * factorialByRecursion(num - 1)


print(factorialByRecursion(4))
