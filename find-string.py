#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug 15 14:39:51 2022

@author: johel
"""



texto = """Operadores de String
Python oferece operadores para processar texto (ou seja, valores de string).
Assim como os números, as strings podem ser comparadas usando operadores de comparação:
==, !=, <, > e assim por diante.
O operador ==, por exemplo, retorna True se as strings nos dois lados do operador tiverem o mesmo valor (Perkovic, p. 23, 2016).
"""

texto = texto.lower().replace('.', '').replace(',', '').replace('(', '').replace(')', '').replace('\n', ' ')

palavras = texto.split()
count = 0

print(texto, palavras)

for palavra in palavras:
    
    if palavra.lower() == 'string' or palavra.lower() == 'strings':
        count = count + 1
        
print(count)