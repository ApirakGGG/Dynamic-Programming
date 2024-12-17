const nums = [3, 2, 5, 10, 7];
const maxSum = (nums) => {
  if (nums.length === 0) return 0; // case array ว่าง
  if (nums.length === 1) return nums[0]; // case array มีตัวเดียว

  const dp = Array(nums.length); // create DP Table
  dp[0] = nums[0]; //base case
  dp[1] = Math.max(nums[0], nums[1]); //base case2

  for (let i = 2; i < nums.length; i++) {
    //เลือกได้ว่าจะไม่เลือก i (dp[i-1] หรือเลือก i แล้วรวมกับ dp[i-2])
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[nums.length - 1]; // คำตอบคือ dp ตำแหน่งสุดท้าย
};

console.log(maxSum(nums)); //anwser 15

// Optimization: Version

const maxSum2 = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.lenght === 1) return nums[0];

  let prev1 = Math.max(nums[0], nums[1]); // dp[i -1]
  let prev2 = nums[0]; // dp[i - 2]

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};
console.log(maxSum2(nums)); //anwser 15
