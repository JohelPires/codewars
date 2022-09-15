a <- c(1, 5, 10, 15, 20, 25, 30, 35)
b <- c(8, 16, 14, 21, 38, 25, 43, 39)


# par(mfrow=c(2,3))
# plot(a,b, main = 'Título do Gráfico', type = 'h', lty=2)
# plot(a,b, main = 'Título do Gráfico', type = 'p', lty=2)
# plot(a,b, main = 'Título do Gráfico', type = 'l', col = 'cyan', lty=3)
# plot(a,b, main = 'Título do Gráfico', type = 'b', col = 'blue')
# plot(a,b, main = 'Título do Gráfico', type = 'o', col = 'blue', xlab = 'Something', ylab = 'another something')
# plot(a,b, main = 'Título do Gráfico', type = 'h', col = 'red', xlab = 'Something', ylab = 'another something')

fx = x^2

fa = a^2

plot(a,fa, main = 'Título do Gráfico', type = 'b', col = 'blue')