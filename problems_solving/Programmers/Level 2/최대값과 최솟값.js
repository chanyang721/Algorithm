function solution(s) {
    // 공백으로 구된 숫자들이 저장된 문자열 s
    // s의 숫자 중 최소값과 최대값을 "최소값 최대값"으로 리턴
    // split(" ")
    // Math.max(...) / min(...)
    let S = s.split(" ");
    let result = `${Math.min(...S)} ${Math.max(...S)}`;
    
    return result;
}