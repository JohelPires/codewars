# pra cada item na lista:
#   2 itens seguintes são sequencia ?
#       if inirangeidx == null
#           inirangeidx = item

def rangegen(args):

    inirangeidx = None
    finrangeidx = None
    result = []

    for i in range(len(args)):
        curr = args[i]
        if i == len(args) - 1:
            next = None
        else:
            next = args[i+1]
        if next == curr + 1:
            if inirangeidx == None:
                inirangeidx = i
        else:
            if inirangeidx == None:
                result.append(str(curr))
            else:
                finrangeidx = i
                if finrangeidx - inirangeidx == 1:
                    result.append(str(args[inirangeidx]))
                    result.append(str(args[finrangeidx]))
                else:
                    result.append(f'{args[inirangeidx]}-{args[finrangeidx]}')
                inirangeidx = None
                finrangeidx = None

    return ','.join(result)


# def rangegen(args):
#     temprange = []
#     result = []
#     for i in range(0, len(args)-1):
#         # this should be a while loop:

#         if args[i] == args[i+1] - 1:
#             # print(args[i-1], args[i])
#             temprange.append(args[i])

#             print((temprange))
#         else:
#             if len(temprange) > 2:
#                 # temprange.append(args[i])
#                 temprange = f'{temprange[0]}-{temprange[len(temprange)-1]}'
#                 result.append(temprange)
#                 temprange = []
#             result.append(args[i])

#     return result


print(rangegen([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11,
      14, 15, 17, 18, 19, 20]))  # , '-6,-3-1,3-5,7-11,14,15,17-20')

print(rangegen([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]))
# , '-3--1,2,10,15,16,18-20')
