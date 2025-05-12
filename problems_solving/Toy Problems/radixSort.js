function radixSort(arr) {
    // todo: 여기에 코드를 작성합니다.
    // 정수를 요소로하는 배열 arr 오름차순으로 기수 정렬하여 리턴
    // LSD 기수 정렬 -> 1의 자리수를 기준으로  0 ~ 9 까지의 박스에 넣고 0부터 순서대로 빼내온다. 
    //                2의 자리수를 기준으로 다시 0 ~ 9 까지의 박스에 넣고 뺸다.
    //                .. 마지막 자리수까지 반복
    //// 수도 코드 //// 
    // 0 ~ 9의 인덱스를 갖는 요소 배열을 만든다. [[], [], [], [] ...] // Array(10).fill([])
    // 결과 배열을 만든다. result
    // arr의 정수요소들의 1의 자리수와 같은 인덱스의 박스에 넣는다.
    // 0번 박스부터 9번 박스까지 입력된 순서대로 넣고, result 배열에 0번박스부터 0번에 입력된 순서대로 넣는다. 
    // 가장 큰 수의 자리수만큼 반복되면 결과값을 반환한다. 
    const box = Array(10).fill([])
    const result = [];
    const max = String(Math.max(...arr)).length
    const strArr = arr.map(el => String(el))
    const digit = 1;
    const count = 0;
    while(count < max) {
      const recur = (array) => {
        for (let i = 0; i < array.length; i++) {
          if (array[i][array[i].length - digit] === box[digit]) {
            box[digit].push(array[i])
          }
        }
      }
      recur(strArr)
      digit++
      count++
    }
    return result;
  }