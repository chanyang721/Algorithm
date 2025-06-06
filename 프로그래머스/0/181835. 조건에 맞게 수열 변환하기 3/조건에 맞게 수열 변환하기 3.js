function solution(arr, k) {
    // 홀*k 짝+k
    // arr.map(el => {isOdd ? *k : +k })
    let isOdd = k % 2 === 1
    var answer = arr.map(el => {
        if (isOdd) {
          el = el * k;  
        } 
        else if (!isOdd) {
          el = el + k;  
        } 
        return el;
    })
    return answer;
}