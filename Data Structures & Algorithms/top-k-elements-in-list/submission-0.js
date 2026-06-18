class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};

        for(let i of nums) {
            if(freq[i]) {
                freq[i]++;
            } else {
                freq[i] = 1;
            }
        }
        const topK = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => Number(num)); 

        return topK;
    }
}
