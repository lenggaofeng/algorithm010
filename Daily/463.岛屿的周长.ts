/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
    const n = grid.length;
    if(n <= 0){return 0;}
    const m = grid[0].length;
    if(m <= 0){return 0;}
    function isEdge(i:number, j:number){
        if(i < 0 || j < 0 || i >= n || j >= m){
            return 1;
        }
        return grid[i][j] == 1 ? 0 : 1;
    }
    function count(i:number, j:number){
        return isEdge(i - 1, j) + isEdge(i, j - 1) + isEdge(i + 1, j) + isEdge(i, j + 1);
    }

    let cnt = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] == 1){
                count(i, j);
            }
        }
    }

    return cnt;
};
// @lc code=end

