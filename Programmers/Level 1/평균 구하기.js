function solution(arr) {
    // 요소의 평균값을 리턴
    let result = arr.reduce((acc, cur) => acc + cur) / arr.length;
    return result;
}