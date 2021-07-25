function solution(new_id) {
  // 규칙에 맞지 않은 아이디 입력 시, 입력된 아이디와 유사하면서 규칙을 적용한 아이디 추천
  // 규칙 1 => 아이디 길이 3 이상 ~ 15 이하
  // 규칙 2 => 소문자, 숫자, 빼기, 밑줄, 마친표 문자만 사용 가능
  // 규칙 3 => 마침표는 처음과 끝에 사용 불가능, 연속으로 사용 불가능
  // 7단계의 처리과정을 거친 후 추천아이디를 리턴하는 함수를 만든다.
  // ...!@bat#*..y.abcdefghijklm => "bat.y.abcdefghi"
  const recommendId = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  if (recommendId.length <= 2) {
    recommendId.padEnd("3", recommendId[recommendId.length - 1]);
  }

  return recommendId.padEnd("3", recommendId[recommendId.length - 1]);
}
