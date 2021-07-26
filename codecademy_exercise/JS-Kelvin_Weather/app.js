// assign a constant value to 'kelvin'
const kelvin = 293

// celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273

// Equation of fahrenheit from celsius and rounding
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = celsius * (33/100)
newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton`)