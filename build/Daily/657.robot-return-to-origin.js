"use strict";
function judgeCircle(moves) {
    let cntH = 0, cntV = 0;
    for (let i = 0, l = moves.length; i < l; i++) {
        switch (moves[i]) {
            case "R":
                cntH++;
                break;
            case "L":
                cntH--;
                break;
            case "U":
                cntV++;
                break;
            case "D":
                cntV--;
                break;
        }
    }
    return cntH == 0 && cntV == 0;
}
;
