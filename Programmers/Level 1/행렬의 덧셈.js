function solution(arr1, arr2) {
    // 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 된다.
    // [[1,2],[2,3]] + [[3,4],[5,6]] = [[4,6],[7,9]]
    // let row, col
    let L = arr1.length;
    let N = arr1[0].length;
    let result = [];
    for (let row = 0; row < L; row++) {
        let elArr = [];
        for (let col = 0; col < N; col++) {
            let sum = arr1[row][col] + arr2[row][col];
            elArr.push(sum);
        }
        result.push(elArr);
    }
    
    return result;
}