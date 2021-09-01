function solution(lottos, win_nums) {
    // 1 ~ 45 사이의 숫자 중 6개를 찍어 맞히는 복권 lottos
    // 당첨이 가능한 최고, 최저 순위를 알아보자
    // 순서와 상관없이 숫자만 같으면 당첨이다. 
    // 구매한 로또 번호를 담은 배열 lottos
    // 당첨 번호를 담은 배열 win_nums
    // 당첨 가능한 최고, 최저 순위를 차례대로 담은 배열을 리턴
    // 모두 0인 경우 => 1등 6등 리턴
    // 최대 -> 지워지지 않은 숫자와 당첨 번호가 같은 수 + 지워진 번호가 모두 당첨번호인 경우
    // 최저 -> 지워지지 않은 숫자와 당첨 번호가 같은 수 + 지워진 번호가 모두 다른 경우
    // 0을 제외한 숫자 들을 가져온다. win_nums와 같은 숫자가 있으면 count++ => 최소값
    // 0의 개수만큼 count++ -> 최대값 
    // sort()
    // for num => lottos.length까지 1씩 증가
    //   if -> lottos[num] === 0이면, zero++;
    //   else -> 
    //      for i => 0부터 win_nums.length까지 1씩 증가
    //        if => lottos[num] === win_nums[i] count++;
    let zero = 0;
    let count = 0;
    let rank = [ 0, 6, 5, 4, 3, 2, 1 ]
    lottos = lottos.sort((a, b) => a - b);
    win_nums = win_nums.sort((a, b) => a - b);
    
    for (let num = 0; num < lottos.length; num++) {
        if (lottos[num] === 0) zero++;
        else {
            for (let i = 0; i < win_nums.length; i++) {
                if (lottos[num] === win_nums[i]) count++;
            }
        }
    }
    if (zero === 6) return [ 1, 6 ];
    if (zero === 0 && count === 0) return [ 6, 6 ];
    return [ rank[count + zero], rank[count] ];
}