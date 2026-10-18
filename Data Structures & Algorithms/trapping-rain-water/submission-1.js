class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        //calculate the largest to the left 
        //calculcat the largest to the right 

        //iterate through the list and calcuclate the total water 
        //if sum is negative ignore 
        //otehrwise add to my sum 

        const prefix = [0]
        const suffix = new Array(height.length).fill(0);


        for (let i = 1; i < height.length; i++) {
            let max = prefix[i - 1];
            let counter = i
            while (counter > 0) {

                max = Math.max(max, height[counter - 1])
                counter--;
            }
            prefix[i] = max

        }

        console.log(prefix)

        for (let i = height.length - 2; i >= 0; i--) {
            let max = suffix[i];
            let counter = i
            while (counter < height.length - 1) {

                max = Math.max(max, height[counter + 1])
                counter++;
            }
            suffix[i] = max

        }

        let total = 0;
        for (let i = 0; i < height.length; i++) {

            const sum = Math.min(prefix[i], suffix[i]) - height[i]
            if (sum < 0) {
                continue
            }
            else {
                total += sum
            }



        }
        return total


    }

}
