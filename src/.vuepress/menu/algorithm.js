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
          text: '盛最多水的容器',
          link: '/algorithm/leetcode/hard/2.md',
        },
        {
          text: '缺失的第一个正数',
          link: '/algorithm/leetcode/hard/1.md',
        }
      ],
    }
  ],
};

module.exports = { algorithm }