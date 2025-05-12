function solution(numbers, target) {
    // DFS로 모든 경우의 수를 탐색 후 target과 sum의 값이 같다면 answer++
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