library('readODS')

df = read.table('Tab1.txt', header = TRUE)
df2 = read_ods('Tab1.ods', sheet=1)


X=c(2,4,4,3,2)
Y=c(1,2,3,6,7)

soma=function(vetor){
  resultado=0
  for (i in 1:length(vetor)){
    resultado=resultado+vetor[i]
  }
  return(resultado)
}

media=function(vetor){
  return (soma(vetor)/length(vetor))
}

variancia=function(vetor){
  n=length(vetor)
  m=media(vetor)
  s=soma((vetor-m)^2)
  return(s/(n-1))
}

variancia1=function(x){
  n=length(x)
  s=0 #objeto com que receber ́a a soma
  for(i in 1:n){
    s=s+x[i]
  }
  m=s/n
  s2=0
  for(i in 1:n){
    s2=s2 + (x[i] - m)^2
  }
  variancia=s2/(n-1)
  return(variancia)
}
variancia1(X)

## ou
variancia2=function(x){
  n=length(x)
  m=media(x)
  s=soma((x-m)^2)
  variancia=s/(n-1)
  return(variancia)
}