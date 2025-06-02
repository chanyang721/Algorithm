function solution(arr) {
    // arr = [0,1 ~ ]
    // stk = []
    // i = 0, if i < arr.length ? 
    // if(stk.length === 0) ? stk.push(arr[i] + 1)
    // else if (stk.length !== 0) && stk[stk.length - 1] === arr[i] ? stk.pop() i++
    // else if (stk.length !== 0) && stk[skt.lengtth - 1] !== arr[i] stk.push(arr[i] + 1)
    let stk = [];
    for (let i = 0; i < arr.length; i++) {
        let stkLen = stk.length;
        if (stkLen === 0) {
            stk.push(arr[i])
        }
        else if (stkLen !== 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop()
        }
        else if (stkLen !== 0 && stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i])
        }
    }
    return stk.length === 0 ? [-1] : stk;
}