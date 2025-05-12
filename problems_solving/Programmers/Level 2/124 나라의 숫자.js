function solution(n) {
    // n을 124 표기법으로 변경한 값을 리턴
    // 0 1 2 => 1 2 4
    let result = [];
    // n % 3이 0이면 n = n / 3 - 1;
    // result += "4"
    // n % 3이 1이면 result += "1"
    //        2이면 result += "2";
    while(n > 0) {
        let el = n % 3;

        if (el === 0) {
            n = Math.floor(n / 3 - 1);
            result.push("4");
        }
        else if (el === 1) { 
            n = Math.floor(n / 3);
            result.push("1")
        }
        else if (el === 2) {
            n = Math.floor(n / 3);
            result.push("2")
        }
    }
    
    return result.reverse().join("");
}