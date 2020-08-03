/**
 * https://leetcode-cn.com/problems/lru-cache/#/
 */


class LinkNode<T> {
    public value:T;
    public next:LinkNode<T> = this;
    public pre:LinkNode<T> = this;
    constructor(v:T){
        this.value = v;
    }
}

const emptyNode = new LinkNode<any>(0);
class DoubleLinkedList<T>{
    private _head:LinkNode<T> = emptyNode;
    private _tail:LinkNode<T> = emptyNode;
    private _size:number = 0;
    constructor(public defaultT:T){
        this._head = this._tail = emptyNode;
    }

    get(index: number): T {
        const node = this.getNode(index);
        return node == emptyNode ? this.defaultT : node.value;
    }
    public get size(){
        return this._size;
    }
    public get tail(){
        return this._tail;
    }
    public get head(){
        return this._head;
    }
    
    getNode(index: number): LinkNode<T> {
        if(index < 0 || index >= this._size){
            return emptyNode;
        }

        let node = this._head;
        while(index--){
            node = node.next;
        }
        return node;
    }

    addAtHead(val: T): LinkNode<T> {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node, 0);
        return node;
    }

    addAtTail(val: T): LinkNode<T> {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node, this._size );
        return node;
    }

    addAtIndex(index: number, val: T): LinkNode<T> {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node,index )
        return node;
    }

    deleteAtIndex(index: number): LinkNode<T>|null {
        const node = this.getNode(index);
        if(node == emptyNode){return null;}
        this.deleteNode(node);
        return node;
    }

    deleteNode(node:LinkNode<T>){
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this._size --;
        if(this._size == 0){
            this._head = this._tail = emptyNode;
        } else if(node == this._head){
            this._head = this._head.next;
        } else if(node == this._tail){
            this._tail = this._tail.pre;
        }
    }

    addNodeAtIndex(node:LinkNode<T>, index:number){
        if(this._size == 0){
            this._head = this._tail = node;
            this._size ++;
            return;
        }

        let cur = index == this._size ? this._head : this.getNode(index);
        if(cur == emptyNode){return;}
        cur.pre.next = node;
        node.pre = cur.pre;

        cur.pre = node;
        node.next = cur;
        if(index == 0){
            this._head = node;
        } else if(index == this._size){
            this._tail = node;
        }
        this._size ++;
    }

    print(){
        let node = this._head;
        let results:T[] = [];
        while(node){
            results.push(node.value);
            if(node == this._tail){
                break;
            }
            node = node.next;
        }
        console.log(results.map(v=>JSON.stringify(v)).join(' -> '));
    }
}

 class LRUCacheNode{
     constructor(public key:number,
        public value:number){

     }
 }

class LRUCache {
    private hashMap = new Map<number, LinkNode<LRUCacheNode>>();
    private linkedList = new DoubleLinkedList<LRUCacheNode>(null as any);
    constructor(private capacity: number) {
    }

    get(key: number): number {
        const node = this.hashMap.get(key);
        if(!node){
            return -1;
        }

        this.linkedList.deleteNode(node);
        this.linkedList.addNodeAtIndex(node, 0);
        return node.value.value;
    }

    put(key: number, value: number): void {
        let node = this.hashMap.get(key);
        if(node){
            node.value.value = value;
            this.linkedList.deleteNode(node);
            this.linkedList.addNodeAtIndex(node, 0);
        } else {
            if(this.linkedList.size >= this.capacity){
                const tail = this.linkedList.tail;
                this.linkedList.deleteNode(tail);
                this.hashMap.delete(tail.value.key);
            }

            node = this.linkedList.addAtHead(new LRUCacheNode(key, value));
            this.hashMap.set(key, node);
        }
    }
    [index:string]:any;
}

class LRUCache2{
    private map = new Map<number, number>();
    constructor(private capacity:number){

    }

    get(key: number): number {
        if(!this.map.has(key)){return -1;}
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key: number, value: number): void {
        if(!this.map.has(key)){
            if(this.map.size >= this.capacity){
                this.map.delete(this.map.keys().next().value);
            }
        } else {
            this.map.delete(key);
        }
        this.map.set(key, value);
    }
}

const list = new LRUCache(2);
function test(cmds:string[], data:number[][]){
    cmds.forEach((v, i)=>{
        if(i == 0){return;}
        const result = list[v].call(list, ...data[i]);
        console.log("==", result, v, ...data[i]);
    });
}
test(
    ["LRUCache","put","put","get","put","put","get"]
    ,[[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
    )

export default null;

