function padWithZero(num){
    if (num<10){
        return`0${num}`
    }
    return num
}
class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    // getters
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return Number(String(this._date.getFullYear()).slice(2))
    }
    get month() {
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[this._date.getMonth()-1]
    }
    get mon() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        return months[this._date.getMonth()-1]
    }
    get week() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return days[this._date.getDay()-3]
    }
    get wk() {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        return String(days[this._date.getDay()-3]).slice(0, 4)
    }
    get dates() {
        return padWithZero(this._date.getDate())
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return padWithZero(this._date.getHours())
    }
    get hr() {
        return this._date.getHours()
    }
    get minutes() {
        return padWithZero(this._date.getMinutes())
    }
    get mins() {
        return this._date.getMinutes()
    }
    get seconds() {
        return padWithZero(this._date.getSeconds())
    }
    get secs() {
        return this._date.getSeconds()
    }
    // functionals
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
        // console.log('input: ', this.year, this._date.getMonth(), this._date.getDay())
        // console.log('vs: ',rn.getFullYear(), rn.getMonth(), rn.getDay())
        if (this.year-rn.getFullYear()!=0){
            return (this.year-rn.getFullYear()+ 'years')
        }
        if (this._date.getMonth()-rn.getMonth()!=0){
            return (this._date.getMonth()-rn.getMonth()+ 'months')
        }
        return (this._date.getDay()-rn.getDay()+ 'days')
    }
}
module.exports = {
    D: D
}