function solution(n, t, m, p) {
    // 0부터 ~ t의 문자열의 길이를 충족할때까지
    // n의 진법으로 base 문자열을 만든다.
    // t의 길이가 같을때까지 문자열을 저장 할 result 선언
    // m의 간격으로 나열된 문자열을 result에 넣는다.
    let base = "";
    for (let num = 0; num < 100000; num++) {
        let el = num.toString(n).toUpperCase();
        base += el;
    }
    
    let result = "";
    let idx = p - 1;
    while(result.length < t) {
        result += base[idx];
        idx += m;
    }
    
    return result;
}