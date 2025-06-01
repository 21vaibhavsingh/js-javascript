"use strict"; // treat all JS code as newer version

// alert(3+3) //we use node JS , not browser

console.log(3+3)
                // code readability should be high
console.log("vaibhav")

let name = "vaibhav" //stringdatatype
let age = 20 // intdatatype
//let isLoggedIn = false // booldatatype
let state = null

//number => 2 to power 23
//big int {for large data}
//string => " "
//boolean => true / false
//null => standalone value
//undefined =>
    //object

console.log(typeof age)
console.log(typeof null)
                        // data type is object
console.log(typeof undefined)
                        // data type is undefined

let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// integer => integer
//"33abc" => NaN
// null => 0
// undefined => NaN {not a number}
// true => 1
//false => 0

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)

// ******************************** Operations *******************************

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)  //power
console.log(2/3)   //quetiont
console.log(2%2)   //remainder


let str1 = "hello"
let str2 = "vaibhav"

let str3 = str1+str2 
console.log(str3)