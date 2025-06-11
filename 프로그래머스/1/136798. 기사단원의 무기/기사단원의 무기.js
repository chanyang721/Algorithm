function solution(number, limit, power) {
    // for i = 1; i <= number; i++
    //      let cnt = 0;
    //      for (let j = 0; j * j <= i; j++)
    //          if (i % j === 0) 
    //              answer += (j * j === i) ? 1 : 2
    // totalIron += cnt > limit ? power : cnt;
    // return 총 공격력
    var totalIron = 0;
    for (let i = 1; i <= number; i++) {
        let cnt = 0;
        for (let j = 0; j*j <= i; j++) {
            if (i % j === 0){
                cnt += (j*j===i) ? 1 : 2
            }
        }
        totalIron += cnt > limit ? power : cnt
    }
    
    return totalIron;
}