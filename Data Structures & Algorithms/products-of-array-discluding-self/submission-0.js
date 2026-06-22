class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        for(let a = 0; a < nums.length; a++) {
            let prod = 1;
            for(let i = 0; i < nums.length; i++) {
                if(nums[i] !== undefined && a !== i )
                    prod *= nums[i];
            }
            res[a] = prod;
        }
        return res;
    }
}
