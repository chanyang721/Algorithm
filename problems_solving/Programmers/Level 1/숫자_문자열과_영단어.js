// 객체 사용 풀이 방법
function solution(s) {
  // 숫자 중 일부를 영단어로 바꾼 문자열을 원래 숫자만 있는 문자열로 바꾸는 게임
  // 입력값 s로 문자열이 주어지고 s가 의미하는 원래 숫자 문자열을 리턴
  // 조건 => 0으로 시작하는 경우는 없다.
  //     => s의 길이는 1 ~ 50
  //     => 1 이상 2,000,000,000 이하의 정수가 되는 s만 주어진다.
  // 정답값은 같지만 입력값이 다른 경우도 있다.
  // 영단어가 없는 경우 예외 처리한다. Number(s) !== NaN이면, return s;
  // 1:1 대칭되는 객체를 만든다. const root = {  }
  // 영단어 별로 끊은 배열을 만든다??
  // 숫자 or 영단어 => 단어별로 끊어서 읽어야 한다.
  // 매칭되는 수를 치환한 결과값을 만든다.
  // Number(el) !== NaN 이면 숫자를 넣는다.
  //            === NaN 이면 만든 문자열로 만들 바구니에 넣는다.
  //                바구니 문자가 root(basket)값이 존재하면 결과 문자열에 넣고 바구니를 ''로 바꾼다.
  //                바구니 문자가 root(basket)값이 존재하지 않는다면 다음 문자열로 넘어간다.
  if (!isNaN(s)) {
    return Number(s);
  }
  let root = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let result = "";
  let basket = "";
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (!isNaN(sArr[i])) {
      result += sArr[i];
    } else {
      basket += sArr[i];

      if (root[basket]) {
        result += root[basket];
        basket = "";
      }
    }
  }
  return Number(result);
}

// 다른 사람의 배열 사용 풀이 방법
function solution(s) {
  let answer = s;
  let root = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < root.length; i++) {
    let result = answer.split(root[i]);
    answer = result.join(i);
  }
  return Number(answer);
}

// 정규 표현식 사용 풀이
function solution(s) {
  let result = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);

  return Number(result);
}
