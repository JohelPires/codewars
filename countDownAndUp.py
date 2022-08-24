def countDownAndUp(num):
    print(num)
    if num == 0:
        print('base case reached')
        return
    else:
        countDownAndUp(num-1)
        print(num, 'returning')
        return


countDownAndUp(5)
