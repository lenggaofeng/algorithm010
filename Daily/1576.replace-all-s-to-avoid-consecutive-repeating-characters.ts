import { testWithCheck } from "./Test";

export default null;

let arr: string[] = "abcdefg".split("");
function modifyString(s: string): string {
    function getChar(need: number, next: number) {
        if (need == next) {
            need = (need + 1) % arr.length;
        }
        return arr[need];
    }

    let l = s.length;
    const result = new Array(l);
    let need = 0;
    const base = "a".charCodeAt(0);
    for (let i = 0; i < l; i++){
        const nextc = i == l - 1 ? "a" : s[i + 1];
        let next = nextc == "?" ? 0 : nextc.charCodeAt(0) - base;
        if (s[i] == "?") {
            result[i] = getChar(need, next);
        } else {
            result[i] = s[i];
        }
        need = (result[i].charCodeAt(0) - base + 1) % arr.length;
    }
    return result.join("");
};

testWithCheck<string, string>([
    "a?b",
    "?zs",
    "ubv?w",
    "j?qg??b",
    "??yw?ipkj?",
], modifyString, (s: string) => {
    for (let i = 0; i < s.length - 1; i++){
        if (s[i] == s[i + 1]) {
            return false;
        }
    }
    return true;
});
