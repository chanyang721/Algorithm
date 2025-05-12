function solution(s) {
    // 0, 1로 이루어진 문자열 x
    // 모든 0을 제거한다.
    // 제거된 x의 길이인 c를 이진법으로 표현한 문자열로 변경한다.
    // x가 "1"이 될때까지 반복하는 경우, 이진 변혼의 횟수와 제거된 0의 개수를 [ 변환횟수, 제거된 0의 수 ];
    let count = 0;
    let change = 0;
    
    while (s !== "1") {
        count += s.split("").filter(el => el === "0").length;
        s = s.split("").filter(el => el === "1").length.toString(2);
        change++; 
    }
    
    return [ change, count ];
}