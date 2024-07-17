let score = null;
// console.log(typeof(score))
// also, like this
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanisLoogedIn = Boolean(isLoggedIn)
// console.log(booleanisLoogedIn);


// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// **************************** Operations **************************** //

let value = 3;
let negValue = -value // 3 => -3
// console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2) // power , 2 ki power 2
// console.log(2 / 2)
// console.log(2 % 2)

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
// console.log(str3)
// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32 , Rule memtioned in ECMA script

// console.log(3 + 4 * 5 % 3) // Bad practice, use proper brackets

// console.log(+true) // 1
// console.log(true+) // error
// console.log(+"") // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; ++gameCounter;
console.log(gameCounter)