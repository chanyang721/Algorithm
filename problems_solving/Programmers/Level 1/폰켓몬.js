function solution(nums) {
  // nums의 길이의 절반을 가져갈 수 있다.
  // 종류가 같은 것은 요소의 번호가 같다.
  // 가장 다양한 종류에서 가장 많은 폰켓몬을 선택하여 리턴한다고 이해했습니다.
  // 두개의 결과값인 nums.length / 2 vs 요소의 종류의 갯수 중 작은 값을 리턴해라
  const result = [];
  const half = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result.length <= half ? result.length : half;
}
