function solution(a, b) {
    var answer = "";
    const w = "" + a + b
    const e = "" + b + a
    
    if(w > e) answer = +w;
    else if (e > w) answer = +e;
    else if (w == e) answer = +w;
    
    return answer;
}