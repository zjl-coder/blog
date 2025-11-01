# leetcode 高级算法
[高级算法](https://leetcode.cn/leetbook/read/top-interview-questions-hard/xqjfxh/)  

### 映射管理常用手段
- map 除了 创建 Object, Set, Map 之外，在纯数字的情况下，还可以使用数组来实现map，如果数组中没有重复的数，以数组 [1,3,4,2]为例，我们将数组下标 n 和数 nums[n] 建立一个映射关系 f(n)f(n)，其映射关系 n->f(n)为： 
```
0->1  
1->3  
2->4  
3->2  
```