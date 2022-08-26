import random

nums = []
for i in range(1, 100):
    num = random.randint(1, 1000)
    nums.append(num)
print(nums)


def bubble(nums):
    lastIdx = len(nums)
    for n in range(lastIdx, 0, -1):
        for i in range(1, lastIdx):
            if nums[i] < nums[i-1]:
                nums[i], nums[i-1] = nums[i-1], nums[i]

    return nums


print('==========================')
print(bubble(nums))
