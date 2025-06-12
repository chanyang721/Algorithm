function solution(A, B) {
    // cnt = 0
    // for A i = 0 -> len
    //      let last = A.split("").pop()
    //      A.push(last)
    //      if (A.join("") !== B) cnt++
    //     
    if (A === B) return 0;
    
    let cnt = 0;
    const arrA = A.split("")
    
    for (let i = 0; i < arrA.length; i++) {
        let last = arrA.pop();
        arrA.unshift(last)
        console.log(arrA.join(""), B)
        if (arrA.join("") === B) {
            cnt++;
            break
        } else if (arrA.join("") !== B) {
            cnt++;
        }
    }
    
    var answer = cnt > 0 && cnt !== arrA.length ? cnt : -1;
    return answer
}