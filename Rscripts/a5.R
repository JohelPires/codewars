x = seq(1,4)
y = seq(1,4)


f1 = function(x,y){
  return (x^2+y^2)
}

z = outer(x,y,f1)

persp(x,y,z,theta = 30, phi = 30, col = 'lightblue', ticktype = 'detailed', nticks = 5)

# exemplo 21
# a:
x = seq(-1, 1, by=0.05)
y = seq(-1, 1, by=0.05)

f2 = function(x,y){
  return(sqrt(x^2+y^2))
}

z = outer(x,y,f2)

persp(x,y,z,theta = 30, phi = 20, col = 'orange', ticktype = 'detailed', nticks = 4)
ggplot2

x = seq(-5, 5, by=0.5)
y = seq(-5, 5, by=0.5)

f3 = function(x,y){
  return()
}