class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};
        for (const word of strs) {
            const index = word.split("").sort().join('');
            if(hash[index]) {
                hash[index].push(word);
            } else {
                hash[index] = ([word]);
            }
        }

        return Object.entries(hash).map(([key, val]) => 
            val
        );
    }
}
