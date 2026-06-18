class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr = [];
        let arr2 = [];

        if (s.length === 0 || t.length === 0 ) {
            return false;
        }

        for(const a of s) {
            arr.push(a);
        }

        for(const b of t) {
            arr2.push(b);
        }

        arr.sort();
        arr2.sort();
        
        if(arr.toString() === arr2.toString()) {
            return true; 
        } else {
            return false;
        }
    }
}
