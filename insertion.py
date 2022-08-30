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
for i in range(1, 6):
    num = random.randint(1, 10)
    nums.append(num)
print(nums)


def insertion(nums):

    for n in range(1, len(nums)):

        curr = nums[n]

        prev = n - 1

        while prev >= 0 and curr < nums[prev]:
            nums[prev+1] = nums[prev]
            prev -= 1
        nums[prev+1] = curr

    return nums


print(f'{bcolors.OKCYAN}_________________________________________________________________{bcolors.ENDC}')
print(insertion(nums))
