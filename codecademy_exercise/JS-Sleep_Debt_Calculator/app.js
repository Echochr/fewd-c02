const getSleepHours = day => {
    day = day.toLowerCase()
    switch(day) {
      case 'monday':
        return 8
      case 'tuesday':
        return 7
      case 'wednesday':
        return 6
      case 'thursday':
        return 8
      case 'friday':
        return 6.5
      case 'saturday':
        return 6
      case 'sunday':
        return 8
    }
  }
  
  const getActualSleepHours = () => 6 + 7 + 6 + 8 + 6.5 + 6 + 8
  
  // {
  //   let sum = getSleepHours('monday') +
  //             getSleepHours('tuesday') +
  //             getSleepHours('wednesday') +
  //             getSleepHours('thursday') +
  //             getSleepHours('friday') +
  //             getSleepHours('saturday') +
  //             getSleepHours('sunday')
  //   return sum
  // }
  
  const getIdealSleepHours = idealHours => idealHours * 7
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
    if (actualSleepHours === idealSleepHours) {
      console.log('You have the perfect amount of sleep!')
    }
    if (actualSleepHours > idealSleepHours) {
      const num = actualSleepHours - idealSleepHours
      console.log(`You got ${num} more hours of sleep than needed.`)
    }
    if (actualSleepHours < idealSleepHours) {
      const num = idealSleepHours - actualSleepHours
      console.log(`You should get ${num} more hours of rest!`)
    }
  }
  
  calculateSleepDebt()