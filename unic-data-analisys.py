#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug 15 16:46:29 2022

@author: johel
"""

import numpy as np
import pandas as pd

teste = np.zeros((9,9))
m4 = np.random.randint(low=0, high=100, size=81).reshape(9, 9)

print(m4)



selic = pd.read_json("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json")
# cities = pd.read_csv("https://people.sc.fsu.edu/~jburkardt/data/csv/cities.csv")

print(selic.info())

#%%
from datetime import date
from datetime import datetime as dt

#%%
dataExtract = date.today()

selic['data da extração'] = dataExtract
selic['responsável'] = 'Fulano de Tal'

print(selic)

#%%

selic['data'] = pd.to_datetime(selic['data'], dayfirst=True)
print(selic)

#%%
print(selic.loc[:39])

#%%

teste = selic['valor'] < 0.001
print(selic.loc[teste])

#%% filtro janeiro 2020



#%% filtro janeiro 2019

data1 = pd.to_datetime('2019-01-01')
data2 = pd.to_datetime('2019-01-31')

filtro_janeiro_2019 = (selic['data'] > data1) & (selic['data'] < data2)

print(selic.loc[filtro_janeiro_2019])