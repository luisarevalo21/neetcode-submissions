class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {


        //check which is largest 
        //start iteartin gfom the smallest 

        //str1 will always be the shortest 
        //to check if the current substring is potenial i mod against both if both are 0 
        //i consider it. once i consider it i find out how many times i need multiply to get the length 
        //for both strings
        //if they match i update my return  

        //and continute

        //i return my values 
        //swap
        if (str1.length > str2.length) {
            let temp = str1;
            str1 = str2;
            str2 = temp
        }

        let currentSubstring = "";
        let resSubstring = ""
        let largest = 0;
        for (let i = 0; i < str1.length; i++) {

            currentSubstring += str1[i];
            //consider it 
            if ((str1.length % currentSubstring.length) === 0 && (str2.length % currentSubstring.length) === 0) {
                let x = str1.length / currentSubstring.length;
                let potentialSubstring1 = currentSubstring.repeat(x);


                let y = str2.length / currentSubstring.length;
                let potentialSubstring2 = currentSubstring.repeat(y);


                if (potentialSubstring1 === str1 && str2 === potentialSubstring2) {
                    resSubstring = currentSubstring;
                    largest = currentSubstring.length
                }


            }
            //don't care move on 
        }
        return resSubstring;


        // str1 = str1.length < str2.length ? str1 : str2




    }
}
