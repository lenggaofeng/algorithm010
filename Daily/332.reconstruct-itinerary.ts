

/**
 * 堆， 常用于排序， 常见的有 大根堆， 小根堆。 对于大根堆， 每个节点的值一定大于任意一个子节点的值。
 * 可以使用数组作为它的内部结构， 插入和删除的时间复杂度均为O(logn);
 */
export default null;
class Heap<T>{
    private _data:T[] = [];
    private _size:number = 0;

    constructor(private compare:(a:T, b:T)=>boolean){
    }

    public push(val:T){
        if(this._size >= this._data.length - 1){
            this._resize();
        }

        this._data[this._size] = val;
        if(this._size){
            this.heapUp(this._size);
        }
        this._size ++;
    }

    public top():T|undefined{
        if(this._size > 0){
            return this._data[0];
        }
        return undefined;
    }

    public pop():T|undefined{
        if(this._size <= 0){
            return undefined;
        }

        const val = this.top();
        this._size --;
        this._data[0] = this._data[this._size];
        if(this._size){
            this.heapDown(0);
        }
        return val;
    }

    private _resize(){
        this._data.length = this._size * 2;
    }

    public get size(){
        return this._size;
    }

    private heapDown(index:number){
        const data = this._data;
        while(index < this._size){
            const left = index * 2 + 1;
            if(left >= this.size){break;}

            const right = left + 1;
            let target = left;
            if(right < this.size && this.compare(data[right], data[left])){
                target = right;
            }

            if(this.compare(data[index], data[target])){ break; }

            this.swap(index, target);
            index = target;
        }
    }

    private heapUp(index:number){
        const data = this._data;
        while(index){
            const p = (index - 1) >> 1;
            const cr = this.compare(data[index], data[p]);
            if(!cr){ break; }

            this.swap(index, p);
            index = p;
        }
    }

    private swap(i:number, j:number){
        const data = this._data;
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
    }
}

function test(){
    const h = new Heap<number>((a,b)=>a>b);
    for(let i = 0; i < 1000; i++){
        const r = Math.floor(Math.random() * 10000);
        h.push(r);
    }
    
    console.log(h);
    let pre:number = undefined;
    while(h.size){
        let v = h.pop();
        console.log(h.size, v);
        if(pre != undefined && v > pre){
            console.error("error");
            break;
        }
        pre = v;
    }
}

function findItinerary(tickets: string[][]): string[] {
    const sides = new Map<string, Heap<string>>();
    tickets.forEach(([from, to]) => {
        let list: Heap<string> = sides.get(from);
        if (!list) {
            list = new Heap<string>((a,b)=>a<b);
            sides.set(from, list);
        }
        list.push(to);
    });

    const results: string[] = [];
    function dfs(root: string) {
        if (sides.has(root)) {
            const nexts = sides.get(root);
            while (nexts.size) {
                dfs(nexts.pop())
            }
        }

        results.push(root);
    }
    dfs("JFK");
    return results.reverse();
};

console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));