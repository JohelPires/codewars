import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv('./epa-sea-level.csv', index_col='Year')

    # Create scatter plot
    plt.figure(figsize=(16,4))
    plt.scatter(x=df.index, y=df['CSIRO Adjusted Sea Level'])

    # Create first line of best fit
    reg = linregress(x=df.index, y=df['CSIRO Adjusted Sea Level'])

    future = [i for i in range(2014, 2051)]
    future = pd.DataFrame(index=future)
    df = df.append(future)
    t = [reg.slope * i + reg.intercept for i in df.index]
    df['linregress']=t

    plt.plot(df[['CSIRO Adjusted Sea Level', 'linregress']])

    # Create second line of best fit
    reg2df = df.loc[2000:2013].copy()
    reg2 = linregress(x=reg2df.index, y=reg2df['CSIRO Adjusted Sea Level'])
    reg2df = reg2df.append(future)

    reg2df['linregress'] = [reg2.slope * i + reg2.intercept for i in reg2df.index]

    plt.plot(reg2df[['CSIRO Adjusted Sea Level', 'linregress']])

    # Add labels and title

    plt.xlabel('Year')
    plt.ylabel('Sea Level (inches)')
    plt.title('Rise in Sea Level')
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()