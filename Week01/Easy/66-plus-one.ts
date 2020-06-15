function plusOne(digits: number[]): number[] {
    let flag = true;
    let last = digits.length - 1;
    for (let i = last; i >=0 ; i--) {
        let num = digits[i];
        if(flag){ num ++; }
        flag = num >= 10;
        if(flag) {
            num -= 10;
        }
        digits[i] = num;
    }
    if(flag){
        let cnt = digits.length;
        digits.length ++;
        digits = digits.copyWithin(1, 0, cnt)
        digits[0] = 1;
    }
    return digits;
};

// let nums = [9,9,9];
// console.log(plusOne(nums));