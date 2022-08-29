import random

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


print('==========================')
print(insertion([7, 5, 3, 2, 10]))
