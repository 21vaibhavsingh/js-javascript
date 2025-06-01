//stack (primitive), Heap (non-primitive)

let myYoutubename = "vaibhavpratapsingh"
let anothername = myYoutubename
anothername = "vps"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email:"xyz.com"
    upi:"anch"
}

let userTwo = userOne

userTwo.email = "wem"

console.log(userOne.email)  // same email milega jo likha gaya hai
console.log(userTwo.email)  // update email milega