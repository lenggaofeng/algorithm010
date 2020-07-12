export default null;

function jump(nums:number[]):number{
    const len = nums.length;
    if(nums.length <= 1){
        return 0;
    }

    let dp:number[] = [];
    dp[0] = 0;
    for(let i = 1; i < len; i++){
        dp[i] = Number.MAX_VALUE;
    }

    for(let i = 0; i < len; i++){
        let dis = nums[i];
        for(let j = i + 1; j <= i + dis; j ++){
            dp[j] = Math.min(dp[i] + 1, dp[j]);
        }
    }
    return dp[len - 1];
}

function jump1(nums:number[]):number{
    const len = nums.length;
    if(nums.length <= 1){
        return 0;
    }

    let maxPos = 0;
    let end = 0;
    let cnt = 0;
    for(let i = 0; i < len - 1; i++){
        maxPos = Math.max(maxPos, i + nums[i]);
        if(i == end){
            end = maxPos;
            cnt ++;
        }
    }
    return cnt;
}