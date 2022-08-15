#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug 15 18:16:43 2022

@author: johel
"""

lista = [10, 9, 5, 8]


def selectionSort(arr):
    menor = arr[0]    
    for i, num in enumerate(arr):
        if num < menor:
            menor = num
    if menor < arr[0]:
        swap
        