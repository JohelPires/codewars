import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
# import seaborn as sns
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv(
    '/home/johel/Documentos/codewars_fns/codewars/page-view-time-series-visualizer/fcc-forum-pageviews.csv', index_col=0, parse_dates=True)


print(df.head())

ts = pd.Series(np.random.randn(1000),
               index=pd.date_range("1/1/2000", periods=1000))

ts = ts.cumsum()

ts.plot()
# Clean data
df = None


def draw_line_plot():
    # Draw line plot

    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig


def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df_bar = None

    # Draw bar plot

    # Save image and return fig (don't change this part)
    fig.savefig('bar_plot.png')
    return fig


def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]

    # Draw box plots (using Seaborn)

    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig
