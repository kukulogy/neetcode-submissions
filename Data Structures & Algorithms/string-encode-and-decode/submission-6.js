class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) return "/";
        const delimiter = strs.join("<>");
        return btoa(delimiter);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "/") return [];
        const decoder = atob(str);
        return decoder.split("<>");
    }
}
