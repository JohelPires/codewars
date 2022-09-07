import copy
import random


class Hat:
    def __init__(self, **kwargs):
        self.hat = kwargs
        self.contents = []
        for key in self.hat.keys():
            for ball in range(self.hat[key]):
                self.contents.append(key)

    def draw(self, num_balls_drawn):
        if num_balls_drawn > len(self.contents):
            num_balls_drawn = len(self.contents)
        balls_drawn = []
        for ball in range(num_balls_drawn):
            balls_drawn.append(self.contents.pop(
                random.randrange(0, len(self.contents))))

        return balls_drawn


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    count = 0
    for i in range(num_experiments):
        result = False
        curr_test_dict = dict()
        curr_test = copy.deepcopy(hat).draw(num_balls_drawn)
        for color in curr_test:
            if color in curr_test_dict:
                curr_test_dict[color] = curr_test_dict[color] + 1
            else:
                curr_test_dict[color] = 1

        partial = []
        for key in expected_balls:
            if key in curr_test_dict and curr_test_dict[key] >= expected_balls[key]:
                partial.append(True)
            else:
                partial.append(False)
        if partial.count(False) == 0:
            count += 1

    return count / num_experiments


hat1 = Hat(red=3, blue=2)

print(hat1.contents)
print(hat1.draw(1))

hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                         expected_balls={"red": 2, "green": 1},
                         num_balls_drawn=5,
                         num_experiments=2000)

print(probability)
