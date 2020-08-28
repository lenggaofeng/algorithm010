"use strict";
/**
 *
 *
 * n & n - 1 = 0
 * n1 & n = 1000000
 *
 */
function rangeBitwiseAnd(m, n) {
    while (m < n) {
        n = n & n - 1;
    }
    return n;
}
;
