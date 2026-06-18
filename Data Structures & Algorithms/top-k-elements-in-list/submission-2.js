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
            }else{
                freq[i] = 1;
            }
        }

        const bucket = Array(nums.length + 1).fill().map(() => []);

        for(let i in freq) {
            bucket[freq[i]].push(Number(i));
        }

        console.log(bucket)

        let result = [];

        for(let i = bucket.length - 1; i > 0 && result.length < k; i--) {
            for(let num = 0; num < bucket[i].length; num++) {
                result.push(bucket[i][num]);
                if(result.length === k) break;
            }
        }
        return result;
    }
}