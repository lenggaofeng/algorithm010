function canVisitAllRooms(rooms: number[][]): boolean {
    if (rooms.length == 0) { return true;}
    const n = rooms.length;
    const visited = new Array(n).fill(false);
    const queue: Array<number> = [0];
    visited[0] = true;
    let visitedCnt = 0;
    while (queue.length) {
        const cur = queue.pop() as number;
        const nexts = rooms[cur];
        nexts.forEach(v => {
            if (visited[v] == false) {
                visited[v] = true;
                queue.push(v);
            }
        });
        visitedCnt++;
    }
    return visitedCnt == n;
};

let rooms = [];
// rooms = [[1],[2],[3],[]]
rooms = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms));