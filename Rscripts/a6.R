library(readODS)

tab1 = read_ods('Tab1.ods', sheet=1)

var = tab1$Renda
n = length(var)
tvar = table(var)
fr = tvar/n
fp = fr*100
par(mfrow=c(1,2))
varv <- paste(c('Baixa', 'Média', 'Alta'), "\n", (tvar/n)*100,"%", sep=" ")
# pie(tvar, col = c(2,3,4), labels = varv, main = 'Dados de Renda')
# barplot(tvar, col = rainbow(9), ylab = 'Frequência de absolutas', names = c('Baixa', 'Média', 'Alta'))

faltas = tab1$Faltas
nf = length(faltas)
tf = table(faltas)
ffr = tf/nf
ffp = ffr*100

#plot(tf, type = 'h')
barplot(tf, col = rainbow(5))
pie(tf)