class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     * 
     * 
     * 
     * 
     * find the smallest of the two arrays 
     * then gather the two poitnesr elft and right 
     * iterate till they cross 
     * find the mid point of the smalelst and calcualte the mid point for the right array
     * 
     * check if the leftMost is smaller or equal to B right value and 
     * check if B's left most is smaller or equal to A right value 
     *      if so calcualte the median checking if the total is even or odd
     *          if odd reutrn the min of the left values for a and b
     *          if even return the max of left a and b and + min of right a and b divided by 2 
     * 
     * if one is broken check which one and upadt the left and right poitnesr to increse the partition
     */


    findMedianSortedArrays(nums1, nums2) {

        let A = nums1;
        let B = nums2;

        if (A.length > B.length) {
            A = nums2;
            B = nums1;
        }

        const total = nums1.length + nums2.length
        let left = 0;
        let right = A.length ;
        const half = Math.floor((total+1) / 2)




        while (left <= right) {

            let mid = Math.floor((left + right) / 2)
            let j = half -mid

            let ALeft = mid > 0 ? A[mid - 1] : -Infinity
            let ARight = mid < A.length ? A[mid] : Infinity;

            let BLeft = j > 0 ? B[j-1] : -Infinity
            let BRight = j < B.length ? B[j ] : Infinity


            if (ALeft <= BRight && BLeft <= ARight) {

                //if even 
                if (total % 2 === 0) {
                    return ((Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2)
                }
                //odd
                else {

                    return Math.max(ALeft, BLeft)
                }

            }

            else if (ALeft > BRight) {
                right = mid - 1
            }
            else {
                left = mid + 1;
            }

        }
        return -1

    }
}
