function twoSum(nums, target) {
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// Test case 1
console.log(twoSum([2, 7, 11, 15], 9)); 
// Test case 2
console.log(twoSum([3,2,4], 6));
// Test case 3
console.log(twoSum([3,3], 6));
