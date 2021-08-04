const isPalindrome = x => {
    const str = x.toString()
    const mid = Math.floor(str.length / 2)
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[str.length - 1 - i]) return false
    }    
    return true
};

isPalindrome(-121)
isPalindrome(121)
isPalindrome(1221)
isPalindrome(1234)
isPalindrome(-10)
isPalindrome(0)