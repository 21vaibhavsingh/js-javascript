function myfun(){
    console.log("hello js function")
}
//console.log(myfun)
//myfun()

function add(num1,num2){
    console.log(num1+num2)
}
add()
add(3,4)
add(3,"a")



function addsum(num1,num2){
    let result = num1+num2 
    return result                       // return result ke baad kuch bhi print nhi hota hai , if kuch bhi print karwana hai toh uske uper hi likhna hoga
}
const result = addsum(3,5)
console.log("result:",result)


function loginusermessage(username){
    return `${username} just loggedIn`
}
console.log(loginusermessage("vaibhav"))
console.log(loginusermessage(""))
console.log(loginusermessage())

function loginUsermessage(username){
    if(username === undefined){
        console.log("please enter user name");
    }
        return `${username} just loggedIn`
}
console.log(loginUsermessage("vaibhav"))
console.log(loginUsermessage(""))
console.log(loginUsermessage())


function calculateprice(num1){
    return num1
}
console.log(calculateprice(200))

function calculateprice(...num1){          //...rest operator which is used for pasiing multiple simultanouesly in function
    return num1
}
console.log(calculateprice(200,300,400))

const user = {
    username:"vaibhav",
    price:200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

handleobject({
    username:"raj",
    price:100
})

const myarr =[200,300,400,500,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(getArray))
console.log(returnsecondvalue([200,300,400,500]))