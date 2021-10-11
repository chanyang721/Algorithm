function solution(numbers) {
    // f(x) => x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
    // 모두 2진법으로 변경
    // 짝수인경우 0으로 끝나기 때문에 1증가한 수를 리턴
    // 홀수인 경우 2진법으로 변경 후 01로 끝나는 지점을 10으로 변경한다.
    return numbers.map(number => {
        if (number % 2 === 0) return number + 1;
        
        let num = number.toString(2).split("");
        
        if (!num.includes("0")) {
            num.shift();
            num.unshift("10")
            return parseInt(num.join(""), 2);
        }
        
        for (let i = num.length; i >= 0; i--) {
            if (num[i] === "0") {
                num[i] = "1";
                num[i + 1] = "0"
                break;
            }
        }

        return parseInt(num.join(""), 2)
    })

}