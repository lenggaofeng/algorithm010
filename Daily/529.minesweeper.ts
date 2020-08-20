const stepX = [0, 0, 1, 1, -1, -1, 1, -1];
const stepY = [1, -1,1, -1, 1, -1, 0, 0];
function updateBoard(board: string[][], click: number[]): string[][] {
    const [i, j] = click;
    if(board[i][j] == "M"){
        board[i][j] = "X";
        return board;
    }

    const m = board.length;
    const n = board[0].length;

    const queue:number[][] = [];
    queue.push(click);
    while(queue.length){
        const first = queue.shift() as number[];
        const [i, j] = first; 

        const sides:number[] = [];
        const count = stepX.map((ox, index):number=>{
            const oy = stepY[index];
            const ni = i + ox;
            const nj = j + oy;
            if(ni >= 0 && ni < m && nj >= 0 && nj < n){
                const nc = board[ni][nj];
                const flag = nc == "M";
                if(nc == "E"){
                    sides.push(index);
                }
                return flag ? 1 : 0;
            }
            return 0;
        }).reduce((a,b)=>a+b, 0);

        if(count == 0){
            board[i][j] = "B";
            sides.forEach(v=>{
                board[i + stepX[v]][j + stepY[v]] = "F";
                queue.push([i + stepX[v], j + stepY[v]]);
            });
        } else {
            board[i][j] = `${count}`;
        }
    }
    return board;
};

// console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'M', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E']], [3, 0]));

// console.log(updateBoard([['B', '1', 'E', '1', 'B'],
// ['B', '1', 'M', '1', 'B'],
// ['B', '1', '1', '1', 'B'],
// ['B', 'B', 'B', 'B', 'B']], [1, 2]))


const board = new Array(50).fill(0).map(v=>new Array(50).fill("E"));
console.log(updateBoard(board, [29, 2]));