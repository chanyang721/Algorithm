function solution(a, b, c) {
    var answer = 1;
    const inputArr = [a, b, c]
    const uniqueArr = [...new Set(inputArr)]
            
    const col = (arr, n) => {
        const [a,b,c] = arr;
        for (let i = 1; i <= n; i++) {
            answer *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i)
        }
        return answer
    }
    
    switch (uniqueArr.length) {
        case 1: return col(inputArr, 3)
        case 2: return col(inputArr, 2)
        case 3: return col(inputArr, 1)
    }
    
    return answer;
}