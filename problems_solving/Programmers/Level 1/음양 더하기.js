function solution(absolutes, signs) {
    // 정수와 정수의 양수 음수가 표기된 signs 배열이 주어진다. 
    // 두 배열의 길이는 같다. 
    // 두 배열은 1000이하의 길이이다.
    // let result = 0;
    // for i => absolutes의 길이만큼 1씩 증가한다.
    //  if => signs[i]가 false이면, absolutes[i] = "-" + absolutes[i];
    //  result += Number(absolutes[i]);
    let result = 0; 
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) absolutes[i] = `-${absolutes[i]}`;
        result += Number(absolutes[i]);
    }
    return result;
}