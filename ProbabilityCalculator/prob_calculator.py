import copy
import random
# Consider using the modules imported above.


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
        # result = False
        curr_test_dict = dict()
        curr_test = copy.deepcopy(hat).draw(num_balls_drawn)
        for color in curr_test:
            if color in curr_test_dict:
                curr_test_dict[color] = curr_test_dict[color] + 1
            else:
                curr_test_dict[color] = 1

        partial = []
        for key in curr_test_dict:
            if key in expected_balls and expected_balls[key] >= curr_test_dict[key]:
                partial.append(True)

        # result = expected_balls.items() <= curr_test_dict.items()
        if len(expected_balls) == len(partial):
            count += 1
        print(curr_test_dict, len(expected_balls), len(partial))

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
