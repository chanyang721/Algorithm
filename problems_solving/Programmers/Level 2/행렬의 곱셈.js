function solution(arr1, arr2) {
    // 행렬을 곱합 결과 행렬을 리턴
    // arr2의 열을 요소로 하는 배열을 만든다. 
    // arr1의 요소를 반복문으로 돌면서 arr2의 요소를 반복하여 곱한 값의 합을 리턴
    
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let el = [];   
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) { 
                sum += arr1[i][k] * arr2[k][j];
            }
            el.push(sum)
        }
        result.push(el)
    }
    
    return result;
}