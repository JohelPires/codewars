def add_time(start, duration, dow=None):
    st = dict()
    du = dict()
    res = dict()

    # EXTRACT DATA CONVERTING TO 24H CLOCK:
    st['h'] = int(start.split(':')[0])
    st['m'] = int(start.split(':')[1].split(' ')[0])
    st['noon'] = start.split(' ')[1]
    du['h'] = int(duration.split(':')[0])
    du['m'] = int(duration.split(':')[1].split(' ')[0])

    # Convert to 24H:
    if st['noon'] == 'PM':
        st['h'] += 12

    # print(st, du)

    # CALCULATE RESULT:
    res['m'] = st['m'] + du['m']
    res['h'] = st['h'] + du['h']
    if res['m'] >= 60:
        res['m'] -= 60
        res['h'] += 1

    # Calculate Days:

    if res['h'] >= 24:
        daystoadd = res['h'] // 24
        res['h'] = res['h'] % 24
    else:
        daystoadd = 0

    # calculate dow:
    week = ['Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 'Sunday']

    dowtoshow = ''
    if dow != None:
        dow = week.index(dow.lower().capitalize())
        dow = dow + daystoadd
        if dow > 6:
            dow = dow % 7
        dowtoshow = ', ' + week[dow]

    if daystoadd == 1:
        daystoadd = ' (next day)'
    elif daystoadd > 1:
        daystoadd = f" ({daystoadd} days later)"
    else:
        daystoadd = ''

    # convert back to 12h clock:

    res['noon'] = 'AM'

    if res['h'] >= 12:
        res['noon'] = 'PM'
        res['h'] -= 12
    if res['h'] == 0:
        res['h'] = 12

    # compile result:

    if res['m'] < 10:
        res['m'] = f"0{res['m']}"
    result = f"{res['h']}:{res['m']} {res['noon']}{dowtoshow}{daystoadd}"

    return result


print(add_time("3:30 PM", "2:12"), '| Deve ser: 5:42 PM')
print(add_time("3:00 PM", "3:10"), '| Deve ser: 6:10 PM')

print(add_time("11:30 AM", "2:32", "Monday"), '| Deve ser: 2:02 PM, Monday')

print(add_time("11:43 AM", "00:20"), '| Deve ser: 12:03 PM')

print(add_time("10:10 PM", "3:30"), '| Deve ser: 1:40 AM (next day)')

print(add_time("11:43 PM", "24:20", "tueSday"),
      '| Deve ser: 12:03 AM, Thursday (2 days later)')

print(add_time("6:30 PM", "205:12"), '| Deve ser: 7:42 AM (9 days later)')

print(add_time("8:16 PM", "466:02", "tuesday"))
