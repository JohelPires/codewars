import numpy as np

# 1 1 1 1 1
# 1 0 0 0 1
# 1 0 9 0 1
# 1 0 0 0 1
# 1 1 1 1 1


a = np.ones((5, 5), dtype=int)

a[1:-1, 1: -1] = np.zeros((3, 3), dtype=int)

a[2, 2] = 9

# print(a)

b = np.ones((2, 4))
c = b.reshape((4, 2))

# print(c)

d = np.arange(1, 31)
d = d.reshape((6, 5))
print(d)
print(d[[0, 4, 5], 3:])
