function solution(arr, divisor) {
    // arr의 자연수 요소 중 자연수인 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
    // 하나도 없다면 [-1] 리턴
    // 인덱스값이 다르면 요소의값도 다르다.
    // arr는 길이가 1 이상이다. 
    // 오름차순으로 정렬 
    // filter 
    // 없으면 [-1]리턴
    let result = arr
        .sort((a, b) => a - b)
        .filter(el => el % divisor === 0)
    
    return result.length === 0 ? [-1] : result;
}