const twoSum = (numbers, target) => {
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {            
            if (numbers[i] + numbers[j] === target) {
                if (numbers[i] === numbers[j]) {
                    index1 = numbers.indexOf(numbers[i]) + 1
                    index2 = numbers.indexOf(numbers[j]) + 2
                    return [index1, index2]
                } else {
                    index1 = numbers.indexOf(numbers[i]) + 1
                    index2 = numbers.indexOf(numbers[j]) + 1
                    return [index1, index2]
                }                
            }                
        }            
    }
}

numbers = [2,7,11,15]
target = 9
twoSum(numbers, target)