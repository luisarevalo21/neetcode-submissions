class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * 
     * 
     * @return {number}
     * 
     * //bruter force would be to add them to a combined array 
     * take the size divide by 2 then return it 
     */
    findMedianSortedArrays(nums1, nums2) {


        const sorted = [...nums1, ...nums2].sort((a,b)=> a-b)

        console.log("soted", sorted)
        //even 
        if (sorted.length % 2 === 0) {

            let s = (sorted.length / 2) - 1;
            return ((sorted[s] + sorted[s + 1]) / 2)
        }
        //odd
        else {

            return sorted[Math.floor(sorted.length / 2)]

        }




    }
}
