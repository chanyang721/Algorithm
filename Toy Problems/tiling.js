let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    // 세로 2 고정, 가로 n인 보드에 2 x 1크기의 타일로 이 보드를 채우는 모든 경우의 수를 리턴 -> 조합?
    // 입력 n -> 1이상의 자연수
    // 출력 number 
    // 입출력 => 각타일을 구분해서 순서에 따라 놓는 경우의 수를 다르게 카운트한다. => 순열?
    //// 복잡도 : n이 존재 ////
    //.. 수도 코드 ..//
    // 각 타일의 가로 세로는 변경 가능하다. 
    // n 개의 서로 다른 숫자가 있다. 
    // 1이면, => 1가지 
    // 2이면, => 2가지 
    // 3(홀)이면, 2인 경우 + 1인 경우(가로로 놓는 것이 불가능)  // 3
    // 4(짝)이면, 3인 경우 + 2인 경우(가로로 놓는 것이 가능)  // 5
    // 5(홀)이면, 4인 경우 + 3인 경우 // 8
    // 피보나치 수열??
    // 초기값 memo => [0, 1, 2] 숫자 맞춰야하기 떄문에 0 추가
    //// base //// 
    // if -> memo[n] === undefined, return; 
    // if => n <= 2, return memo[n];
    //// recursive ////
    // cosnt recur = () => { }
    //   if -> memo[n] === undefined, return; 
    //   if => n <= 2, return memo[n];
    //  let result = tiling(n - 1) + tiling(n - 2);
    // memo[n] = result
    // return memo[n]
    let memo = [0, 1, 2];
    const recur = (num) => {
      if (memo[num] !== undefined) {
        return memo[num]; 
      }
      if (num <= 2) {
        return memo[num];
      }
      memo[num] = recur(num - 1) + recur(num - 2);
      return memo[num]
    }
    return recur(n)
  };