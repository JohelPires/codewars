def add_time(start, duration, dow=None):
    [h_start, rest] = start.split(':')
    [m_start, ampm] = rest.split(' ')
    [h_dur, m_dur] = duration.split(':')

    h_res = int(h_start) + int(h_dur)
    m_res = int(m_start) + int(m_dur)

    daystoadd = 0

    if m_res >= 60:
        h_res = h_res + m_res // 60
        m_res = m_res % 60

# extrair o daystoadd da duração, não da hora final:
# ou seja, refazer isso daqui:
    if h_res >= 24:
        daystoadd += h_res // 24
        h_res = h_res % 24

# convert to AM/PM:

    if h_res > 12 and ampm == 'AM':
        h_res = h_res - 12
        ampm = 'PM'
    elif h_res == 12 and ampm == 'AM':
        ampm = 'PM'
    elif h_res > 12 and ampm == 'PM':
        h_res = h_res - 12
        ampm = 'AM'
        daystoadd += 1

    if h_res == 0:
        h_res = 12


# ======== days of week ==========
    days = ['sunday', 'monday', 'tuesday',
            'wednesday', 'thursday', 'friday', 'saturday']

    if dow != None:
        dow = days.index(dow.lower())
        dow = dow + daystoadd
        if dow > 6:
            dow = (dow % 7)

        dow = f', {days[dow].capitalize()}'
    else:
        dow = ''

# ========== formatação final: ========
    if len(str(m_res)) == 1:
        m_res = '0' + str(m_res)

    if daystoadd == 0:
        daystoadd = ''
    elif daystoadd == 1:
        daystoadd = ' (next day)'
    elif daystoadd > 1:
        daystoadd = f' ({daystoadd} days later)'

    result = f'{str(h_res)}:{m_res} {ampm}{dow}{daystoadd}'
    return result


print(add_time("2:59 AM", "24:00"))
# to return "2:59 AM"'))

print(add_time("3:00 PM", "3:10"))
# Returns: 6:10 PM

print(add_time("11:30 AM", "2:32", "Monday"))
# Returns: 2:02 PM, Monday

print(add_time("11:43 AM", "00:20"))
# Returns: 12:03 PM

print(add_time("10:10 PM", "3:30"))
# Returns: 1:40 AM (next day)

print(add_time("11:43 PM", "24:20", "tueSday"))
# Returns: 12:03 AM, Thursday (2 days later)

print(add_time("6:30 PM", "205:12", 'Monday'))
# Returns: 7:42 AM (9 days later)
