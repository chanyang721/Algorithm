function solution(s) {
    // s의 가운데 글자를 리터 
    // 홀수인 경우 Math.floor(a.length / 2) 인덱스값
    // 짝수인 경우 + -1 인덱스값 + Math.floor(a.length / 2) 인덱스값  => 2글자 리턴
    let result = "";
    let mid = Math.floor(s.length / 2);
    
    if (s.length % 2 === 0) result = s[mid - 1] + s[mid];
    else result = s[mid];
    
    return result;
}