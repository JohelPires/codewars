#include <stdio.h>
#include <stdlib.h>
int contador = 0;
void algoritmo(int n, char a, char b, char c)

{
  if (n == 1)

  {
    printf("Move o disco %d de %c para %c\n", n, a, b);
    contador++;
  } else

  {
    algoritmo(n - 1, a, c, b);
    printf("Move o disco %d de %c para %c\n", n, a, b);
    algoritmo(n - 1, c, b, a);
    contador++;
  }
}

int main(void) {
  int numDiscos;
  printf("Informe o numero de discos: ");
  scanf("%d", &numDiscos);
  algoritmo(numDiscos, 'A', 'B', 'C');
  printf("\n\nA quantidade de movimentos foi: %d", contador);
  return 0;
}