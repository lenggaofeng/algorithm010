"use strict";
function isIsomorphicHelper(s) {
    let map = new Map();
    const n = s.length;
    let num = 0;
    return s.split("").map(c => {
        let cm = num;
        if (!map.has(c)) {
            map.set(c, cm);
            num++;
        }
        else {
            cm = map.get(c);
        }
        return cm;
    }).join("");
}
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return isIsomorphicHelper(s) == isIsomorphicHelper(t);
}
;
console.log(isIsomorphic("fooa", "baaa"));
