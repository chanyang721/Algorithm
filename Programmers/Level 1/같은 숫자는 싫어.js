function solution(arr) {
    // 0 ~ 9를 요소로 하는 배열 arr
    // 연속된 숫자는 하나만 남기고 제거해야한다.
    // 같으면 제외 다르면 추가
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) continue;
        result.push(arr[i]);
    }
        
    return result;
}