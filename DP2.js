{
  /*
    ให้จำนวนเหรียญที่มีค่าแตกต่างกัน (ในรูปของ array) และจำนวนเงินที่ต้องการ
     จงหาจำนวนเหรียญที่น้อยที่สุดที่ใช้รวมกันแล้วได้จำนวนเงินนั้น
    ถ้าไม่สามารถรวมได้ ให้ return -1

    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    คำอธิบาย: เลือกเหรียญ 5 + 5 + 1 = 11 ใช้เหรียญ 3 เหรียญ
    */
}

function CoinChange(coins, amount) {
  // Logic
  const dp = Array(amount + 1).fill(Infinity); // สร้างdp table กำหนดค่าเริ่มต้นเป็นinfinity
  dp[0] = 0; //Base Case จำนวนเหรียญเริ่มต้นเป็น 0
  //วนลูปเพื่อคำนวณ dp
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  // ถ้า dp[amount] ยังเป็น infinity แสดงว่าไม่สามารถรวมได้
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// variables
const coins = [1, 2, 5];
const amount = 11;

console.log(CoinChange(coins, amount)); // output: 3
