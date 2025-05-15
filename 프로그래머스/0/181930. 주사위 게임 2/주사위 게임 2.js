function solution(a, b, c) {
    var answer = 0;
    const uniqueArr = [...new Set([a, b, c])]
    
    if(uniqueArr.length === 3) {
        answer = a + b + c
    } else if (uniqueArr.length === 2) {
        answer = (a + b + c) * (a**2 + b**2 + c**2)
    } else if (uniqueArr.length === 1) {
        answer = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }
    
    return answer;
}