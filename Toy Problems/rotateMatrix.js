const rotateMatrix = function (matrix, num = 1) {
    // TODO: 여기에 코드를 작성합니다.
    // 시계방향으로 90도 회전시킨 배열을 리턴 
    // 가로 세로 길이가 모두 같다.
    // 각 0번째 요소들을 모은 배열을 0번쨰 요소배열로 넣는다. 
    // 각 1번째 요소들을 모은 배열을 1번째 요소배열로 넣는다. 
    // 반복
    if (matrix.length === 0) {
      return [];
    }
    let result = [];
    let count = 0;
    let idx = 0
    if (num % 4 === 0) return matrix;
  
    while (count < matrix[0].length) {
      let arrEl = [];
      for (let i = 0; i < matrix[0].length; i++) {
        if (arrEl.length < matrix.length) {
          arrEl.push(matrix[i][idx])
        }
      }
      result.push(arrEl.reverse())
      count++
      idx++
    }
    return result;
  };