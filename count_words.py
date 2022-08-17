# import glob
# allFilesInDir = glob.glob("./*")

# # file = open('algorithms problem solving.md')


# print('Digite a palavra para contar: ')
# word = input('')

# print('Contando...')
# total = 0

# for file in allFilesInDir:
#     count = 0
#     f = open(file)
#         for line in f:

#     print(f'Arquivo {file} contém {count} ocorrências da palavra {word}')


counts = dict()
file = open('../../abntex2.latex')

print('Contando...')
for line in file:

    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

bigWord = 0
bigCount = 0

for word, count in counts.items():
    if bigCount is None or count > bigCount:
        bigWord = word
        bigCount = count

print(bigWord, bigCount)
