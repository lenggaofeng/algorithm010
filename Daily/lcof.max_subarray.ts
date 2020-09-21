function maxSubArray(arr: number[]): number {
    let max: number = -Number.MAX_VALUE;
    let n = arr.length;
    let pre = 0;
    for (let i = 0; i < n; i++){
        let cnt = 0;
        if (i == 0) {
            cnt = arr[i];
        } else {
            cnt = Math.max(pre, 0) + arr[i];
        }
        if (cnt > max) {
            max = cnt;
        }
        pre = cnt;
    }

    return max;
}

console.log(maxSubArray([-1]))