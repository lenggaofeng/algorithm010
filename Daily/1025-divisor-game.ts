/**
 * https://leetcode-cn.com/problems/divisor-game/
 */

 /**
  * 
  * 2  (1, 1)   true
  * 3  (1, 2)  false
  * 4 (1, 3) true  (2, 2) false
  * 5 (1, 4) false
  * 6 (3, 3) true (2, 4) true (1, 5) false
  * 
  */

function divisorGame(N: number): boolean {
    if(N == 1){return false;}

    let dp:boolean[] = new Array(N);
    dp[2] = true;
    dp[3] = false;
    function dfs(n:number):boolean{
        if(dp[n] != undefined){
            return dp[n];
        }

        let flag = !dfs(n - 1);
        if(!flag){
            for(let i = 2, l = n / 2 >> 1; i <= l; i++){
                if(n % i == 0){
                    flag = !dfs(n - i);
                    if(flag){
                        break;
                    }
                }
            }
        }
        dp[n] = flag;
        return flag;
    }
    return dfs(N);
};

console.log(divisorGame(6));