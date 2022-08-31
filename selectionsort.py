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


def selectionsort(nums):
    size = len(nums)
    for idx in range(size):
        minidx = idx

        for j in range(idx + 1, size):
            if nums[j] < nums[minidx]:
                minidx = j
        nums[idx], nums[minidx] = nums[minidx], nums[idx]

    return nums


print(selectionsort(nums))
