"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 堆， 常用于排序， 常见的有 大根堆， 小根堆。 对于大根堆， 每个节点的值一定大于任意一个子节点的值。
 * 可以使用数组作为它的内部结构， 插入和删除的时间复杂度均为O(logn);
 */
exports.default = null;
class Heap {
    constructor(compare) {
        this.compare = compare;
        this._data = [];
        this._size = 0;
    }
    push(val) {
        if (this._size >= this._data.length - 1) {
            this._resize();
        }
        this._data[this._size] = val;
        if (this._size) {
            this.heapUp(this._size);
        }
        this._size++;
    }
    top() {
        if (this._size > 0) {
            return this._data[0];
        }
        return undefined;
    }
    pop() {
        if (this._size <= 0) {
            return undefined;
        }
        const val = this.top();
        this._size--;
        this._data[0] = this._data[this._size];
        if (this._size) {
            this.heapDown(0);
        }
        return val;
    }
    _resize() {
        this._data.length = this._size * 2;
    }
    get size() {
        return this._size;
    }
    heapDown(index) {
        const data = this._data;
        while (index < this._size) {
            const left = index * 2 + 1;
            if (left >= this.size) {
                break;
            }
            const right = left + 1;
            let target = left;
            if (right < this.size && this.compare(data[right], data[left])) {
                target = right;
            }
            if (this.compare(data[index], data[target])) {
                break;
            }
            this.swap(index, target);
            index = target;
        }
    }
    heapUp(index) {
        const data = this._data;
        while (index) {
            const p = (index - 1) >> 1;
            const cr = this.compare(data[index], data[p]);
            if (!cr) {
                break;
            }
            this.swap(index, p);
            index = p;
        }
    }
    swap(i, j) {
        const data = this._data;
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
    }
}
function test() {
    const h = new Heap((a, b) => a > b);
    for (let i = 0; i < 1000; i++) {
        const r = Math.floor(Math.random() * 10000);
        h.push(r);
    }
    console.log(h);
    let pre = undefined;
    while (h.size) {
        let v = h.pop();
        console.log(h.size, v);
        if (pre != undefined && v > pre) {
            console.error("error");
            break;
        }
        pre = v;
    }
}
function findItinerary(tickets) {
    const sides = new Map();
    tickets.forEach(([from, to]) => {
        let list = sides.get(from);
        if (!list) {
            list = new Heap((a, b) => a < b);
            sides.set(from, list);
        }
        list.push(to);
    });
    const results = [];
    function dfs(root) {
        if (sides.has(root)) {
            const nexts = sides.get(root);
            while (nexts.size) {
                dfs(nexts.pop());
            }
        }
        results.push(root);
    }
    dfs("JFK");
    return results.reverse();
}
;
console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));
