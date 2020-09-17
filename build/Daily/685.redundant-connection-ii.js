"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function findRedundantDirectedConnection(edges) {
    const n = edges.length;
    const un = new UnionFind(n);
    const parents = new Array(n + 1).fill(-1).map((v, i) => i);
    let confilct = -1;
    let cycle = -1;
    edges.forEach(([_in, _out], i) => {
        if (parents[_out] != _out) {
            confilct = i;
        }
        else {
            parents[_out] = _in;
            if (un.find(_in) == un.find(_out)) {
                cycle = i;
            }
            else {
                un.union(_in, _out);
            }
        }
    });
    if (confilct == -1) {
        return edges[cycle];
    }
    else {
        if (cycle != -1) {
            const _out = edges[confilct][1];
            return [parents[_out], _out];
        }
        else {
            return edges[confilct];
        }
    }
}
;
class UnionFind {
    constructor(n) {
        this._parent = new Array(n);
        for (let i = 1; i <= n; i++) {
            this._parent[i] = i;
        }
    }
    find(i) {
        let parent = i;
        while (parent != this._parent[parent]) {
            parent = this._parent[parent];
        }
        while (i != parent) {
            const tmp = this._parent[i];
            this._parent[i] = parent;
            i = tmp;
        }
        return parent;
    }
    union(i, j) {
        this._parent[this.find(i)] = this.find(j);
    }
}
const data = [
    // [1,2],
    // [6,2],
    // [1,3],
    // [2,4],
    // [2,5],
    // [4,6],
    [1, 2],
    [2, 3],
    [3, 2],
];
console.log(findRedundantDirectedConnection(data));
