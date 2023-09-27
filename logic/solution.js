const solution = (a, m, k) => {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (i + m > a.length) return result;

    let isPair = false;

    for (let j = i; j < i + m - 1; j++) {
      for (let l = j + 1; l < i + m; l++) {
        if (a[j] + a[l] == k) {
          isPair = true;
        }
      }
    }
    if (isPair) result++;
  }
  return result;
};

let a_result1 = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
let m_result1 = 4;
let k_result1 = 10;

let a_result2 = [15, 8, 8, 2, 6, 4, 1, 7];
let m_result2 = 2;
let k_result2 = 8;

console.log('result 1 :', solution(a_result1, m_result1, k_result1));

console.log('result 2 :', solution(a_result2, m_result2, k_result2));
