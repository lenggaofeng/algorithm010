function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const un = new UnionFind(n);
    let cycle = -1;
    for(let i = 0; i < n; i++){
        const [_in, _out] = edges[i];
        if(un.find(_in) == un.find(_out)){
            cycle = i;
            break;
        } else {
            un.union(_in, _out);
        }
    }
    return edges[cycle];
};

class UnionFind{
    private _parent:number[];
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
