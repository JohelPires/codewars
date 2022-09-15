def stat(strg):
    if strg == "":
        return ""

    # ORGANIZE DATA:
    rd = strg.split(', ')  # runners data
    n = len(rd)  # number of runners
    average = 0

    rdsec = []
    # convert to seconds:
    for d in rd:
        d = d.split('|')
        rdsec.append(int(d[2]) + (int(d[1]) * 60) + (int(d[0]) * 3600))

    rdsec.sort()

    # calculate range, average and median:

    for v in rdsec:
        average = average + v
    average = average // n

    therange = rdsec[n-1] - rdsec[0]

    if n % 2 == 0:
        median = rdsec[n//2] + rdsec[(n//2)-1]
        median = median // 2
    else:
        idx = n // 2
        median = rdsec[idx]

    # convert back to hh|mm|ss:

    def backtohms(secs):
        h = secs // 3600
        m = (secs % 3600) // 60
        s = ((secs % 3600) % 60)

        if h < 10:
            h = '0'+str(h)
        if m < 10:
            m = '0'+str(m)
        if s < 10:
            s = '0'+str(s)

        return f'{h}|{m}|{s}'

    therange = backtohms(therange)
    average = backtohms(average)
    median = backtohms(median)

    # therangestr = f'{therangeH}{}{}'

    # compose result:

    return f'Range: {therange} Average: {average} Median: {median}'


print(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
# "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
print(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
# "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
