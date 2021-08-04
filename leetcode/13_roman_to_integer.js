const romanToInt = s => {
    if (s.length === 0) return
    if (s.length > 15) return
    const romanValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    const sArray = s.split('')
    const romanChar = Object.keys(romanValue)
        
    const newArr = []
    const specialArr = []
    for (let i=0; i<sArray.length; i++) {
        const specialCase = romanChar.includes(sArray[i]+sArray[i+1])
        if (specialCase) {
            specialArr.push(sArray[i], sArray[i+1])
            i += 1
        } else {
            newArr.push(sArray[i])
        }
    }
    let newArrSum = 0
    let specialArrSum = 0
    newArr.forEach(char => {
        return newArrSum += romanValue[char]
    })
    for (let i=0; i<specialArr.length; i+=2) {
        const specialValue = specialArr[i]+specialArr[i+1]
        specialArrSum += romanValue[specialValue]
    }
    // console.log(sArray)
    // console.log(newArr)
    // console.log(specialArr)
    // console.log(newArrSum)
    // console.log(specialArrSum)
    // console.log(newArrSum + specialArrSum)
    return newArrSum + specialArrSum
}
// romanToInt('MCMXCIX')
// romanToInt('MMXXI')
// romanToInt('MCDLXXVI')