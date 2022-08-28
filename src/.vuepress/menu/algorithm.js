const algorithm = {
  text: '算法',
  link: '/algorithm/',
  children: [
    {
      text: '排序算法',
      link: '/algorithm/sort.md',
    },
    {
      text: '高级算法',
      link: '/algorithm/leetcode/hard',
      children: [
        {
          text: '除自身以外数组的乘积',
          link: '/algorithm/leetcode/hard/4.md',
        },
        {
          text: '螺旋矩阵',
          link: '/algorithm/leetcode/hard/5.md',
        },
        {
          text: '四数相加 II',
          link: '/algorithm/leetcode/hard/6.md',
        },
        {
          text: '盛最多水的容器',
          link: '/algorithm/leetcode/hard/2.md',
        },
        {
          text: '生命游戏',
          link: '/algorithm/leetcode/hard/7.md',
        },
        {
          text: '缺失的第一个正数',
          link: '/algorithm/leetcode/hard/1.md',
        },
        {
          text: '最长连续序列',
          link: '/algorithm/leetcode/hard/8.md',
        },
        {
          text: '接雨水',
          link: '/algorithm/leetcode/hard/3.md',
        },
      ],
    }
  ],
};

module.exports = { algorithm }