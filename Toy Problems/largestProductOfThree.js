const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 정수(양 0 음)를 요소로 하는 배열 arr을 입력
    // 3개의 요소를 곱해서 나오는 최대값을 리턴한다. => 조합
    // 3개의 요소를 뽑는 모든 경우의 수를 구하여, 하나의 배열에 담는다. 
    // 담은 경우의수 요소배열 map으로 요소의 곱으로 변경하고 sort로 가장 큰 수를 뒤로 보낸다.
    // pop()으로 가장 큰 수를 뺀다. 
    //// 복잡도: 자유 ////
    //.. 수도 코드 ..// 
    // 3개의 순서와 상관없이 중복되지 않은 카드를 3장 뽑는 요소배열 만들기
    // 요소배열을 결과배열에 순서대로 담는다.
    // for i => 0부터 length까지, 한장을 집는다. 
    //   for j => 1부터 length까지, 한장을 집는다. 
    //     for k => 2부터 length까지, 한장씩 집는다. 
    //       result.push([arr[i], arr[j], arr[k]])
    // result 배열에 모든 경우의 수가 담긴다. 
    //   map => reduce => 요소배열의 곱으로 변경
    // 결과를 sort -> pop()
  ///////////////// 내풀이 ///////////////////
    let permutation = [];
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1) {
        for (let k = j + 1; k < arr.length; k += 1) {
          permutation.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
    let result = permutation.map(el => {
      return el.reduce((acc, cur) => {
        return acc * cur;
      })
    })
    .sort((a, b) => a - b)
    .pop();
    return result;
  
  ////////////////// 레퍼런스 참고 /////////////////
  // 양수 => 가장 큰 수를 제외한 가장 큰 2개의 수 총 3개를 곱한 값
  // 음수 => 가장 작은 음수 2개 * 가장 큰 수를 곱한 값 
  // 이 둘 중 큰 수를 리턴
  arr.sort((a, b) => a - b)
  let L = arr.length
  let posNum = arr[L - 3] * arr[L - 2] * arr[L - 1];
  let negNum = arr[0] * arr[1] * arr[L - 1];
  return Math.max(posNum, negNum)
  };