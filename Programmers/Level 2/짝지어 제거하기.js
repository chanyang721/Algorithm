function solution(s) {
    // 소문자 문자열 s에서 같은 값이 2개 붙은 짝을 찾는다. 
    // 위 과정을 짝을 모두 제거할때까지 반복
    // 길이가 홀수인 경우 무조건 0 리턴
    // 제거한 후 짝이 아닌 문자열이 남은 경우 0, 모두 제거하면 1 리턴
    // 같은 문자가 들어오면 stack에서 제거 
    const stack = [];
    if (s.length % 2 !== 0) return 0;
    
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }
 
    return stack.length > 0 ? 0 : 1;
}