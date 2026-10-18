class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

//creat a map//store the value if it its not in it. 
//if it is return true 
//other wise return false


const map = new Map();

for(let i =0; i< nums.length; i++){

    if(map.has(nums[i])){
        return true
    }
    map.set(nums[i], 1);
}

    return false;
    }
}
