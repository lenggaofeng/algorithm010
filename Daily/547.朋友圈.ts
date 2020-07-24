/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 朋友圈
 */

export default null;
// @lc code=start
class UnionSet{
    private data:number[] = [];
    private _size:number = 0;
    public makeSet(n:number){
        for(let i = 0; i < n; i++){
            this.data[i] = i;
            this._size ++;
        }
    }

    public union(p1:number, p2:number){
        let root1 = this.find(p1);
        let root2 = this.find(p2);
        const data = this.data;
        if(root1 != root2){
            data[root2] = root1;
            this._size --;
        }
    }

    public find(p1:number){
        let root = p1;
        const data = this.data;
        while(data[root] != root){
            root = data[data[root]];
        }

        while(root != p1){
            let preParent = data[p1];
            data[p1] = root;
            p1 = preParent;
        }

        return p1;
    }

    public get size(){
        return this._size;
    }
}

function findCircleNum(M: number[][]): number {
    const n = M.length;
    if(n <= 0){return 0;}

    const set = new UnionSet();
    set.makeSet(n);
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(M[i][j] == 1){
                set.union(i, j);
            }
        }
    }
    return set.size;
};
// @lc code=end

