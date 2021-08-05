const singleNumber = nums => {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) set.delete(nums[i])
        else set.add(nums[i])
    }
    const ans = set.values().next().value
    console.log(ans)
    return ans
};

singleNumber([2,2,1])
singleNumber([4,1,2,1,2])
singleNumber([1])