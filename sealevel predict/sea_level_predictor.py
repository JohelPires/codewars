import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv('./epa-sea-level.csv')

    # Create scatter plot
    x = df['Year']
    y = df['CSIRO Adjusted Sea Level']

    fig, ax = plt.subplots(figsize=(14,4))
    ax = plt.scatter(x, y)

    # Create first line of best fit

    reg1 = linregress(x,y)

    years = [i for i in range(1880, 2051)]
    regline1 = [reg1.slope * i + reg1.intercept for i in years]
    regline1 = pd.Series(regline1, index=years)
    regline1

    # Create second line of best fit

    x_fut = df[df['Year']>=2000]['Year'] 
    y_fut = df[df['Year']>=2000]['CSIRO Adjusted Sea Level']

    reg2 = linregress(x_fut, y_fut)

    years_forecast = [i for i in range(2000, 2051)]
    regline2 = [reg2.slope * i + reg2.intercept for i in years_forecast]
    regline2 = pd.Series(regline2, index=years_forecast)
    regline2

    # Add labels and title

    fig, ax = plt.subplots(figsize=(14,4))
    ax = plt.scatter(x, y)
    plt.plot(regline1, 'r')
    plt.plot(regline2, 'g')
    plt.xlabel('Year')
    plt.ylabel('Sea Level (inches)')
    plt.title('Rise in Sea Level')
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()