//使用位运算， 回溯算法
export default null;

function solveNQueens(n: number): string[][] {
    const results:string[][] = [];
    function solve(index: number, states: number[], queues: number, pie: number, na: number) {
        if (index == n) {
            // 根据每次放入的皇后位置，生成棋盘
            const result = states.map(i => {
                return ".".repeat(i) + "Q" + ".".repeat(n - i - 1);
            });
            results.push(result);
            return;
        }

        //选出所有可取的位置
        let bits = (~(queues | pie | na)) & ((1 << n) - 1);
        //遍历所有位置
        while (bits) {
            const q = bits & -bits;  // 取最后的1表示的数字, 即最低可用位置
            bits = bits & (bits - 1);   //清除最后的 1
            states.push(Math.log2(q));  //将这一次的皇后位置索引，塞入状态表中
            //下探到下一行
            /**
             * queues 保存了所有的列, 直接把对应标志位赋值就行
             * pie 保存了撇对角线的状态, 每下探一层， 标志位需要左移 1,  (举例， 对于 第1行第2列的皇后, 会攻击第2行第1列， 第3行第0列， 每次攻击左移1)
             * na 保存了捺对角线的状态，每下探一层， 标志位需要右移 1, (举例， 对于 第1行第1列的皇后, 会攻击第2行第2列， 第3行第3列， 每次攻击右移1)
             */
            solve(index + 1, states, queues | q, (pie | q) << 1, (na | q) >> 1);
            //恢复状态表
            states.pop();
        }
    }

    solve(0, [], 0, 0, 0);
    return results;
};

console.log(solveNQueens(4));