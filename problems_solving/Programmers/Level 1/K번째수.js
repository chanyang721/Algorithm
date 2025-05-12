function solution(array, commands) {
  var answer = [];
  // 3개의 길이 i j k를 요소로 하는 배열 commands //
  // 순서대로 array에 적용한 결과값을 요소로하는 배열을 리턴
  // 같은 행동을 반복한다.
  // array.slice(commands[0] - 1, commands[1])
  for (let i = 0; i < 3; i++) {
    const result = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];

    answer.push(result);
  }
  return answer;
}
