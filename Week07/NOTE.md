学习笔记

# Tire 树
## 基本性质
结点本身不保存完整单词
从根节点到某一节点， 路径上经过的字符连接起来， 为该结点对应得字符串
每个结点的所有子节点路径代表的字符都不相同
## 核心思想
空间换时间
利用字符串的公共前缀来降低查询的时间开销以达到提升效率的目的。
## 优点
最大限度的减少无谓的字符串比较， 查询效率比哈希表要高。
## 典型应用
统计和排序大量的字符串， 常用与搜索引擎统计词频。
对于不同的应用， 结点可能会存储额外的信息， 比如单词出现次数。

# 并查集
## 并查集解决的是组团和配对的问题 (group or not )
## 基本操作
makeSet(s) 建立一个并查集， 其中包含`s`个单元素的集合
unionSet(x, y) 把元素`x` 和`y`所在的集合合并，如果它们所在的集合相交，则不合并
find(x) 找到元素`x` 所在的集合的代表，用于判断两个元素是否在一个集合。
* 并查集使用数组存储关系
* 优化操作， 在查找节点代表的时候， 可以对集合路径进行压缩。

# 搜索
## 初级搜索
1. 朴素搜索
2. 优化方式， 不重复， 剪枝
3. 搜索方向：
    BFS, DFS, 双端搜索， 启发式搜索(A*)


## 启发式搜索， A* 算法
### 估价函数
