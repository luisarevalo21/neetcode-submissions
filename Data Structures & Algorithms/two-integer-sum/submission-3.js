class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

//algorithm
//search nums
//if the value doesn't exist in map 
//add it based on value ->index
//check does the dif exist in my map, 
// if it does 
   
   const map = new Map();
   const res=[]
   for(let i =0; i< nums.length ; i++){

    const diff = (target - nums[i])
    const index = map.get(diff)
    console.log("index", index)
    if(index !== undefined ){
       res.push(index);
       res.push(i)   
       return res     
    }
   else{
        map.set(nums[i], i);
    }

   }
   console.log(map)


    }
}
