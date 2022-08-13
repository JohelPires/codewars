# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

print('Hi')

file = open('algorithms problem solving.md')

for line in file:
    line.rstrip(\n)
    print(line)