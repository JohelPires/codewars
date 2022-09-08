def ips_between(start, end):
    start = start.split('.')
    end = end.split('.')
    result = [0, 0, 0, 0]
    temp = 0
    for i in range(len(start)):

        start[i] = int(start[i])
        end[i] = int(end[i])
        result[i] = end[i] - start[i]
        result[i] += temp
        if result[i] > 0 and i < 3:
            temp = result[i+1] + (result[i] * 256)
            result[i] = 0

    return result[3]


print(ips_between("10.0.0.0", "10.0.0.50"))  # , 50)
print(ips_between("20.0.0.10", "20.0.1.0"))  # , 246)
print(ips_between('123.236.126.29', '125.101.22.151'))  # , 24680570)


# Testing 72.100.92.20 and 72.100.224.75, Expecting: 33847
# ['72', '100', '92', '20'] should equal 33847
# Completed in 0.02ms
# Testing 123.236.126.29 and 125.101.22.151, Expecting: 24680570
# ['123', '236', '126', '29'] should equal 24680570
# Completed in 0.01ms
# Testing 50.239.203.43 and 54.199.169.59, Expecting: 64478736
# ['50', '239', '203', '43'] should equal 64478736
# Completed in 0.03ms
# Testing 175.59.54.233 and 175.59.55.21, Expecting: 44
# ['175', '59', '54', '233'] should equal 44
# Completed in 0.03ms
# Testing 11.41.150.159 and 55.225.117.133, Expecting: 750247654
# ['11', '41', '150', '159'] should equal 750247654
# Completed in 0.01ms
# Testing 251.115.191.103 and 251.115.201.12, Expecting: 2469
# ['251', '115', '191', '103'] should equal 2469
# Completed in 0.03ms
# Testing 109.222.39.13 and 109.222.49.104, Expecting: 2651
# ['109', '222', '39', '13'] should equal 2651
# Completed in 0.03ms
# Testing 123.44.26.106 and 123.44.26.145, Expecting: 39
# ['123', '44', '26', '106'] should equal 39
# Completed in 0.02ms
# Testing 70.93.109.145 and 70.93.109.184, Expecting: 39
# ['70', '93', '109', '145'] should equal 39
# Completed in 0.02ms
# Testing 118.11.50.81 and 142.212.19.35, Expecting: 415817938
# ['118', '11', '50', '81'] should equal 415817938
# Completed in 0.02ms
# Testing 60.213.210.37 and 60.213.230.59, Expecting: 5142
# ['60', '213', '210', '37'] should equal 5142
# Completed in 0.02ms
# Testing 72.10.182.82 and 72.15.165.43, Expecting: 323289
# ['72', '10', '182', '82'] should equal 323289
# Completed in 0.02ms
# Testing 137.178.146.174 and 138.151.87.67, Expecting: 14992533
# ['137', '178', '146', '174'] should equal 14992533
# Completed in 0.03ms
# Testing 42.171.20.19 and 42.171.20.25, Expecting: 6
# ['42', '171', '20', '19'] should equal 6
# Completed in 0.04ms
# Testing 146.32.27.86 and 146.33.47.30, Expecting: 70600
# ['146', '32', '27', '86'] should equal 70600
# Completed in 0.02ms
# Testing 124.38.228.201 and 124.51.231.207, Expecting: 852742
# ['124', '38', '228', '201'] should equal 852742
# Completed in 0.03ms
# Testing 218.241.136.96 and 223.98.163.232, Expecting: 74521480
# ['218', '241', '136', '96'] should equal 74521480
# Completed in 0.03ms
# Testing 42.142.181.11 and 45.85.38.131, Expecting: 46559608
# ['42', '142', '181', '11'] should equal 46559608
# Completed in 0.03ms
# Testing 212.4.233.129 and 212.4.233.130, Expecting: 1
# ['212', '4', '233', '129'] should equal 1
# Completed in 0.02ms
# Testing 223.198.178.92 and 223.198.178.95, Expecting: 3
# ['223', '198', '178', '92'] should equal 3
# Completed in 0.02ms
# Testing 255.99.6.93 and 255.119.106.49, Expecting: 1336276
# ['255', '99', '6', '93'] should equal 1336276
# Completed in 0.03ms
# Testing 153.158.161.247 and 211.62.92.146, Expecting: 966769307
# ['153', '158', '161', '247'] should equal 966769307
# Completed in 0.03ms
# Testing 243.204.250.41 and 243.217.64.28, Expecting: 804339
# ['243', '204', '250', '41'] should equal 804339
# Completed in 0.03ms
# Testing 189.89.230.213 and 189.187.1.147, Expecting: 6363838
# ['189', '89', '230', '213'] should equal 6363838
# Completed in 0.03ms
# Testing 179.168.30.61 and 219.153.233.136, Expecting: 670157643
# ['179', '168', '30', '61'] should equal 670157643
# Completed in 0.03ms
# Testing 123.112.216.196 and 123.112.217.86, Expecting: 146
# ['123', '112', '216', '196'] should equal 146
# Completed in 0.02ms
# Testing 137.21.237.178 and 137.21.239.73, Expecting: 407
# ['137', '21', '237', '178'] should equal 407
# Completed in 0.03ms
# Testing 128.78.40.73 and 128.78.40.79, Expecting: 6
# ['128', '78', '40', '73'] should equal 6
# Completed in 0.02ms
# Testing 54.153.32.135 and 54.153.32.213, Expecting: 78
# ['54', '153', '32', '135'] should equal 78
# Completed in 0.02ms
# Testing 182.37.32.103 and 182.37.39.141, Expecting: 1830
# ['182', '37', '32', '103'] should equal 1830
# Completed in 0.02ms
# Testing 137.24.164.65 and 142.149.177.86, Expecting: 92081429
# ['137', '24', '164', '65'] should equal 92081429
# Completed in 0.03ms
# Testing 0.237.97.49 and 127.87.4.168, Expecting: 2120852343
# ['0', '237', '97', '49'] should equal 2120852343
# Completed in 0.03ms
# Testing 101.239.248.162 and 102.68.63.150, Expecting: 5523188
# ['101', '239', '248', '162'] should equal 5523188
# Completed in 0.02ms
# Testing 60.79.39.4 and 60.87.169.216, Expecting: 557780
# ['60', '79', '39', '4'] should equal 557780
# Completed in 0.15ms
# Testing 205.108.188.78 and 205.108.189.186, Expecting: 364
# ['205', '108', '188', '78'] should equal 364
# Completed in 0.11ms
# Testing 17.132.243.206 and 17.134.39.26, Expecting: 78668
# ['17', '132', '243', '206'] should equal 78668
# Completed in 0.04ms
# Testing 88.149.45.0 and 255.255.255.255, Expecting: 2808795903
# ['88', '149', '45', '0'] should equal 2808795903
# Completed in 0.04ms
# Testing 56.193.213.230 and 56.193.214.31, Expecting: 57
# ['56', '193', '213', '230'] should equal 57
# Completed in 0.03ms
# Testing 199.43.8.187 and 199.44.56.136, Expecting: 77773
# ['199', '43', '8', '187'] should equal 77773
# Completed in 0.02ms
# Testing 29.45.44.10 and 57.146.45.56, Expecting: 476381486
# ['29', '45', '44', '10'] should equal 476381486
# Completed in 0.03ms
# Testing 99.163.153.13 and 255.255.255.255, Expecting: 2623301362
# ['99', '163', '153', '13'] should equal 2623301362
# Completed in 0.03ms
# Testing 138.251.70.66 and 138.251.70.249, Expecting: 183
# ['138', '251', '70', '66'] should equal 183
# Completed in 0.03ms
# Testing 27.120.251.90 and 28.5.208.87, Expecting: 9229565
# ['27', '120', '251', '90'] should equal 9229565
# Completed in 0.03ms
# Testing 169.179.231.98 and 192.142.124.140, Expecting: 383423786
# ['169', '179', '231', '98'] should equal 383423786
# Completed in 0.03ms
# Testing 68.134.7.106 and 68.244.105.46, Expecting: 7233988
# ['68', '134', '7', '106'] should equal 7233988
# Completed in 0.03ms
# Testing 57.237.63.191 and 58.77.37.20, Expecting: 6284629
# ['57', '237', '63', '191'] should equal 6284629
# Completed in 0.03ms
# Testing 105.240.106.114 and 105.240.107.203, Expecting: 345
# ['105', '240', '106', '114'] should equal 345
# Completed in 0.03ms
# Testing 95.57.203.152 and 95.57.207.107, Expecting: 979
# ['95', '57', '203', '152'] should equal 979
# Completed in 0.03ms
# Testing 34.107.213.188 and 34.112.234.125, Expecting: 332993
# ['34', '107', '213', '188'] should equal 332993
# Completed in 0.03ms
# Testing 175.119.232.164 and 179.68.120.77, Expecting: 63737769
# ['175', '119', '232', '164'] should equal 63737769
