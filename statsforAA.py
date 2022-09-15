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

    therangeH = therange // 3600
    therangeM = (therange % 3600) // 60
    therangeS = ((therange % 3600) % 60)

    if therangeH < 10:
        therangeH = '0'+str(therangeH)
    if therangeM < 10:
        therangeM = '0'+str(therangeM)
    if therangeS < 10:
        therangeS = '0'+str(therangeS)

    # therangestr = f'{therangeH}{}{}'

    # compose result:

    return therange, therangeH, therangeM, therangeS


print(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
# "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
print(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
# "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
