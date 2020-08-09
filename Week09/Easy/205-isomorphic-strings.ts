
function isIsomorphicHelper(s:string){
    let map = new Map<string, number>();
    const n = s.length;
    let num:number = 0;
    return s.split("").map(c=>{
        let cm:number = num;
        if(!map.has(c)){
            map.set(c, cm);
            num ++;
        } else {
            cm = map.get(c);
        }
        return cm;
    }).join("");
}
function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length){return false;}
    return isIsomorphicHelper(s) == isIsomorphicHelper(t);
};

console.log(isIsomorphic("fooa", "baaa"))