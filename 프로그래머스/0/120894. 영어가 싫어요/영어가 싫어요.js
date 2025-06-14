function solution(numbers) {
    // "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" -> nunbmers
    // const enNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    const map = new Map()
    const enNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < enNum.length; i++) {
        map.set(enNum[i], i)
    }
    
    var answer = '';
    let strNum = '';
    for (let i = 0; i <= numbers.length; i++) {
        if (map.has(strNum)) {
            answer += map.get(strNum);
            strNum = numbers[i]
        } else {
            strNum += numbers[i]
        }
    }
    
    return +answer;
}