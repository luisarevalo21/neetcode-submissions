class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     *
     * //use the 2 sum algorithm
     * keep the left stationary as i move to the right moving left and right till i find the matching triplets that sum to 0
     *sort the values as well
     * add to my res array
     * continue till i reach the end of the array? or left reaches mid up to length -2?
     */
    threeSum(nums) {
        //i +j +k =0
        //or -i = j+k keeps i static

        const sortedNums = nums.sort((a, b) => a - b);
        // console.log("sorted NUms,", sortedNums);
        const res = [];
        for (let cur = 0; cur < sortedNums.length - 2; cur++) {
            //duplicate increasse cur and skip the current since i need to avoid duplicates
            if (cur > 0 && sortedNums[cur] === sortedNums[cur - 1]) {
                continue;
            }
            console.log("sortedNUms", sortedNums[cur]);
            let left = cur + 1;
            let right = sortedNums.length - 1;
            while (left < right) {
                //solution found
                if (-1 * sortedNums[cur] === sortedNums[left] + sortedNums[right]) {
                    console.log("inside if");
                    res.push([sortedNums[cur], sortedNums[left], sortedNums[right]]);
                    //found a solution i need to move left and right inwards or outwards to remove duplicates
                    left++;
                    right--;
                    while (left < right && sortedNums[left - 1] === sortedNums[left]) {
                        left++;
                    }
                    // while (left < right && sortedNums[right + 1] === sortedNums[right]) {
                    //     right--;
                    // }
                }

                //decide which to move left or right
                //if left values are greater than the total move upwards left ++
                else if (-1 * sortedNums[cur] > sortedNums[left] + sortedNums[right]) {
                    left++;
                } else if (-1 * sortedNums[cur] < sortedNums[left] + sortedNums[right]) {
                    right--;
                }
            }
        }
        return res;

        // let left = 0;

        // const sortedNums = nums.sort((a, b) => a - b);
        // console.log("sorte unms", sortedNums);
        // const res = [];
        // while (left < sortedNums.length - 2) {
        //     let leftNum = sortedNums[left] * -1;
        //     let mid = left + 1;
        //     let right = sortedNums.length - 1;
        //     console.log(mid, right);
        //     while (mid < right) {
        //         if (leftNum === sortedNums[mid] + sortedNums[right]) {
        //             // console.log("if");
        //             const result = [leftNum * -1, sortedNums[mid], sortedNums[right]];
        //             res.push(result);

        //             while (mid < right && sortedNums[mid] === sortedNums[right] ) {
        //                 mid++;
        //                 right--;
        //             }
        //         } else if (leftNum > sortedNums[mid] + sortedNums[right]) {
        //             right--;
        //         } else if (leftNum < sortedNums[mid] + sortedNums[right]) {
        //             mid++;
        //         }
        //     }
        //     // console.log("left num", leftNum);
        //     left++;
        // }
        // return res;
    }
}
