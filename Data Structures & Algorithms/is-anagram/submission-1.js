class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length ) {
            return false;
        }

        let hash = {};
        let hash2 = {};

        for (let a = 0; a < s.length; a++ ) {
            hash[s[a]] = (hash[s[a]] || 0) + 1;
            hash2[t[a]] = (hash2[t[a]] || 0) + 1;
        }

        for (const key in hash) {
            if (hash[key] != hash2[key]) {
                console.log(hash[key], hash2[key])
                return false;
            }
        }
        return true;
    }
}
