function solution(order) {
    // 3,6,9 -> 박수
    // order.toString.split("").map(num => num % 3 === 0 ? answer++ : null)
    var answer = 0;
    order.toString().split("").map(num => +num % 3 === 0 && +num !== 0 ? answer++ : num)
    
    return answer;
}