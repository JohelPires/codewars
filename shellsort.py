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
for i in range(1, 10):
    num = random.randint(1, 100)
    nums.append(num)

print(f'{bcolors.OKGREEN}{nums}, size: {len(nums)}{bcolors.ENDC}')


def shellsort(nums):
    gap = len(nums)//2

    while gap > 0:
        for i in range(gap, len(nums)):
            temp = nums[i]
            j = i

            while j >= gap and nums[j - gap] > temp:
                nums[j] = nums[j - gap]
                j = j - gap
            nums[j] = temp
        gap = gap // 2

    return nums


print(shellsort(nums))
