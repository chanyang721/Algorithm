function solution(a, b) {
    // a, b 사이의 모든 정수의 합을 리턴
    // a, b의 대소관계는 모름 
    // -10,000,000 이상 10,000,000 이하인 정수
    // a, b가 같으면 둘 중 하나를 리턴
    // 등차수열의 합
    let result = (Math.abs(a - b) + 1) * (a + b) / 2;
    
    return result; 
}