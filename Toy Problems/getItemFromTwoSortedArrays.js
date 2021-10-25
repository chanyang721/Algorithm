const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // TODO: 여기에 코드를 작성합니다.
    // 두개의 정렬된 배열을 합쳤을 경우 k - 1번째 인덱스의 값은 ?
    // 이진 탐색 사용 -> 중간값을 비교하여 범위를 절반씩 줄여간다. 
    // 두개의 배열의 요소 중 k번째로 큰 숫자를 리턴한다.
    // mid값과 크기 비교 할 기준을 잡아야 한다. 
    // 1. 두개의 배열을 합쳐서 k - 1번째 인덱스 값을 리턴 O(n)
    // 2. 중간값을 찾아서 범위를 절반씩 줄이면서 찾는다.
    let idx1 = 0;
    let mid = 0;
    let idx2 = 0;
    let result;
    while(mid < k) {
      mid++
      if (arr1[idx1] < arr2[idx2]) {
        result = arr1[idx1]
        idx1++
      } 
      else {
        result = arr2[idx2]
        idx2++
      }
    }
    return result;
  };