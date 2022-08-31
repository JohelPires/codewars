import random
import mergesort


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


nums = []
for i in range(1, 20):
    num = random.randint(1, 50)
    nums.append(num)

mergesort.mergesort(nums)

nums = [2, 5, 10, 18, 20, 24, 25, 25, 25,
        29, 31, 34, 38, 40, 44, 45, 47, 48, 49]

print(f'{bcolors.OKGREEN}{nums}, size: {len(nums)}{bcolors.ENDC}')


def binarysearch(nums, n):
    # compare n with mid
    mid = len(nums) // 2

    if mid <= 0:
        return f'{n} not found'
    # if its equal, found. Return.

    if nums[mid] == n:
        result = f'{n} found'
    # if its higher, repeat at right side
    # else, repeat at left side
    if nums[mid] < n:

        return binarysearch(nums[mid:], n)
    elif nums[mid] > n:

        return binarysearch(nums[:mid], n)
    return result

# def binarysearch(nums, n, lo, hi):
#     if hi >= lo:
#         mid = lo + (hi - lo) // 2
#         if nums[mid] == n:
#             return mid

#         elif nums[mid] > x:


print(binarysearch(nums, 34))
