// Leetcode 161 - https://leetcode.com/problems/one-edit-distance/
function isOneEditDistance(s, t) {
    let ls = s.length,
        lt = t.length;
    if (ls > lt) {
        return isOneEditDistance(t, s);
    }
    if (lt - ls > 1) return false;

    for (let i = 0; i < ls; i++) {
        if (s[i] != t[i]) {
            if (ls === lt) {
                return s.substring(i + 1) === t.substring(i + 1);
            }
            return s.substring(i) === t.substring(i + 1);
        }
    }
    return ls + 1 === lt;
}
