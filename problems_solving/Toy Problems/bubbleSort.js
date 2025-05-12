const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 정수를 요소로 하는 배열 arr을 오름차순으로 정렬하여 리턴 -> 버블 정렬
    // arr.sort 사용은 금지
    // 조건1. 첫번째 요소가 두번째 요소보다 크면, 두 요소의 위치를 바꾼다.
    // 조건2. 두번째 요소가 세번째 요소보다 크면, 두 요소의 위치를 바꾼다.
    // 조건3. 1, 2를 반복하여 배열의 마지막 요소까지 비교한다. 
    // 조건4. 1 ~ 3을 한번하면 가장 큰 요소가 배열의 마지막으로 밀려난다.
    // 조건5. 이런 1~3을 첫 요소부터 다시 반복하여 두번째 큰 요소를 마지막 전으로 민다. -> 재귀 
    //// 복잡도: n^2 ? //// -> 반복 1번 당 요소 1개 정렬 
    //// 수도 코드 //// 
    // 앞, 뒤 두개의 요소만 비교
    // 앞이 뒤보다 크다면 위치를 변경,
    // 앞이 뒤보다 작다면 상태 유지하고 뒤와 뒤뒤를 비교한다.
    //// base ////
    // memo의 길이 === arr의 길이
    //// recursive ////
    // 뒤요소를 저장할 변수를 선언 let save; 
    // for -> 0부터 length까지 1씩 증가 
    //   if -> arr[i] > arr[i+1]이면, 
    //         save = arr[i+1], arr[i+1] = arr[i], arr[i] = save;
    //   else -> 안바꿈
    // 마지막 요소가 가장 큰 요소가 되었기 때문에, memo.unshift(arr.pop());
    // recursive(arr, memo) 재귀 호출
    // return memo;
    let save;
    
    for (let i = 0; i < arr.length; i += 1) {
      let count = 0;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          save = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = save;
          count++;
        }
      }
      if (count === 0) {
        break;
      }
    }
    return arr;
  };