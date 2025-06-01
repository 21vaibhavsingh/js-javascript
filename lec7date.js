let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate)

let mycreatedate = new Date(2023, 0 , 23)
console.log(mycreatedate.toDateString())

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedate.getTime())
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));   // milli sec.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})