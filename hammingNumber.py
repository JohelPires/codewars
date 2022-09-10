# A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

# Write a function that computes the nth smallest Hamming number.

# Specifically:

#     The first smallest Hamming number is 1 = 203050
#     The second smallest Hamming number is 2 = 213050
#     The third smallest Hamming number is 3 = 203150
#     The fourth smallest Hamming number is 4 = 223050
#     The fifth smallest Hamming number is 5 = 203051


def hamming(n):
    cinco = n // 5
    resto = n % 5
    tres = resto // 3
    resto = resto % 3
    dois = resto // 2
    resto = resto % 5

    # for i in range(0, n):

    return (2**dois * tres**3 * 5**cinco)


print(hamming(1))  # == 1, "hamming(1) should be 1")
print(hamming(2))  # == 2, "hamming(2) should be 2")
print(hamming(3))  # == 3, "hamming(3) should be 3")
print(hamming(4))  # == 4, "hamming(4) should be 4")
print(hamming(5))  # == 5, "hamming(5) should be 5")
print(hamming(6))  # == 6, "hamming(6) should be 6")
print(hamming(7))  # == 8, "hamming(7) should be 8")
print(hamming(8))  # == 9, "hamming(8) should be 9")
print(hamming(9))  # == 10, "hamming(9) should be 10")
print(hamming(10))  # == 12, "hamming(10) should be 12")
print(hamming(11))  # == 15, "hamming(11) should be 15")
print(hamming(12))  # == 16, "hamming(12) should be 16")
print(hamming(13))  # == 18, "hamming(13) should be 18")
print(hamming(14))  # == 20, "hamming(14) should be 20")
print(hamming(15))  # == 24, "hamming(15) should be 24")
print(hamming(16))  # == 25, "hamming(16) should be 25")
print(hamming(17))  # == 27, "hamming(17) should be 27")
print(hamming(18))  # == 30, "hamming(18) should be 30")
print(hamming(19))  # == 32, "hamming(19) should be 32")
