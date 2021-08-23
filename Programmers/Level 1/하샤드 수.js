function solution(x) {
    // 하샤드 수 => 양의정수 x의 각 자리수의 합으로 x가 나누어 떨어지는 수 
    // x가 하샤드 수인지 판별하는 함수 작성
    let result = false;
    let sum = String(x)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
    
    if (x % sum === 0) {
        result = true;
    }
    return result;
}