#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug 15 18:16:43 2022

@author: johel
"""

lista = [10, 9, 5, 8]


def selectionSort(arr):
    n = 0
    if len(arr) <= 1:
        return arr
    menor = arr[0]
    menorIdx = 0
    
    for i, num in enumerate(arr):
        if num < menor:
            menor = num
            menorIdx = i
    if menor < arr[0]:
        arr[0], arr[menorIdx] = arr[menorIdx], arr[0]
    return selectionSort(arr[n+1:len(arr)])
        
print(selectionSort(lista))


## from text:
    
def executar_selection_sort(lista):
    n = len(lista)
    
    for i in range(0, n):
        index_menor = i
        for j in range(i+1, n):
            if lista[j] < lista[index_menor]:
                index_menor = j
        lista[i], lista[index_menor] = lista[index_menor], lista[i]
    return lista


lista = [10, 9, 5, 8, 11, -1, 3]
executar_selection_sort(lista)
        

# another one:
    


def executar_selection_sort_2(lista):
    lista_ordenada = []
    while lista:
        minimo = min(lista)
        lista_ordenada.append(minimo)
        lista.remove(minimo)
    return lista_ordenada


lista = [10, 9, 5, 8, 11, -1, 3]
executar_selection_sort_2(lista)

