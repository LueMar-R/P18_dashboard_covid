from flask import Flask, render_template, request, url_for, flash, redirect
from werkzeug.exceptions import abort
import pandas as pd
import numpy as np
from data import donnees, labels
from graph import Graphs
from data_map import df_map

df_map = df_map


df = pd.read_csv("incid_serv.csv", sep = ";")
df['jour'] = pd.to_datetime(df['jour']).astype(np.int64) //1000000

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your secret key'

@app.route('/')
@app.route('/time', methods=('GET', 'POST'))
def stats():
    if request.method == 'POST':
        dp = str(request.values.get('dep'))
        tab2 = df.loc[df.dep.isin([dp])]
        hosj = tab2[['jour', 'incid_hosp']].values.tolist()
        reaj = tab2[['jour', 'incid_rea']].values.tolist()
        dcj = tab2[['jour', 'incid_dc']].values.tolist()
        srtj = tab2[['jour', 'incid_rad']].values.tolist()

        bar = Graphs().map()

        return render_template('time.html', dp = dp, dcj = dcj, hosj=hosj, srtj=srtj, reaj=reaj, df_map=df_map,
        	plot=bar)
    return render_template('time.html')
