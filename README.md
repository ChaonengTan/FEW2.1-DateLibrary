![npm (scoped)](https://img.shields.io/npm/v/@chaonengtan/few2.1-datelibrary) ![NPM](https://img.shields.io/npm/l/@chaonengtan/few2.1-datelibrary) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ChaonengTan/FEW2.1-DateLibrary) ![GitHub issues](https://img.shields.io/github/issues/ChaonengTan/FEW2.1-DateLibrary)

DateLibrary

Adds easy ways to access properties of the Date object
Adds format function to return a customized formatted date string
Adds when function to return in how long is the target date compared to today

Getters:
.year (returns the full year ie. 2021)
.yr (returns the shortened year ie. 21)
.month (returns the month in text ie. April)
.mon (returns the month in shortened text ie. Apr)
.week (returns the weekday in text ie. Wednesday)
.wk (returns the weekday in shortened text ie. Wed)
.dates (returns the padded date ie. 04)
.date (returns the date ie. 4)
.hours (returns the padded hour ie. 06)
.hr (returns the hour ie. 6)
.minutes (returns the padded minutes ie. 01)
.mins (returns the minutes ie. 1)
.seconds (returns the padded seconds ie. 07)
.secs (returns the seconds ie. 7)

Functions: 
.format(format) (returns a customized formatted date string using the following key and getters above:
    'Y':this.year, 
    'y':this.yr, 
    'M':this.month, 
    'm':this.mon, 
    'D':this.dates, 
    'd':this.date, 
    'H':this.hours, 
    'h':this.hr, 
    'I':this.minutes, 
    'i':this.mins, 
    'S':this.seconds, 
    's':this.secs
)
.when() (returns in how long is the target date compared to today in the largest magnitude
if const targetDate = Date(2022, 5, 15)
if today is Date(2021, 4, 14)
today.when() //returns 1years
)