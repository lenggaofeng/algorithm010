"use strict";
/**
 * https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
class Heap {
    constructor(compare = Heap.defaultComp) {
        this.compare = compare;
        this._data = [];
        this._size = 0;
    }
    static defaultComp(a, b) {
        return a > b;
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
function smallestRange(nums) {
    const k = nums.length;
    let next = new Array(k).fill(0);
    let heap = new Heap((a, b) => {
        return nums[a][next[a]] < nums[b][next[b]];
    });
    let rangeLeft = 0;
    let rangeRight = Number.MAX_VALUE;
    let range = rangeRight - rangeLeft;
    let max = Number.MIN_VALUE;
    let min = 0;
    for (let i = 0; i < k; i++) {
        heap.push(i);
        max = Math.max(max, nums[i][0]);
    }
    while (true) {
        let minIndex = heap.pop();
        let curNextIndex = next[minIndex];
        let curMin = nums[minIndex][curNextIndex];
        let curRange = max - curMin;
        // console.log("---", max, minIndex, curMin, curRange, range, rangeLeft, rangeRight)
        if (curRange < range) {
            min = curMin;
            range = curRange;
            rangeLeft = min;
            rangeRight = max;
        }
        curNextIndex++;
        next[minIndex] = curNextIndex;
        if (curNextIndex >= nums[minIndex].length) {
            break;
        }
        heap.push(minIndex);
        max = Math.max(max, nums[minIndex][curNextIndex]);
    }
    return [rangeLeft, rangeRight];
}
;
function smallestRange2(nums) {
    let num2GroupMap = new Array(); // [number, group][]
    let k = nums.length;
    for (let i = 0; i < k; i++) {
        nums[i].forEach(v => {
            num2GroupMap.push([v, i]);
        });
    }
    num2GroupMap.sort((a, b) => {
        return a[0] - b[0];
    });
    let rangeLeft = 0, rangeRight = Number.MAX_VALUE;
    let range = rangeRight - rangeLeft;
    let groupTimes = new Array(k).fill(0);
    let size = 0;
    let leftIndex = 0;
    num2GroupMap.forEach(([num, group], right) => {
        if (groupTimes[group]++ == 0) {
            size++;
        }
        while (size == k) {
            let [curMin, groupLeft] = num2GroupMap[leftIndex++];
            if (--groupTimes[groupLeft] == 0) {
                size--;
                if (num - curMin < range) {
                    rangeLeft = curMin;
                    rangeRight = num;
                    range = num - curMin;
                }
            }
        }
    });
    return [rangeLeft, rangeRight];
}
console.log(smallestRange2([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]));
// console.log(smallestRange2([[1,2,3],[1,2,3],[1,2,3]]));
