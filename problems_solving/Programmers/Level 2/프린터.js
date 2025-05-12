// 다른 사람 풀이 참조 // 
function solution(priorities, location) {
    let stack = [];
    let Q = priorities;
    let enQ = (n) => Q.push(n);
    let deQ = () => Q.shift();
    
    while(location >= 0) {
        let max = Math.max(...Q);
        
        if (Q[0] !== max) {
            Q.push(deQ());
            if (location === 0) location = Q.length - 1;
            else location -= 1;
        }
        else {
            stack.push(deQ());
            location -= 1;
        }
    }
    
    return stack.length;
}