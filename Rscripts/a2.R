idadedocarro=function(){
  anos=readline(prompt = 'Qual a idade do seu carro? ')
  anos=as.integer(anos)
  
  ifelse(anos<=3, 'carro novo', 'carro velho')
  
}

media=function(n1,n2){
  n = (n1+n2)/2
  print(paste('A sua média foi ', n))
  ifelse(n>=6, 'Parabéns', 'Estude mais')
}

n10=function(){
  num=readline(prompt = 'digite o número: ')
  num=as.integer(num)
  
  if (num>10)
    print('Maior que 10')
  else if (num==10)
    print('Igual a 10')
  else
    print('Menor que 10')
}

nota=c(60,95,80,50,98)
lst=list(nome="Fred",
         esposa="Mary", criancas=3,
         idade=c(4,7,9))

turma = matrix(c(5,4.5,7,5.2,6.1,
                   2.1,6.5,8,7,6.7,
                   8.6,7,9.1,8.7,9.3),
               byrow = TRUE,
               nrow = 3,
               ncol = 5)
rownames(turma)=c(1,2,3)
colnames(turma)=c(1,2,3,4,5)

soma=0
for (i in turma){
  soma=soma+i
}
#print(soma/length(turma))

nome=c("Lisa","Godofredo","João","Joana","Alba")
curso=c("superior","superior","fundamental",'médio','medio')
idade=c(34,43,21,37,25)
salario=c(1100,1450,450,960,600)
anos=c(5,8,3,8,2)
sexo=c("F","M","M","F","F")

df = data.frame(nome, curso, idade, salario, anos, sexo)
print(df)
subset(df, sexo=='F' & anos>2)