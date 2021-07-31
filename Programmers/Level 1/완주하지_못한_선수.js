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