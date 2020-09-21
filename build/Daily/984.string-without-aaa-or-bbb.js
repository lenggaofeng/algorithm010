"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strWithout3a3b(A, B) {
    let result = new Array(A + B).fill("");
    let cnt = 0;
    let aConti = 0;
    let bConti = 0;
    while (A || B) {
        if ((A > B && (cnt < 2 || aConti < 2)) || (A <= B && bConti >= 2)) {
            result[cnt] = "a";
            aConti++;
            bConti = 0;
            A--;
        }
        else {
            result[cnt] = "b";
            bConti++;
            aConti = 0;
            B--;
        }
        cnt++;
    }
    return result.join('');
}
;
console.log(strWithout3a3b(4, 1));
