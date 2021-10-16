const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    // 빈문자열인 경우 true리턴
    // 문자열에서 괄호의 쌍이 맞다면 true, 아니면 false;  
    // 괄호는 반드시 열리고 닫히는 쌍으로 이루어져야한다. }{ 은 쌍이 아님
    // str = '()'
    // 수도 코드 //
    // Q를 선언한다. 
    // enQ = (n) => Q.push(n)
    // deQ = () => Q.shift()
    // split('') => str의 각 letter을 요소로 하는 배열letterArr 생성 
    // for => 0부터 letterArr.length; ++;
    //   if => letterArr[i] === "(" || "{" || "["이면, enQ(letterArr[i])
    //   else => letterArr[i] === ")" || "}" || "]" deQ();
    // 반복을 끝냈을때 Q의 길이가 1이상이면 false, 0이면 true 
    // 다른 종류의 문자열을 넣는 다른 Q를 만들어 같이 적용한다.
    const Q = [];
    enQ = (n) => Q.push(n);
    deQ = () => Q.shift();
    const opener = "({["
    const closer = ")}]"
  
    if (str.length % 2 === 1) {
      return false;
    }
  
    const letterArr = str.split('');
  
      for (let i = 0; i < letterArr.length; i++) {
        if (opener.includes(letterArr[i])) {
          enQ(letterArr[i]);
        }
        else {
          deQ();
        }
      }
  
    return Q.length === 0
  };