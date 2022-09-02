class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

    def set_width(self, value):
        self.width = value

    def set_height(self, value):
        self.height = value

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return (2 * self.width) + (2 * self.height)

    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        line = (self.width * '*') + '\n'
        picture = self.height * line
        return picture

    def get_amount_inside():

        # Takes another shape (square or rectangle) as an argument.
        # Returns the number of times the passed in shape could fit inside the shape (with no rotations).
        # For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.
        return 5


class Square(Rectangle):
    def __init__(self, side):
        Rectangle.__init__(self, side, side)
        self.width = side
        self.height = side

    def __str__(self):
        return f'Square({self.width})'

    def set_side(self, value):
        self.height = value
        self.width = value

    def set_height(self, value):
        self.set_side(value)

    def set_width(self, value):
        self.set_side(value)


rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
# print(rect.get_amount_inside(sq))
