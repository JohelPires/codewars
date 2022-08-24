def fibIter(n):
    fib = [1]
    for i in range(1, n):
        if i == 1:
            fib.append(1)
        else:
            fib.append(fib[i-2]+fib[i-1])
    return fib


def fibRecur(n):
    pass


print(fibIter(25))
