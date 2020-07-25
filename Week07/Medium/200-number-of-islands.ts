/**
 * https://leetcode-cn.com/problems/number-of-islands/
 */


export default null;

class UnionSet{
    private data:number[] = [];
    private _size:number = 0;
    add(i:number){
        this.data[i] = i;
        this._size ++;
    }

    unionSet(p1:number, p2:number){
        p1 = this.find(p1);
        p2 = this.find(p2);
        if(p1 != p2){
            this.data[p1] = p2;
            this._size --;
        }
    }

    find(p:number){
        let origin = p;
        while(this.data[p] != p){
            p = this.data[p];
        }

        if(p != origin){
            let root = p;
             //路径压缩
            while(origin != root){
                let parent = this.data[origin];
                this.data[origin] = root;
                origin = parent;
            }
        }

        return p;
    }

    get size(){
        return this._size;
    }
}

function numIslands(grid: string[][]): number {
    const n =grid.length;
    if(n == 0){return 0;}
    const m = grid[0].length;
    if(m == 0){return 0;}

    const unionSet = new UnionSet();
    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j ++){
            if(grid[i][j] == '0'){
                continue;
            }

            const index = i * m + j;
            unionSet.add(index);
            if(j > 0){
                if(grid[i][j - 1] == '1'){
                    unionSet.unionSet(index, i * m + j - 1);
                }
            }

            if(i > 0){
                if(grid[i - 1][j] == '1'){
                    unionSet.unionSet(index, (i - 1) * m + j);
                }
            }
        }
    }

    return unionSet.size;
};

const rowI = [1, -1, 0, 0];
const colI = [0, 0, -1, 1];
function numIslandsDfs(grid: string[][]): number {
    const n =grid.length;
    if(n == 0){return 0;}
    const m = grid[0].length;
    if(m == 0){return 0;}

    const visited = new Set<number>();
    function dfs(i:number, j:number){
        const index = i * m + j;
        if(visited.has(index)){ return;}
        visited.add(index);

        for(let step = 0; step < rowI.length; step ++){
            const ni = i + rowI[step];
            const nj = j + colI[step];
            if(ni >= 0 && ni < n && nj >= 0 && nj < m && grid[ni][nj] == '1'){
                dfs(ni, nj);
            }
        }
    }

    let cnt:number = 0
    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j ++){
            if(grid[i][j] == '0'){
                continue;
            }

            const index = i * m + j;
            if(!visited.has(index)){
                dfs(i, j);
                cnt ++;
            }
        }
    }

    return cnt;
};

console.log(numIslandsDfs(
    [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]]
));
