const user = {
    username : "vaibhav",
    price:200,
    welcomemsg:function(){
        console.log(`${this.username},welcome to website`)          // this key word used for accessing current context
       // console.log(this)
    }
}
user.welcomemsg()

user.username ="vps"
user.welcomemsg()
console.log(this)


//Arrow function

const chai = ()=>{
    let username = "vaibhav"
    console.log(this.username)
}

const add = (num1,num2)=>{
    return num1+num2
}
console.log(add(3,4))

//immediately invoked function expression (IIFE)
function chai(){
    console.log(`DB connected`);
}
chai()

(function chai(){                   //named IIFE
    console.log(`DB connected`);
})();
  //global scope ke pollution se problem hoti hai kai bar, toh global scope ke jo bhi declaration, varibale shai unhe hatane ke liye IIFE ka use kiya
  // ; lagana padta hai at the end of IIFE

(()=>{                              //unnamed IIFE
    console.log(`DB connected two`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})('vaibahv');