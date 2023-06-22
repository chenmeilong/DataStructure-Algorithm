var maxScore = function(nums1, nums2, k) {
    const queue = new CustomPriorityQueue((a, b) => a < b);
    const n = nums1.length;
    const indexes = [...new Array(n).keys()];
    indexes.sort((a, b) => nums2[b] - nums2[a]);
    let sum = 0;
    for (let i = 0; i < k; i++) {
      const idx = indexes[i];
      sum += nums1[idx];
      queue.insert(nums1[idx]);
    }
    let ans = nums2[indexes[[k - 1]]] * sum;
    for (let i = k; i < n; i++) {
      const idx = indexes[i];
      const min = nums2[idx];
      const x = nums1[idx];
      queue.insert(x);
      sum += x;
      sum -= queue.deq();
      ans = Math.max(ans, sum * min);
    }
    return ans;
  };
