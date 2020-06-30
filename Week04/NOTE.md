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