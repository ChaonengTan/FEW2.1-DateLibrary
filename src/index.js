class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return Number(String(this._date.getFullYear()).slice(2))
    }
    get month() {
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[this._date.getMonth()]
    }
    get mon() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        return months[this._date.getMonth()]
    }
    get week() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday']
        return days[this._date.getDay()]
    }
    get wk() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return String(days[this._date.getDay()]).slice(0, 4)
    }
    get dates() {
        if (this._date.getDate()<9){
            return(0,+this._date.getDate())
        }
        return this._date.getDate()
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        if (this._date.getHours()<9){
            return(0,+this._date.getHours())
        }
        return this._date.getHours()
    }
    get hr() {
        return this._date.getHours()
    }
    get minutes() {
        if (this._date.getMinutes()<9){
            return(0,+this._date.getMinutes())
        }
        return this._date.getMinutes()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get seconds() {
        if (this._date.getSeconds()<9){
            return(0,+this._date.getSeconds())
        }
        return this._date.getSeconds()
    }
    get secs() {
        return this._date.getSeconds()
    }
    format(format) {
        const formatChar = {
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
            's':this.secs}
        let returnString = ''
        for(let i = 0; i<format.length; i++){
            if (formatChar[format[i]]!==undefined){
                returnString+=formatChar[format[i]]
            }
            else{
                returnString+=(format[i])
            }
        }
        return(returnString)
    }
    when(){
        const rn = new Date()
        console.log('input: ', this.year, this._date.getMonth(), this._date.getDay())
        console.log('right now: ', rn.getFullYear(), rn.getMonth(), rn.getDay())
        if (this.year-rn.getFullYear()!=0){
            return (this.year-rn.getFullYear()+ 'years')
        }
        if (this._date.getMonth()-rn.getMonth()!=0){
            return (this._date.getMonth()-rn.getMonth()+ 'months')
        }
        return (this._date.getDay()-rn.getDay()+ 'days')
    }
}
module.exports = D
// const rn = new D()
// const someday = new D(2200, 7, 17)
// console.log(rn.year)
// console.log(rn.yr)
// console.log(rn.month)
// console.log(rn.mon)
// console.log(rn.week)
// console.log(rn.wk)
// console.log(rn.date)
// console.log(rn.hours)
// console.log(rn.mins)
// console.log(rn.secs)
// console.log(rn.format('Y/m/D/h/I/s'))
// console.log(someday.when())