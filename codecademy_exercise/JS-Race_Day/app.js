let raceNumber = Math.floor(Math.random() * 1000);

let isRegistered = false
let runnerAge = 25

if (runnerAge > 18 && isRegistered) {
  raceNumber += 1000
}

if (runnerAge > 18 && isRegistered) {
  console.log(`You will race at 9:30am and your race number is ${raceNumber}.`)
} else if (runnerAge > 18 && !isRegistered) {
  console.log(`You will race at 11:00am and your race number is ${raceNumber}.`)
}

if (runnerAge < 18) {
  console.log(`Youth registrants will race at 12:30pm and your race number is ${raceNumber}.`)
} else if (runnerAge === 18) {
  console.log(`Please go to the registration desk`)
}