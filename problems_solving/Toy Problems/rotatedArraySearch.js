const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    // 부분적으로 오름차순 정렬된 정수 배열 rotated와 정수 target를 입력받아 target의 인덱스를 리턴
    // O(logN))을 탐구
    // 
    // 제일 작은 수의 인덱스를 찾아 그전 인덱스까지 요소를 뒤에 붙여 정렬한다. 
    // 제일 작은 수와 target의 인덱스를 찾는다. 
    // 배열의 정렬 
    // 정렬된 배열에서 target까지 중간값을 기준으로 절반씩 범위를 줄여가면서 접근한다.
    // 첫번째 요소를 집는다. head 
    // head보다 작은 요소가 나오는 인덱스를 저장한다. 
    // 인덱스까지 자른다. slice(0, index)
    // rotated뒤에 붙인다.
    // min = 0, mid, max = rotated.length 선언
    // while => (min < max) 
    // 
    let head = rotated[0];
    let minIdx;
    for (let i = 0; i < rotated.length; i++) {
      if (rotated[i] > head) {
        minIdx = i
        break;
      } else {
        minIdx = 0;
      }
    }
    rotated = [...rotated.slice(minIdx), ...rotated.slice(0, minIdx)];
  
    let min = 0;
    let mid;
    let max = rotated.length - 1;
    
    while(min <= max) {
      mid = parseInt((max + min) / 2)
      if (target === rotated[mid]) {
        return mid + minIdx
      }
  
      if (target < rotated[mid]) {
        max = mid - 1
      } else {
        min = mid + 1
      }
    }
    return -1
  };