/*
console.log(2>1);
console.log(2 >= 1);
console.log(2<1);


console.log("2" >1)
console.log("02" >1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null != 0)
console.log(null < 0)
console.log(null <= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === 

console.log("2" === 2);

*/

//****   Data type   ****/
/*
// primitive data type :- 
                        String
                        number
                        Boolean
                        null
                        undefined
                        Symbol
                        BigInt

// Non-primitive (refernece type) data type :-
                        Array
                        Objects
                        Functions

*/


// example of primitive datatype
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const BigNumber = 3234645787n

// example of non primitive datatype

const heros = ["shatkiman","naagraj","dogesh"];

let MyObj={
        name:"vaibhav",
        age: 20,
        city: "Indore"
}

const MyFunction = function(){
    console.log("hello world");
}

console.log(typeof BigNumber); //used for finding data type 