// assign a value to myAge
const myAge = 20

// assign a value to earlyYears (will change)
let earlyYears = 2
earlyYears *= 10.5

// assign a value to laterYears
let laterYears = myAge - 2

// multiply laterYears
laterYears *= 4

// calculate myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears

// Store myName in lowercase
const myName = 'John Doe'.toLowerCase()

// print results in console using string interpolation
console.log(`
My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`)