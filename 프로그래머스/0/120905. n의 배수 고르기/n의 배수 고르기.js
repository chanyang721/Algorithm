function solution(n, numlist) {
    // filter el % n === 0 
    var answer = numlist.filter(num => num % n === 0);
    return answer;
}