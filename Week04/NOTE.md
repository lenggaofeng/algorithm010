学习笔记

## 深度优先搜索

从左往右， 一棵子树搜索完，再搜索下一棵子树， 可以用递归的方式来实现
```javascript
function dfs(node){
    visited.add(node);
    node.children.forEach(v=>{
        if(!node.visited){
            dfs(v);
        }
    });
}
```

## 广度优先搜索
子节点一层一层的搜索， 搜索完了一层， 再搜索下一层， 可以使用队列的方式来实现。

## 启发式搜索
A* 寻路

## 贪心算法
贪心算法是一种在算法的每一步都采取`在当前状态下`最好或最优的结果,从而希望结果是最好或最优的算法
+ 与动态规划的不同:
贪心算法对每个子问题的解决方案都做出选择， 不能回退。
动态规划会保存以前的运算结果，并根据以前的结果对当前问题进行选择，有时会回退。

贪心算法可以解决一些最优化的问题，如图得最小生成树，求哈夫曼编码等。

## 二分查找
### 二分查找的前提
+ 上下界
+ 索引访问
+ 目标函数单调性(有序)
### 代码模板
```js
let left = 0; right = arr.length - 1;
while(left < right){
    let mid = (left + right) / 2;
    if(target == arr[mid]){
        //find the result
    } else if(target < arr[mid]){
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
```
