function solution(arr) {
    // 정수요소를 가진 arr의 가장 작은수를 제거한 배열을 리턴
    // 빈배열인 경우 -1을 요소로 한 배열을 리턴
    if (arr.length === 1) {
        return [-1]
    }
    let min = arr[0];
    let minidx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i]
            minidx = i;
        }
    }
    
    arr[minidx] = "min";
    let result = arr.filter(el => el !== "min");
    return result;
}