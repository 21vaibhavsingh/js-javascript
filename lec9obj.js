// singleton :- contructor se singleton object banta hai
//Object.create

// object literals
/*
const mysym = Symbol("key1")

const Jsuser ={
    name:"vaibhav",
    age:20,
    [mysym]:"key1",
    location:"indore",
    isloggedin: false,
    lastloginday:["monday","tuesday"]
}
console.log(Jsuser.age)
console.log(Jsuser["age"])
console.log(Jsuser.mysym)
console.log(Jsuser[mysym])         //declaration of symbol and use in object and print as symbol

Jsuser.location = "gwalior"
Object.freeze(Jsuser)

console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("hello js user");
}

console.log(Jsuser.greeting())

*/


/*
// const tinderuser = new Object()    // singleton object
const tinderuser  = {}              // non singleton object

tinderuser.id = "123456"
tinderuser.name = "vaibhav"
tinderuser.isloggedin = false
console.log(tinderuser)

const regularuser = {
    email: "asnfglfkd",
    fullname:{
        userfullname:{
            firstname:"vaibhav",
            lastname:"singh"
        }
    }
}
console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname)
console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
*/

//into to JSON

{
    name:"vaibhav",
    age:20
}