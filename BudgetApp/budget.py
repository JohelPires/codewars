class Category:

    def __init__(self, name):
        self.ledger = []
        self.name = name

    # '****[75 chars]ggs, bac -45.67\nTransfer to Entertainme -20.00\n' !=
    # '****[75 chars]ggs, bac -45.67\nTransfer to Entertainme -20.00\nTotal: 834.33'

    def __str__(self):
        titlesidebar = '*' * (15 - (len(self.name)//2))
        result = f'{titlesidebar}{self.name}{titlesidebar}\n'
        total = 0
        for i in self.ledger:
            total += i['amount']
            space = ' ' * (23 - len(i['description']))
            description = i['description'][:23]
            number = "%.2f" % i["amount"]
            number = ' ' * (7 - len(str(number))) + number
            line = f'{description}{space}{number}\n'
            result += line

        result += f'Total: {"%.2f" % total}'
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

    def check_funds(self, amount):
        if self.get_balance() >= amount:
            return True
        else:
            return False


def create_spend_chart(categorias):

    # CALCULAR PORCENTAGENS:

    total_spent_per_category = []
    total_spent = 0
    pct_per_category = []
    for i in range(len(categorias)):
        temp = 0
        for e in categorias[i].ledger:
            if e['amount'] < 0:
                temp -= e['amount']
        total_spent_per_category.append(temp)
        total_spent += temp

    for spent in total_spent_per_category:
        pct_per_category.append(
            int((round((spent * 100) / total_spent, -1)) / 10))

    # BUILD COLUMNS:
    yaxis = []
    space_column = []

    for y in range(100, -1, -10):
        if y == 100:
            yspace = ''
        elif y < 100 and y > 0:
            yspace = ' '
        else:
            yspace = '  '
        yaxis.append(f'{yspace}{y}|')
        space_column.append(' ')

        # chart_columns.append('o  ' * len(pct_per_category))  # just for testing

    # BUILD PER CATEGORY CHART COLUMNS;

    chart_columns = {}
    for i, categ in enumerate(categorias):
        temp = []
        for j in range(10, -1, -1):
            if pct_per_category[i] > j:
                temp.append('o')
            else:
                temp.append(' ')
        chart_columns[categ.name] = temp

    # DRAW THE CHART:
    merged_values = []

    lines = ''

    for i in range(len(yaxis)):
        merged_str = ''
        for arg in categorias:
            merged_str += chart_columns[arg.name][i]
            merged_str += '  '

        merged_values.append(merged_str)
        line = f'{yaxis[i]}{space_column[i]}{merged_values[i]}\n'
        lines += line
    lines += '    ' + ('-' * (len(line)-5))

    # LABELS:
    max_len_arg = categorias[0].name
    for arg in categorias:
        if len(arg.name) > len(max_len_arg):
            max_len_arg = arg.name

    label_lines = []
    for i, l in enumerate(max_len_arg):
        line = '\n      '
        for j in range(len(categorias)):
            if i < len(categorias[j].name):
                line += f'{categorias[j].name[i]}  '
            else:
                line += '   '
        label_lines.append(line)

    for line in label_lines:
        lines += line

    return lines


# food = Category('Food')
# travel = Category('Travel')
# education = Category('Education')
# education.deposit(5000, 'Initial deposit')
# food.deposit(1000, 'Initial deposit')
# food.deposit(50, 'Teste')
# print(food.withdraw(20, 'Teste'))
# food.transfer(10, travel)
# print(food.transfer(50, travel))
# print(food.get_balance())
# print(travel.get_balance())
# travel.deposit(200, 'some deposit')
# travel.withdraw(50, 'for testing')
# # food.withdraw(144.5, 'What if I have a very long description explaining in more detail de transaction?')

# print(food)
# print(travel)

# print('\n\n\n')

# print(create_spend_chart([food, travel, education]))


# 'Perc[35 chars]      \n 90|           \n 80|           \n 70|[364 chars] t  '
# 'Perc[35 chars]     \n 90|          \n 80|          \n 70|   [339 chars] t  '
