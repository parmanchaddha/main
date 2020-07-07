#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jul  4 12:13:57 2020

@author: nathankredentser
"""

from flask import Flask,render_template,request
from tracks import CreateSpotfiyConnection

app = Flask(__name__)
# class connect:
#     def yep(self,band):
#         self.band = band
@app.route('/')
def my_form():
    return render_template('form.html')
        

@app.route("/choose", methods = ["POST"])
def home():
    text = request.form['text']
    number = request.form['number']
    spotify_connection = CreateSpotfiyConnection()
    spotify_songs = spotify_connection.get_tracks_by_band(text, 50)
    spp = str(spotify_songs)
    spp = spp.replace("'" ,"")
    spp = spp.replace('"' ,"")
    spp = spp.replace("[","")
    spp = spp.replace("]","")
    spp = spp.replace("&","and")
    return render_template("radiohead.html",spot = spp, number= number)

if __name__ == "__main__":
    app.run(debug=True)
    
