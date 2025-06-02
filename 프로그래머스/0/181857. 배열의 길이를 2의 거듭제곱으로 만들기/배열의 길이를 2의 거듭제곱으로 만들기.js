function solution(arr) {
    // Math.sqrs(arr.length) % 2 !== 0 ? arr.push(0)
    // 1. arr.length와 가장 가까운 2의 정수 거듭제곱 수 -> 2진수
    // let cur = arr.length.toString(2)
    // let next = Math.ceil(+cur).toString();
    // diff = next.length - cur.length;
    // answer = arr.concat(new Array(diff).fill(0))
    function isPowerOfTwo (n) {
        return n > 0 && (n & (n-1)) === 0
    }
    let len = arr.length;
    let diff = 0;
    
    if (!isPowerOfTwo(len)) {
        let cur = len.toString(2);
        let next = [1].concat(new Array(cur.length).fill(0)).join("")
        const nextInt = parseInt(next, 2)           
        diff = nextInt - len
    }
    
    var answer = arr.concat(new Array(diff).fill(0));
    return answer;
}