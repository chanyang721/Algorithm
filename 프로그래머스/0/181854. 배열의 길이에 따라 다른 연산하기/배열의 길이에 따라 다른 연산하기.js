function solution(arr, n) {
    // arr.len % 2 === 1 ? arr[i%2===0] += n
    // arr.len % 2 === 0 ? arr[i%2===1] += n
    // let len = arr.length
    // let isOdd = len % 2 === 1, isEven = len % 2 === 0
    // 
    // if (isOdd) arr.forEach((el, idx) => if (idx % 2 === 1) el+=n)
    // else if (isEven) arr.forEach((el, idx) => if (idx % 2 === 0) el+=n)
    let len = arr.length;
    let isOdd = len % 2 === 1;
    
    var answer = arr.map((el, idx) => {
        if (isOdd && (idx % 2 === 0)) el += n;
        else if (!isOdd && (idx % 2 === 1)) el += n;
        return el
    })
    
    return answer;
}