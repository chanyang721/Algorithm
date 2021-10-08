const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    // 오름차순 배열 arr & 정수 target입력받아 arr[index] === target의 index를 리턴
    // 이진탐색 알고리즘(O(logN))을 사용
    // target이 없는 경우, -1을 리턴 => indexOf
    // 복잡도 : O(logN) // 
    // 수도 코드 // 
    // 범위를 반씩 줄여나가는 방법을 사용한다.
    // 최대값과 최소값을 선언한다. 
    // target과 중간값을 비교한다. 
    // if => target === mid, 
    // if target이 크다면, 최소값에 중간값을 할당하고 다시 중간값을 구한다. 
    // target이 작다면, 최대값을 중간값으로 할당하고 다시 중간값을 구한다.
    let max = arr.length - 1;
    let mid;
    let min = 0;
  
    while (min <= max) {
      mid = parseInt((max + min) / 2)
      if (target === arr[mid]) {
        return mid;
      }
      if (target < arr[mid]) { // target > arr[mid] , true;
        max = mid - 1;
      } else { // target < arr[mid]
        min = mid + 1;
      }
    }
    return -1;
  };