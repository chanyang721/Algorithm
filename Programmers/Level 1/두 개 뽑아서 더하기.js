function solution(numbers) {
    // 정수 배열 numbers에서 서로 다른 인덱스의 두 수를 더해서 만들 수 있는 모든 수를 오름차순으로 정렬한 배열을 리턴
    // 오름차순 정렬 
    // 두개를 뽑아서 만들 수 있는 경우의 수 
    // 반복문 2개
    let sumArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumArr.push(numbers[i] + numbers[j]);
        }
    }
    let sortResult = sumArr.sort((a, b) => a - b);
    let deleteDuplicNum = new Set(sortResult)
    let result = [ ...deleteDuplicNum ];
    
    return result;
}