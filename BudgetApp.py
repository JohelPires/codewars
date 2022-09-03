class Category:

    def __init__(self, name):
        self.ledger = []
        self.name = name

    def __str__(self):
        result = '*******Name*********\n'
        for i in self.ledger:
            space = ' ' * (23 - len(i['description']))
            line = f'{i["description"]}{space}{"%.2f" % i["amount"]}\n'
            result += line
        return result

    def deposit(self, amount, description=''):
        temp = {'amount': float(amount),
                'description': description}
        self.ledger.append(temp)

    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            temp = {'amount': -(float(amount)),
                    'description': description}
            self.ledger.append(temp)
            return True
        else:
            return False

    def get_balance(self):
        result = 0
        for i in self.ledger:
            result += i['amount']
        return result

    def transfer(self, amount, category):
        if self.withdraw(amount, f'Transfer to {category.name}'):
            category.deposit(amount, f'Transfer from {self.name}')
            return True
        else:
            return False
        # A transfer method that accepts an amount and another budget category as arguments.
        # The method should add a withdrawal with the amount and the description
        # "Transfer to [Destination Budget Category]". The method should then add
        # a deposit to the other budget category with the amount and the description
        # "Transfer from [Source Budget Category]". If there are not enough funds, nothing
        # should be added to either ledgers. This method should return True if the transfer
        # took place, and False otherwise.

    def check_funds(self, amount):
        if self.get_balance() >= amount:
            return True
        else:
            return False


# def create_spend_chart(categories):


food = Category('Food')
travel = Category('Travel')
food.deposit(1000, 'Initial deposit')
food.deposit(50, 'Teste')
print(food.withdraw(20, 'Teste'))
food.transfer(10, travel)
print(food.transfer(50, travel))
print(food.get_balance())
print(travel.get_balance())

print(food)
