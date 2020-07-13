/**
 * 字典树， 常用于解决字符串公共前缀问题，
 */

export default class Tire {
    public nexts:Map<string, Tire> = new Map();
    public isEnd:boolean = false;
    constructor(public val:string = ""){}

    public add(word:string){
        let node:Tire = this;
        for(let i = 0; i < word.length; i++){
            const c = word[i];
            let next:Tire;
            if(node.nexts.has(c)){
                next = node.nexts.get(c);
            } else {
                next = new Tire(c);
                node.nexts.set(c, next);
            }
            node = next;
        }
        node.isEnd = true;
    }
} 