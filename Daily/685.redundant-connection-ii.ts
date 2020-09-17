export default null;
function findRedundantDirectedConnection(edges: number[][]): number[] {
    const n = edges.length;
    const un = new UnionFind(n);
    const parents:number[] = new Array(n + 1).fill(-1).map((v, i)=>i);
    let confilct = -1;
    let cycle = -1;
    edges.forEach(([_in, _out], i)=>{
        if(parents[_out] != _out){
            confilct = i;
        } else {
            parents[_out] = _in;
            if(un.find(_in) == un.find(_out)){
                cycle = i;
            } else {
                un.union(_in, _out);
            }
        }
    });

    if(confilct == -1){
        return edges[cycle];
    } else {
        if(cycle != -1){
            const _out = edges[confilct][1];
            return [parents[_out], _out]
        } else {
            return edges[confilct];
        }
    }
};

class UnionFind{
    _parent:number[];
    constructor(n:number){
        this._parent = new Array(n);
        for(let i = 1; i <= n; i++){
            this._parent[i] = i;
        }
    }

    find(i:number):number{
        let parent = i;
        while(parent != this._parent[parent]){
            parent = this._parent[parent];
        }
        while(i != parent){
            const tmp = this._parent[i];
            this._parent[i] = parent;
            i = tmp;
        }
        return parent;
    }

    union(i:number, j:number){
        this._parent[this.find(i)] = this.find(j);
    }
}

const data:number[][] = [
    // [1,2],
    // [6,2],
    // [1,3],
    // [2,4],
    // [2,5],
    // [4,6],

    [1,2],
    [2,3],
    [3,2],

    /**
     * 1 => 1
     * 2 => 1
     * 3 => 3
     * 
     * [3,2] 冲突边
     * [2,3] 环路边
     */
] ;

console.log(findRedundantDirectedConnection(data));