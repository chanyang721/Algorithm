function solution(n) {
    // n을 연속한 자연수로 표현하는 방법의 개수를 리턴
    // n보다 작은 연속된 자연수를 더해서 n을 만드는 경우의 수
    // let count = 0;
    // for i => 1부터 n까지 반복문
    //   if (i === n) count++
    //   let sum = i;
    //   for j => i + 1부터 n까지 반복문;
    //     if (sum + j > n)이면 break;
    //     if (sum + j === n)이면 count++;
    //     if (sum + j < n)이면 sum += j;
    let count = 0;
    for (let num = 1; num <= n; num += 1) {
        if (num === n) count++;
        let sum = num;
        for (let addNum = num + 1; addNum <= n; addNum += 1) {
            if (sum + addNum > n) break;
            if (sum + addNum === n) count++;
            if (sum + addNum < n) sum += addNum;
        }
    }
    return count;
}