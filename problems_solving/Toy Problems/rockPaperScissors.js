const rockPaperScissors = function (rounds) {
  // TODO: 여기에 코드를 작성합니다.
  // 세번의 선택으로 가능한 모든 경우의 수를 구하는 함수 작성 => 순열
  // 입력 없음 => 만들어서 사용
  // 출력 => 가중치 적용한 2차원 배열 [[가위, 바위, 보], [...], [], ] 
  //    중복 가능 .. 가위 가위 가위 .. => 반복문안의 재귀? 
  //      3번의 선택의 경우의 수 => 111, 112, 113, 121, 122, 123 ... 
  // 요소배열의 길이는 무조건 3
  // 가중치 적용 정렬 => 'rock', 'paper', 'scissors' 순서로 정렬 => 멱집합 ?
  //// 복잡도 = 2^n ? //// 
  //// 수도코드 //// 
  // 1. 세번 선택으로 가능한 모든 경우의 수를 구한다. 
  // 베이스 배열 선언 const arr = ['rock', 'paper', 'scissors'] => 가중치순서대로
  // 결과배열 선언 const result = []
  // 요소 배열 선언 const arrEl = []
  // 재귀 함수 선언 const recursive = (arrEl, length) => {}
  //// base ////
  // 길이가 3보다 크다면 결과배열에 push(arrEl)
  //// recursive //// 
  // for => 베이스 배열의 요소arr[i]들을 하나씩 집는다.
  //    재귀 recursive(arrEl.push(arr[i]), length + 1)
  const arr = ['rock', 'paper', 'scissors'];
  const result = [];
  rounds = rounds || 3;
  // 라운드를 제한하는 방법으로 ||연산자를 사용했다. 
  // 탈출 조건으로 라운드를 제한(|| length > 5)하면 
  // 3판인 경우인 테스트 케이스를 통과하지 못한다. ?? 

  const recursive = (arrEl, length) => {
    if (length === rounds) {
      result.push(arrEl);
    } else {
      // for (let i = 0; i < arr.length; i += 1) {
        arr.forEach(function(el) {
          recursive(arrEl.concat(el), length + 1);
        })
      }
    }
  recursive([], 0);
  return result;
};