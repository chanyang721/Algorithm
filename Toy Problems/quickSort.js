const quickSort = function (arr, callback = num => num) {
    // TODO: 여기에 코드를 작성합니다.
    // 정수배열을 오름차순으로 정렬하여 리턴 -> sort 금지
    // 퀵정렬 : 하나의 기준이 되는 수를 잡고 그 수보다 작으면 왼쪽, 크면 오른쪽에 배치한다.
    //        작은 & 큰쪽의 첫번째 요소를 기준으로 다시 작은 & 큰쪽을 구분한다.
    //        위의 과정을 반복하여 배열을 정렬한다. 
    //// 수도 코드 // 
    // 작은smallArr, 큰bigArr 수들을 담을 배열을 선언
    //// bare //// 
    // if => arr.length === 0이면 return;
    // let midArr = [arr.shift()]
    // for => 0부터 길이만큼 1씩증가 
    //   if => midNum > arr[i]이면, smallArr.push(arr[i])
    //   else => bigArr.push(arr[i])
    // recur //
    // quickSort(smallArr, callback)
    // quickSort(bigArr, callback)
    // return smallArr.connat(midArr, bigArr)
    let smallArr = [];
    let bigArr = [];
    let mid = arr[0]
    if (arr.length <= 1) {
      return arr;
    }
    for (let i = 1; i < arr.length; i++) {
      if (callback(mid) > callback(arr[i])) {
        smallArr.push(arr[i])
      }
      else {
        bigArr.push(arr[i])
      }
    }
    let small = quickSort(smallArr)
    let big = quickSort(bigArr)
  
    return [...small, mid, ...big]
  };