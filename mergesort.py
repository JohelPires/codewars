import random


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
    num = random.randint(1, 100)
    nums.append(num)

print(f'{bcolors.OKGREEN}{nums}{bcolors.ENDC}')


def mergesort(nums):

    if len(nums) > 1:
        mid = len(nums)//2
        left = nums[:mid]
        right = nums[mid:]

        print(mid)

        mergesort(left)
        print(left)
        mergesort(right)
        print(right)

        a = 0
        b = 0
        c = 0

        while a < len(left) and b < len(right):
            if left[a] < right[b]:
                nums[c] = left[a]
                a += 1
            else:
                nums[c] = right[b]
                b += 1
            c += 1
        while a < len(left):
            nums[c] = left[a]
            a += 1
            c += 1
        while b < len(right):
            nums[c] = right[b]
            b += 1
            c += 1

    return nums


print(mergesort(nums))
