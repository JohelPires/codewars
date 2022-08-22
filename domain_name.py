def domain_name(url):
    domain = url.split('http://')
    domain = domain[len(domain)-1].split('https://')
    # domain = domain[len(domain)-1].split('www.')
    # domain = domain[len(domain)-1].split('.')

    return domain


print(domain_name("http://google.co.jp"))
print(domain_name("www.xakep.ru"))
print(domain_name('https://youtube.com'))
print(domain_name("http://google.com"))
