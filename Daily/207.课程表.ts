/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

export default null;

const enum State{
    Idle,
    Visting,
    Visited,
}

function canFinishDfs(numCourses: number, prerequisites: number[][]): boolean {
    const visited = new Array(numCourses).fill(State.Idle);
    const edges:number[][] = new Array(numCourses).fill(0).map(()=>[]);
    prerequisites.forEach(([_out, _in])=>{
        edges[_in].push(_out);
    });

    let hasCircle:boolean = false;
    function dfs(i:number){
        visited[i] = State.Visting;
        const nexts = edges[i];
        for(let j = 0; j < nexts.length; j++){
            const next = nexts[j];
            if(visited[next] == State.Idle){
                dfs(next);
            } else if(visited[next] == State.Visting) {
                hasCircle = true;
                return;
            }
        }
        visited[i] = State.Visited;
    }

    for(let i = 0; i < numCourses; i++){
        if(visited[i] == State.Idle){
            dfs(i);
        }
    }
    return !hasCircle;
};

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegress = new Array(numCourses).fill(0);
    const nexts:number[][] = new Array(numCourses).fill(0).map(()=>[]);
    prerequisites.forEach(([_out, _in])=>{
        inDegress[_out] ++;
        nexts[_in].push(_out);
    });

    const queue = new Array();
    inDegress.forEach((v, i)=>{
        if(v == 0){
            queue.push(i);
        }
    });

    let visited = 0;
    while(queue.length){
        visited ++;
        const i = queue.pop();
        nexts[i].forEach(v=>{
            inDegress[v] --;
            if(inDegress[v] == 0){
                queue.push(v);
            };
        });
    }
    return visited == numCourses;
};
// @lc code=end

console.log(canFinishDfs( 3, [[1,0],[1,2], [0, 2]] ));

