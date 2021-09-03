function solution(s){
    // 괄호의 쌍이 올바르게 열고 닫히는지 확인
    // 열리는 괄호 없이 닫히는 괄호가 먼저오면 올바른 괄호가 아니다. 
    // "(" ")" 으로 이루어진 s 입력
    // 두개의 수는 같아야 한다. => 길이가 짝수여야 한다. 
    // 열리는 괄호 후에 닫히는 괄호가 나와야 한다.
    // stack사용
    let stack = [];
    let result = true;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(")  {
            stack.push(s[i]);
            continue;
        }
        if (s[i] === ")") {
            let check = stack.pop();
            if (check) continue;
            else {
                result = false;
                return result
            }
        }
    }
    if (stack.length > 0) result = false;
    
    return result;
}