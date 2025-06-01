var c = 300       // global scope
let a = 400

if(true){         //block scope
let a = 10
const b= 20
var c = 30
console.log("inner a",a)
}
//console.log(a);
//console.log(b)
 console.log(c)


function one(){
    const username = "vaibhav"
    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website)                  // error due to out of scope
    two()
}
one()


if(true){
    const username = "vaibhav"
    if(username === "vaibhav"){
        const website = "youtube"
        console.log(username+website)
    }
    //console.log(website)              //error due to out of scope
}
//console.log(username)                 //error due to out of scope


////************************************************interesting*******************/

function addone(num){
    return num+1 
}
addone(5)

const addtwo = function(num){
    return num+2
}
addtwo(5)