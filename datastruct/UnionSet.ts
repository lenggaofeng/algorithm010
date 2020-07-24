export class UnionSet{
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
        if(root1 != root2){
            nums[root2] = root1;
            this._size --;
        }
    }

    public find(p1:number){
        let root = p1;
        while(nums[root] != root){
            root = nums[nums[root]];
        }

        while(root != p1){
            let preParent = nums[p1];
            nums[p1] = root;
            p1 = preParent;
        }

        return p1;
    }

    public get size(){
        return this._size;
    }
}
