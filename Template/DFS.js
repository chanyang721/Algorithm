function solution(numbers, target) {
    var answer = 0;
    
    const Dfs = (numbers, sum, depth, target) => {
        if (depth === numbers.length - 1) {
            if (sum === target) answer++;
            return;
        }
        
        Dfs(numbers, sum + numbers[depth + 1], depth + 1, target)
        Dfs(numbers, sum - numbers[depth + 1], depth + 1, target)
    }
    
    Dfs(numbers, numbers[0], 0, target)
    Dfs(numbers, -numbers[0], 0, target)
    
    return answer;
}