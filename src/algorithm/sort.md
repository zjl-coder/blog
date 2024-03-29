<TitleList></TitleList>

# 排序算法

[十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/p/7674659.html)  

**稳定性**  

稳定性的意思就是对于**相同值**来说，相对**顺序不能改变**。通俗的讲有两个**相同的数 A 和 B**，在排序之前 A 在 B 的前面， 而经过排序之后，B 跑到了 A 的前面，对于这种情况的发生，我们管他叫做排序的不稳定性。

![An image](./images/sort.png)

### 冒泡排序

将相邻的两个元素进行比较，顺序相反则进行位置交换，直到将最大，或最小的元素推到最顶端。每一轮比较都从头开始，并且每次的步长加1。  

复杂度为 O(n²)
空间复杂度为 O(1)
稳定排序  

### 选择排序

每一趟从待排序的数据元素中选择最小（或最大）的一个元素与当前元素进行位置交换，然后步长加1，直到所有元素排完为止。  

时间复杂度为 O(n²)
空间复杂度为 O(1)  
不是稳定排序  

### 插入排序

将每一个元素插入到前面排好序的序列中去，具体操作是，将当前元素n与前面 [n-1,n-2 ... n-0] 的元素比较，如果小于（或大于）则将 [n-1,n-2 ... n-0] 的元素位置往后挪一位，直到有合适的空出位置，存入元素n  

时间复杂度为 O(n²)  
空间复杂度为 O(1)  
稳定排序  

### 希尔排序

<Te d>插入排序</Te>的一种优化排序，使插入排序更加高效。  

具体操作是：  

- 假设数组长度为10
- 按照数组的长度进行分组，比如每两个元素为1组，可以分为5组，进行插入排序
- 排序之后，又对数组进行**增量分组**，比如分组数量减半，则可以5/2，将数组分为2组，因为之前已经有部分排好序了，所以重新分的两组序列已经有部分元素排好序了，不需要再交换位置，进行插入排序，速度比较快。
- 直到将增量分组为1，即不再分组，直接对数组进行操作，此时很多元素已经排好序了，只有少量的元素需要换位置，所以进行插入排序的效率又更高了。

总之，希尔排序的目的就是尽量减少插入排序时，需要滚动已排好序的数组的次数。  

时间复杂度为 O(nlogN)
空间复杂度为 O(1)  
不是稳定排序  

### 归并排序

采用经典的分治策略。递归的将数组两两分开直到只包含一个元素，然后 将数组排序合并，最终合并为排序好的数组。

在递归拆分数组之后，每次对两个数组同时进行循环，比较两个数组的元素（同一个数组已排好序），较小的先存入新数组。较大的那个元素与另外的数组的下一个元素进行比较。元素存入后，对应数组的游标 +1。

```js
function mergeSort(array) {
  let length = array.length;
  // 如果不是数组或者数组长度小于等于0，直接返回，不需要排序 
  if (!Array.isArray(array) || length === 0) return;
  if (length === 1) {
    return array;
  }
  let mid = parseInt(length >> 1), // 找到中间索引值
    left = array.slice(0, mid), // 截取左半部分
    right = array.slice(mid, length); // 截取右半部分

  return merge(mergeSort(left), mergeSort(right)); // 递归分解后，进行排序合并
}

function merge(leftArray, rightArray) {
  let result = []; // 用一个新的数组装排序的序列
  let leftLength = leftArray.length;
  let rightLength = rightArray.length;
  let il = 0; // 左数组游标
  let ir = 0; // 右数组游标
  // 左右两个数组的元素依次比较，将较小的元素加入结果数组中，直到其中一个数组的元素全部加入完则停止
  while (il < leftLength && ir < rightLength) {
    if (leftArray[il] < rightArray[ir]) {
      result.push(leftArray[il++]); // 左数组元素被存入后，左数组游标 + 1
    } else {
      result.push(rightArray[ir++]); // 右数组元素被存入后，右数组游标 + 1
    }
  }
  // 如果是左边数组还有剩余，则把剩余的元素全部加入到结果数组中。
  while (il < leftLength) {
    result.push(leftArray[il++]);
  }
  // 如果是右边数组还有剩余，则把剩余的元素全部加入到结果数组中。
  while (ir < rightLength) {
    result.push(rightArray[ir++]);
  }
  return result;
}
```

时间复杂度为 O(nlogn)
空间复杂度为 O(n)  
稳定排序  

### 快速排序

分治策略的一种，随机选择一个元素作为中间元素(一般选择第一个元素)，其他元素与中间元素元素进行比较，分成两数组，然后对数组进行递归分治。在递归完后，对回归的数组与中间值进行组合 [...left, 中间元素, ...right]，得到排序结果  

时间复杂度为 O(nlogn)
空间复杂度为 O(logn)  
不是稳定排序

### 归并与快排区别

- 【归并排序】在对数组分治时，不先选取中间值进行左小右大分治，而在分治数组中进行元素比较
- 【快速排序】是选择一个中间值 **n/2**，数组进行递归二分分治时，每个元素都与**n/2**元比较，较小的元素放左边，长度为 **n/2 - 1**，较大的放右边，长度为 **n/2 + 1**，然后进行数组拼接 [...[n/2 - 1], n/2, ...n/2 + 1]。  

### 堆排序

[图解排序算法·堆排序](https://www.cnblogs.com/chengxiao/p/6129630.html)
在数组中表示二叉树的 公示  arr[i] 的left元素 arr[2i+1] ，right元素 arr[2i+2]

关键公式  

大顶堆：`arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]`  

小顶堆：`arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]`  

最后一个非叶子节点：`parseInt(arr.length / 2) - 1`

堆元素的目的是构造大顶堆，通过大顶堆来排序  

从最后一个非叶子节点开始，遍历每个非叶子节点，将非叶子节点与它的左右节点元素进行比较交换位置，最终得到跟节点元素(下标为0的元素)最大。

时间复杂度为 O(nlogn)  
空间复杂度为 O(1)  
不是稳定排序  

### 堆排序与选择排序的区别

选择排序是直接从待排序数组中选择最大或最小值与当前元素进行位置交换，这个过程不需要构造堆

### 基数排序

1. 对数组的每个元素，都按照位进行排序  
2. 选择针对元素的个位数进行比较，排序 得到新的排序数组，
3. 然后对新数组的十位数进行比较排序，得到新的数组，小于十的元素，则十位置为0，  
4. 然后再对新数组的 百位数进行比较排序，得到新的数组，小于百的元素，则百位置为0，以此类推，直到遍历完最高位数长度，得到排好的序列。

时间复杂度为 O(nk)，k 为最大元素的长度  
空间复杂度为 O(n)
稳定排序

### 计数排序

- 数组有确定范围
- 找出待排序数组的最大和最小元素
- 以最小元素为开始键，到最大元素为结束建，构造map（如最小元素是3，最大元素是10，则构造`map = {4: 0, 5: 0, 6: 0 ... 10: 0}`
- 将待排序数组中的所有元素遍历计数，然后在对应的map key 中 增加累计值。
- 将累计好之后的map 按照key 以及key的次数，输出到数组中，得到新排序数组。

时间复杂度为O(n+k)  
空间复杂度为O(n+k)
不是稳定排序  

### 桶排序

计数排序的一种升级版，使用分治方式进行计数排序  

[0,2,1,9,53,2,232,43,234,1,22,43]

- 对待排序数组分治(分桶)
  - 对于一位数元素，分为一桶，进行排序(即 百位为0，十位为0的桶)
  - 对于二位数元素，分为10桶，分别进行排序(即 百位为0，十位为1,2,3 ... 9的桶)
  - 对于三位数元素，分为100桶，分别进行排序(即 百位为1,2,3 ... 9的桶)，再对每个桶进行细分，按照十位进行分桶(十位为0,1,2,3 ... 9的桶)
  - 最后把不空的桶拼接起来

以上只是分桶的一种策略，也可以不用分这么细，或者换种方式分桶，不同的策略对排序的空间复杂度和性能影响都很大。  
时间复杂度  O(n)  
不是稳定排序  
