"use strict";
/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 */
// @lc code=start
function isLongPressedName(name, typed) {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] == typed[j]) {
            i++;
            j++;
        }
        else if (j > 0 && typed[j] == typed[j - 1]) {
            j++;
        }
        else {
            return false;
        }
    }
    return i == name.length;
}
;
// @lc code=end
