const LSCS = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 정수를 요소로하는 배열arr에서 다음 조건을 만족하는 LSCS를 리턴 
    // LSCS란 -> 배열에서 연속된 부분 배열의 합을 중 가장 큰 값
    // 음수가 나오면 음수 뒤에 나오는 양수가 음수보다 같거나 커야한다.? 
    // 값을 더하면서 나오는 가장 큰값을 max에 저장하고, 계속 더해가면서 max와 비교하여 큰값이 나오면 저장한다.
    // 만약 더해가면서 0보다 작은 값을 가지게 된다면, 0으로 설정하여 다음에 오는 양수부터 다시 더해간다.  
    let arrSum = 0; 
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      arrSum = arrSum + arr[i]
      if (arrSum > max) {
        max = arrSum;
      }
      if (arrSum < 0) {
        arrSum = 0;
      }
    }
    return max;
  };