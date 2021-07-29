function solution(nums) {
  // nums의 요소 중 3개를 더했을때 그 값이 소수인 경우의 개수를 리턴
  // 소수 => 1을 제외한 수 중 자기 자신과 1로만 나누어 떨어지는 수
  // 1. 요소 중 3개를 더한 값만 모은 배열을 만든다.
  // 2. 요소 중 소수만 찾는다.
  let result = [];
  let count = 0;
  function isPrime(number) {
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let num = nums[i] + nums[j] + nums[k];
        if (num % 2 !== 0) {
          result.push(num);
        }
      }
    }
  }
  console.log(result);
  // 소수인 요수의 개수
  for (let i = 0; i < result.length; i++) {
    if (isPrime(result[i])) {
      count++;
    }
  }
  return count;
}
