function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    let result = [];
    
    result[0] = answers.filter((el, idx) => el === patterns[0][idx%5]).length;
    result[1] = answers.filter((el, idx) => el === patterns[1][idx%8]).length;
    result[2] = answers.filter((el, idx) => el === patterns[2][idx%10]).length;

    let max = Math.max(...result)
    
    for (let i = 0; i < 3; i++) {
        if (result[i] === max) {
            result[i] = i + 1
        } else {
            result [i] = 0;
        }
    }
    
    result = result.filter(el => el !== 0)
    
    return result
}