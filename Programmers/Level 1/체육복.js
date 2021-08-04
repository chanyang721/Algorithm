function solution(n, lost, reserve) {
    lost = lost.sort((a, b) => a - b)
    reserve = reserve.sort((a, b) => a - b)

    
    // 겹치는(수가 같은 경우) 부분 제거
    for (let i = 0; i < lost.length; i++) {
        let duplicNum = reserve.indexOf(lost[i]);
        if ( duplicNum !== -1 ) {
            lost.splice(i, 1);
            reserve.splice(duplicNum, 1);
            i--;
        }
    }

    // 최소 참여 인원
    let students = n - lost.length;
    
    
    // 순서대로 나눠주기 
    for (let i = 0; i < reserve.length; i++) {
      let under = reserve[i] - 1;
      let upper = reserve[i] + 1;
        
      if ( lost.includes(under) ) {
          lost = lost.filter(el => el !== under)
          students++
          continue;
      } 
      else if ( lost.includes(upper) ) {
          lost = lost.filter(el => el !== upper)
          students++
      }
    }
    
    return students;
}