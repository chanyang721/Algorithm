function solution(n) {
    // for i = 1 -> len
    //      answer *= i
    //      if (answer <= n) return i 

    let num = 1, idx = 1;
    
    while(true) {
        num *= idx;
        if (num > n) break
        idx++
    }
    
    return idx - 1;
}