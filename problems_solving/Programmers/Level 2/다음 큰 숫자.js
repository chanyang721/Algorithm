function solution(n) {
    // 자연수 n 다음 큰 숫자를 조건에 맞게 리턴
    // 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수
    // 조건 2. n의 다음 큰 숫자와 n을 2진수 변환 시 1의 갯수가 같아야 한다.  
    // 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수이다.
    // const N = n.toString(2);
    // const countOne = String(N).split("").filter(el => el === 1).length;
    // let result = 0;
    // for i => n + 1부터 MAX.Number까지 1씩 증가
    //   2진수 let next = i.toString(2);
    //        let count = String(next).split("").filter(el => el === 1).length;
    //        if (countOne === count) result = i, break
    const N = n.toString(2);
    const countOne = N.split("").filter(el => el === "1").length;
    let result = 0;
    
    for (let i = n + 1; i < i * 10; i++) {
        let next = i.toString(2);
        let count = String(next).split("").filter(el => el === "1").length;
        if (countOne === count) {
            result = i;
            break;
        }
    }
    
    return result;
}