function solution(arr) {
    // 압축 결과에서 0과 1의 수가 순서대로 담긴 배열을 리턴
    // 결과를 저장할 변수 result = [0, 0];
    // arr의 요소 배열의 요소가 모두 같은 값인지 확인한다.
    // 값이 모두 같다면, 해당 값으로 압축한다.
    // 값이 같지 않다면, 정사각형을 4등분하여 모든 값이 같은지 확인한다.
    // 위의 작업을 반복하여, 요소 배열의 요소가 1이 되면 요소 배열의 요소를 리턴한다.
    let result = [0, 0];
    
    const aux = (rs, re, cs, ce, arr) => {
        // base // 
        if (rs === re) return result[arr[rs][cs]]++; // 요소가 1개인 경우
        
        let allSame = true; 
        for (let i = rs; i <= re; i++) {
            for (let j = cs; j <= ce; j++) {
                if (arr[rs][cs] !== arr[i][j]) {
                    allSame = false;
                    break;
                }
            }
            if (allSame === false) break;
        }

        // recur // 
        if (allSame) return result[arr[rs][cs]]++; // 압축이 되는 경우
        else {                                     // 압축이 안되는 경우 4분할 재귀 
            const midRow = Math.floor((rs + re) / 2);
            const midCol = Math.floor((cs + ce) / 2);
            aux(rs, midRow, cs, midCol, arr);
            aux(rs, midRow, midCol + 1, ce, arr);
            aux(midRow + 1, re, cs, midCol, arr);
            aux(midRow + 1, re, midCol + 1, ce, arr);
        }
    }
    
    aux(0, arr.length - 1, 0, arr[0].length - 1, arr)
    
    return result;
}