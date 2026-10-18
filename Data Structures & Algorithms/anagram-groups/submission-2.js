class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

  const array = [];
  for (let i = 0; i < strs.length; i++) {
    const newArray = new Array(26).fill(0);

    for (let j = 0; j < strs[i].length; j++) {
      const index = strs[i].charCodeAt(j) - "a".charCodeAt(0);
      newArray[index] = newArray[index] + 1;
    }

    array.push(newArray);
  }

  const map = {};

  for (let i = 0; i < strs.length; i++) {
    if (map[array[i]] !== undefined) {
      const res = map[array[i]];

      res.push(strs[i]);

      map[array[i]] = res;
    } else {
      map[array[i]] = [strs[i]];
    }
  }

  return Object.values(map);
    }
}
