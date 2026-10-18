class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //encode take the lenght of the string and add it to the front of the string+ the deliminter # then the string 
    //add it to my string array.

    //return the string array using join
    encode(strs) {

        const res = []
        for (let i = 0; i < strs.length; i++) {

            const size = strs[i].length;

            let str = `${size}#${strs[i]}`
            res.push(str);

        }



        return res.join("")

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    //to decode 
    //the iterate through the list grabbing the number
    //the number will tell me how many characters to get  
    //and add them to my result array 
    //removing the delimeter after the number 

    //create the strings and place them into array 
    decode(str) {
        const res = []

        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }
            let num = Number(str.substring(i, j));

            let myString = str.substring(j + 1, num + j + 1);
            console.log("my string", myString);

            res.push(myString);

            i = j + num + 1;
        }

        return res;

    }
}
