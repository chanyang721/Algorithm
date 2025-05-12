function solution(n, arr1, arr2) {
    // 길이가 n인 정사각형 배열로 자연수로 이루어진 배열 두개가 입력
    // 두 개의 배열의 [row][col]이 모두 "1"이면 완성된 지도의 [row][col]도 "1"
    // 둘중 하나라도 "1"이 아니면 완성된 지도의 [row][col]은 "0"이다.
    // 완성된 지도를 리턴해라
    // 각 요소의 자연수를 이진법으로 변환한 길이가 n이하인 이진법수로 한다. 
    // 길이가 n이하이면 제일 앞에 0으로 채운다.
    // 두개의 배열을 2진법으로 변환하고 길이가 n보다 작은 값들은 앞에 0을 채운다.
    // 완성된 지도를 만들 결과result = [] 선언
    // for row -> row = 0부터 n까지 1씩 증가
    //   for col => col = 0부터 n까지 1씩 증가
    //     let mapEl = "";
    //     if => arr1[row][col] === "1" && arr2[row][col] === "1",
    //        mapEl += "#"
    //     else => mapEl += " ";
    const transferArr = (arr, n) => {
        let transfered = arr.map(el => {
            el = el.toString(2);
            let L = el.length;
            if (L < n) {
                let add = "0".repeat(n - L);
                el = add + el; 
            };
            return el;
        })
        return transfered
    }

    let arrOne = transferArr(arr1, n);
    let arrTwo = transferArr(arr2, n);

    let result = [];
    for (let row = 0; row < n; row++) {
        let mapEl = "";
        for (let col = 0; col < n; col++) {
            if (arrOne[row][col] === "1" || arrTwo[row][col] === "1") {
                mapEl += "#";
            }
            else {
                mapEl += " ";
            }   
        }
        result.push(mapEl);
    }
    
    return result;
}