function solution(arr) {
    // i=0, if i < arr.len ? 
    //          stk.len === 0 ? stk.push(arr[i]), i++
    //          stk.len !== 0 & stk[stk.len - 1] < arr[i] ? stk.push(arr[i]), i++
    //          stk.len !== 0 & stk[stk.len - 1] >= arr[i] ? stk.pop()
    var stk = [];
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i])
        }
        else if (stk.length !== 0 && stk[stk.length-1] < arr[i]) {
            stk.push(arr[i])
        }
        else if (stk.length !== 0 && stk[stk.length-1] >= arr[i]) { 
            stk.pop()
            i--
        }
    }
    return stk;
}