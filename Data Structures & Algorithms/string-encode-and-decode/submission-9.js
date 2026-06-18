class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalWord = ""
        for(let index of strs) {
            const delimiter = index.length + "#";
            finalWord += delimiter + index;
        }
        return finalWord
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
  decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // ✅ move until '#' to capture FULL length (can be multiple digits)
        while (str[j] !== "#") {
            j++;
        }

        let length = parseInt(str.substring(i, j));
        let word = str.substring(j + 1, j + 1 + length);

        res.push(word);

        // move pointer forward correctly
        i = j + 1 + length;
    }

    return res;
}
}
