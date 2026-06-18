class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};

        if(nums.length == 0) {
            return false; 
        }
        
        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const arr = Object.entries(freq).map((el, index) => (el[1]>1) ? true : false);

        arr.sort((a,b) => Number(b) - Number(a));
        return arr.splice(0, 1)[0];
    }
}
