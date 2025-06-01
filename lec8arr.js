const arr = [0,1,2,3,"vaibhav"]
console.log(arr[0])
// shallow copy = original data will be change {share same reference}
// deep copy = copy of original dta will be change {doesn't share same refernece}

// array methods

arr.push(6)
console.log(arr)
arr.push(7)
console.log(arr)
arr.pop(7)
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.shift(9)
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.includes(9));

console.log(arr.indexOf(3))

const newarr= arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)

//slice, splice

console.log("A",arr)
const myn = arr.slice(1,3)
console.log(myn)

console.log("B",arr)
const myn2 = arr.splice(1,3)

console.log("C",arr)
console.log(myn2)

const a = [a,s,d,n ,]
const b = [1,2,3,4]

a.push(b)
console.log(a)

a.concat(b)
console.log(a)

const c = a.concat(b)
console.log(c)

const c =[...a,...b]
console.log(c)


