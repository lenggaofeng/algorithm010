"use strict";
/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 朋友圈
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
// @lc code=start
class UnionSet {
    constructor() {
        this.data = [];
        this._size = 0;
    }
    makeSet(n) {
        for (let i = 0; i < n; i++) {
            this.data[i] = i;
            this._size++;
        }
    }
    union(p1, p2) {
        let root1 = this.find(p1);
        let root2 = this.find(p2);
        const data = this.data;
        if (root1 != root2) {
            data[root2] = root1;
            this._size--;
        }
    }
    find(p1) {
        let root = p1;
        const data = this.data;
        while (data[root] != root) {
            root = data[data[root]];
        }
        while (root != p1) {
            let preParent = data[p1];
            data[p1] = root;
            p1 = preParent;
        }
        return p1;
    }
    get size() {
        return this._size;
    }
}
function findCircleNum(M) {
    const n = M.length;
    if (n <= 0) {
        return 0;
    }
    const set = new UnionSet();
    set.makeSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (M[i][j] == 1) {
                set.union(i, j);
            }
        }
    }
    return set.size;
}
;
// @lc code=end
