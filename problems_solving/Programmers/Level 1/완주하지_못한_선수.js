// 효율성 오답 // 
function solution(participant, completion) {
    
    for (let i = 0; i < completion.length; i++) {
        if ( participant.includes(completion[i]) ) {
            let resultIdx = participant.findIndex(el => el === completion[i])
            participant.splice(resultIdx, 1);
        }
    }
    return participant[0];
}

// 정답 // 
function solution(participant, completion) {
    let result = '';
    participant.sort()
    completion.sort()
    for(let i in participant) {
      if(participant[i] !== completion[i]) {
        result = participant[i];
        break;
      }
    }
  
    return result;
  }