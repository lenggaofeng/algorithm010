"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (root1 != root2) {
            nums[root2] = root1;
            this._size--;
        }
    }
    find(p1) {
        let root = p1;
        while (nums[root] != root) {
            root = nums[nums[root]];
        }
        while (root != p1) {
            let preParent = nums[p1];
            nums[p1] = root;
            p1 = preParent;
        }
        return p1;
    }
    get size() {
        return this._size;
    }
}
exports.UnionSet = UnionSet;
