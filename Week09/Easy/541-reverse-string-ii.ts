function reverseStr(s: string, k: number): string {
    let arr = s.split("");
    const l = s.length;
    let step = 2 * k;
    for(let i = 0; i < l; i+=step){
        let start = i;
        let end = Math.min(l - 1, i + k - 1);
        while(start < end){
            let tmp = arr[start];
            arr[start++ ] = arr[end];
            arr[end --] = tmp;
        }
    }
    return arr.join('');
};

console.log(reverseStr("abcde", 3));