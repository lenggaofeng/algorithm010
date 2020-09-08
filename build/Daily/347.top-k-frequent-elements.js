"use strict";
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
function topKFrequent(nums, k) {
    const map = new Map();
    nums.forEach(v => {
        const cnt = (map.get(v) || 0) + 1;
        map.set(v, cnt);
    });
    const heap = new Heap((a, b) => {
        return map.get(b) > map.get(a);
    });
    for (let v of map.keys()) {
        if (heap.size >= k) {
            const min = heap.top();
            if (map.get(v) > map.get(min)) {
                heap.pop();
                heap.push(v);
            }
        }
        else {
            heap.push(v);
        }
    }
    const result = [];
    while (heap.size) {
        result.push(heap.pop());
    }
    return result.reverse();
}
;
function topKFrequent2(nums, k) {
    const map = new Map();
    let max = 0;
    nums.forEach(v => {
        const cnt = (map.get(v) || 0) + 1;
        map.set(v, cnt);
        if (cnt > max) {
            max = cnt;
        }
    });
    const times2Num = new Array(max + 1);
    map.forEach((times, num) => {
        let list = times2Num[times] || [];
        times2Num[times] = list;
        list.push(num);
    });
    const result = [];
    for (let i = max; i > 0; i--) {
        const list = times2Num[i];
        if (!list) {
            continue;
        }
        result.push(...list);
        k -= list.length;
        if (k <= 0) {
            break;
        }
    }
    return result;
}
;
